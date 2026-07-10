import { useEffect, useRef, useState } from "react";

const BLADE_COUNT = 8;
const PIVOT_RADIUS = 42; // distance of each blade's pivot from center, in a 100x100 viewBox
const BASE_HALF_WIDTH = 24; // blade width at the pivot end
const TIP_HALF_WIDTH = 5; // blade width at the far tip
const BLADE_LENGTH = 60; // long enough that tips overlap past center when closed
const OPEN_ANGLE = 55; // extra rotation (degrees) that swings blades out to "open"

const CYCLE_MS = 2200;
const CLOSE_START = 0.38; // fraction of cycle where the close begins
const CLOSE_MID = 0.5; // fully closed
const CLOSE_END = 0.62; // back open

const bladePoints = `0,-${BASE_HALF_WIDTH} 0,${BASE_HALF_WIDTH} ${BLADE_LENGTH},${TIP_HALF_WIDTH} ${BLADE_LENGTH},-${TIP_HALF_WIDTH}`;

const blades = Array.from({ length: BLADE_COUNT }, (_, i) => {
  const baseAngle = (360 / BLADE_COUNT) * i;
  const rad = (baseAngle * Math.PI) / 180;
  const x = 50 + PIVOT_RADIUS * Math.cos(rad);
  const y = 50 + PIVOT_RADIUS * Math.sin(rad);
  // At rest each blade points from its pivot straight at the center —
  // that's what makes all 8 overlap into a solid disc when closed.
  const orient = baseAngle + 180;
  return { key: i, x, y, orient };
});

function angleForPhase(p) {
  if (p < CLOSE_START) return OPEN_ANGLE;
  if (p < CLOSE_MID) {
    const t = (p - CLOSE_START) / (CLOSE_MID - CLOSE_START);
    return OPEN_ANGLE * (1 - t);
  }
  if (p < CLOSE_END) {
    const t = (p - CLOSE_MID) / (CLOSE_END - CLOSE_MID);
    return OPEN_ANGLE * t;
  }
  return OPEN_ANGLE;
}

export default function ApertureIris() {
  const [theta, setTheta] = useState(OPEN_ANGLE);
  const startRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    function tick(ts) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = (ts - startRef.current) % CYCLE_MS;
      setTheta(angleForPhase(elapsed / CYCLE_MS));
      frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const flashOpacity = theta < 12 ? 1 - theta / 12 : 0;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* <circle cx="50" cy="50" r="45" fill="none" stroke="#ffb020" strokeOpacity="0.25" strokeWidth="0.6" /> */}
        {blades.map((b) => (
          <g
            key={b.key}
            transform={`translate(${b.x} ${b.y}) rotate(${b.orient + theta})`}
          >
            <polygon points={bladePoints} fill="#12151c" stroke="#ffb020" strokeOpacity="0.35" strokeWidth="0.5" />
          </g>
        ))}
      </svg>
      <div
        className="absolute inset-0 bg-white"
        style={{ opacity: flashOpacity, transition: "opacity 80ms linear" }}
      />
    </div>
  );
}
