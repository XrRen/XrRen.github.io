import { useEffect, useRef } from "react";

// Fig. 1: a 2-link robot arm drawn on canvas. It solves inverse kinematics
// toward the pointer, or drifts on its own when the pointer is away.
// Colours come from the CSS tokens so it follows light / dark mode.
export default function RobotArm() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const coordRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let tx = null;
    let ty = null;
    let cx = 0;
    let cy = 0;
    let visible = true;
    let t = 0;
    let raf = 0;

    const token = (name) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const resize = () => {
      const box = stage.getBoundingClientRect();
      W = box.width;
      H = box.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!cx) {
        cx = W * 0.68;
        cy = H * 0.38;
      }
    };

    const draw = () => {
      const ink = token("--ink");
      const ink2 = token("--ink2");
      const mark = token("--mark");
      const sheet = token("--sheet");
      ctx.clearRect(0, 0, W, H);

      const bx = W * 0.32;
      const by = H * 0.82;
      const L1 = Math.min(W, H) * 0.36;
      const L2 = Math.min(W, H) * 0.3;
      const gx = tx ?? W * 0.62 + Math.cos(t / 90) * W * 0.14;
      const gy = ty ?? H * 0.36 + Math.sin(t / 70) * H * 0.12;
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;

      let dx = cx - bx;
      let dy = cy - by;
      let d = Math.hypot(dx, dy);
      const max = L1 + L2 - 2;
      if (d > max) {
        dx *= max / d;
        dy *= max / d;
        d = max;
      }
      const cos2 = (d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2);
      const a2 = Math.acos(Math.max(-1, Math.min(1, cos2)));
      const a1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(a2), L1 + L2 * Math.cos(a2));
      const ex = bx + L1 * Math.cos(a1);
      const ey = by + L1 * Math.sin(a1);
      const hx = ex + L2 * Math.cos(a1 + a2);
      const hy = ey + L2 * Math.sin(a1 + a2);

      // Reach envelope and dimension lines
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = ink2;
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      ctx.arc(bx, by, L1 + L2, Math.PI, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(bx, by, Math.abs(L1 - L2) + 8, Math.PI, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(hx, by);
      ctx.moveTo(hx, by);
      ctx.lineTo(hx, hy);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      // Base with hatching
      ctx.strokeStyle = ink;
      ctx.lineWidth = 1.25;
      ctx.strokeRect(bx - 26, by, 52, 14);
      for (let i = -26; i < 26; i += 7) {
        ctx.beginPath();
        ctx.moveTo(bx + i, by + 14);
        ctx.lineTo(bx + i + 7, by + 22);
        ctx.stroke();
      }

      // Links
      [
        [bx, by, ex, ey, 12],
        [ex, ey, hx, hy, 9],
      ].forEach(([x1, y1, x2, y2, w]) => {
        const ang = Math.atan2(y2 - y1, x2 - x1);
        const nx = -Math.sin(ang) * w;
        const ny = Math.cos(ang) * w;
        ctx.beginPath();
        ctx.moveTo(x1 + nx, y1 + ny);
        ctx.lineTo(x2 + nx, y2 + ny);
        ctx.arc(x2, y2, w, ang + Math.PI / 2, ang - Math.PI / 2, true);
        ctx.lineTo(x1 - nx, y1 - ny);
        ctx.arc(x1, y1, w, ang - Math.PI / 2, ang + Math.PI / 2, true);
        ctx.closePath();
        ctx.fillStyle = sheet;
        ctx.fill();
        ctx.stroke();
        // centre line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.setLineDash([8, 3, 2, 3]);
        ctx.strokeStyle = ink2;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = ink;
      });

      // Joints
      [
        [bx, by],
        [ex, ey],
      ].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = sheet;
        ctx.fill();
        ctx.stroke();
      });

      // Shoulder angle
      ctx.strokeStyle = mark;
      ctx.beginPath();
      ctx.arc(bx, by, 34, Math.min(0, a1), Math.max(0, a1));
      ctx.stroke();
      ctx.font = '500 11px "Chivo Mono", monospace';
      ctx.fillStyle = mark;
      ctx.fillText(`${Math.round((-a1 * 180) / Math.PI)}°`, bx + 38, by - 10);

      // Gripper and target
      ctx.beginPath();
      ctx.arc(hx, hy, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(gx - 9, gy);
      ctx.lineTo(gx + 9, gy);
      ctx.moveTo(gx, gy - 9);
      ctx.lineTo(gx, gy + 9);
      ctx.stroke();
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(gx, gy, 14, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.globalAlpha = 1;

      if (coordRef.current) {
        const pad = (n) => String(Math.round(n)).padStart(3, "0");
        coordRef.current.textContent = `x ${pad(hx - bx)} · y ${pad(by - hy)}`;
      }
    };

    const loop = () => {
      if (visible) {
        t += 1;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      const box = stage.getBoundingClientRect();
      tx = e.clientX - box.left;
      ty = e.clientY - box.top;
    };
    const onLeave = () => {
      tx = null;
      ty = null;
    };
    const onResize = () => {
      resize();
      draw();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(stage);

    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    scheme.addEventListener("change", draw);

    resize();
    if (reduce) draw();
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      scheme.removeEventListener("change", draw);
    };
  }, []);

  return (
    <div
      className="stage"
      ref={stageRef}
      aria-label="Interactive robot arm drawing. Move the pointer to guide it."
    >
      <canvas ref={canvasRef} />
      <span className="m">Fig. 1 — 2-link arm, inverse kinematics</span>
      <span className="m r" ref={coordRef}>
        x 000 · y 000
      </span>
    </div>
  );
}
