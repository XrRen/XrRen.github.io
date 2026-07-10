import { useState, useRef, useEffect } from "react";

/* Kernel Error — hover reveals a glitching terminal message */
export function KernelErrorMedia() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative h-40 flex items-center justify-center overflow-hidden bg-[#2a1020] px-6"
    >
      {hover && <div className="absolute inset-0">
        <div className="glitch-lines">
          {Array.from({ length: 500 }, (_, index) => (
            <span key={index} className="glitch-error">
              ERROR
            </span>
          ))}
        </div>
      </div>}
      <p
        className={`relative z-10 text-center font-bold text-sm tracking-wide transition-colors duration-150 ${hover ? "text-pink-300" : "text-pink-400/60"
          }`}
      >
        {hover ? "SYSTEM ERROR: MEMORY FRAGMENT FOUND" : "KERNEL ERROR"}
      </p>
    </div>
  );
}

/* The Voyagers — a ball that follows and lags the cursor, like it has weight */
export function VoyagersMedia() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      className="relative h-40 bg-[#2a2010] overflow-hidden cursor-pointer"
    >
      <div
        className="absolute w-6 h-6 rounded-full bg-amber-400 shadow-[0_0_16px_rgba(255,176,32,0.6)] transition-[left,top] duration-300 ease-out"
        style={{ left: `calc(${pos.x}% - 12px)`, top: `calc(${pos.y}% - 12px)` }}
      />
      <p className="absolute inset-0 flex items-center justify-center text-amber-300/80 font-bold text-sm pointer-events-none">
        ◉ move your cursor
      </p>
    </div>
  );
}

/* Cyberspace Mall / Clinic — click cycles desktop → tablet → mobile */
export function WebDevMedia() {
  const modes = ["desktop", "tablet", "mobile"];
  const [i, setI] = useState(0);
  const mode = modes[i];
  const widthClass = { desktop: "w-4/5", tablet: "w-1/2", mobile: "w-1/4" }[mode];

  return (
    <div className="h-40 bg-[#161a2a] flex flex-col items-center justify-center gap-3">
      <div
        className={`h-20 border-2 border-blue-400 rounded-md bg-[#0b0e14] transition-all duration-300 ${widthClass} flex flex-col gap-1 p-2`}
      >
        <div className="h-1.5 w-2/3 bg-blue-400/40 rounded-full" />
        <div className="h-1.5 w-1/2 bg-blue-400/25 rounded-full" />
        <div className="h-1.5 w-3/4 bg-blue-400/25 rounded-full" />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setI((i + 1) % modes.length);
        }}
        className="text-xs font-semibold text-blue-300 bg-blue-400/10 px-3 py-1.5 rounded-full hover:bg-blue-400/20 transition-colors"
      >
        {mode} — click to switch
      </button>
    </div>
  );
}

/* Pitt Challenge health app — a small live-ish tracker */
export function HealthAppMedia() {
  const [bpm, setBpm] = useState(72);

  useEffect(() => {
    const id = setInterval(() => {
      setBpm(68 + Math.floor(Math.random() * 10));
    }, 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-40 bg-[#0f1f14] flex flex-col items-center justify-center gap-1">
      <span className="text-2xl heartbeat">❤</span>
      <p className="text-green-300 font-bold text-xl">{bpm} bpm</p>
      <p className="text-green-400/70 text-xs">mini health tracker</p>
    </div>
  );
}

/* Robot Path Simulator — click arrows to move the robot on a grid */
export function RobotSimMedia() {
  const size = 5;
  const [pos, setPos] = useState({ x: 2, y: 2 });

  const move = (dx, dy) =>
    setPos((p) => ({
      x: Math.min(size - 1, Math.max(0, p.x + dx)),
      y: Math.min(size - 1, Math.max(0, p.y + dy)),
    }));

  const arrow = (label, dx, dy) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        move(dx, dy);
      }}
      className="w-7 h-7 flex items-center justify-center text-teal-300 hover:text-white hover:bg-teal-400/10 rounded transition-colors"
    >
      {label}
    </button>
  );

  return (
    <div className="h-40 bg-[#0f1f1a] flex items-center justify-center gap-6">
      <div
        className="grid gap-[3px] bg-black/30 p-2 rounded"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {Array.from({ length: size * size }).map((_, idx) => {
          const x = idx % size;
          const y = Math.floor(idx / size);
          const isRobot = x === pos.x && y === pos.y;
          return (
            <div
              key={idx}
              className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] transition-colors ${isRobot ? "bg-teal-400" : "bg-white/5"
                }`}
            >
              {isRobot ? "◆" : ""}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
        <span />
        {arrow("↑", 0, -1)}
        <span />
        {arrow("←", -1, 0)}
        <span />
        {arrow("→", 1, 0)}
        <span />
        {arrow("↓", 0, 1)}
        <span />
      </div>
    </div>
  );
}
