import { useState, useEffect } from "react";

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

/* The Voyagers — two players charge a shared co-op portal */
export function VoyagersMedia({ onCoopComplete }) {
  const [playersReady, setPlayersReady] = useState({ left: false, right: false });
  const bothReady = playersReady.left && playersReady.right;

  useEffect(() => {
    if (bothReady) onCoopComplete?.();
  }, [bothReady, onCoopComplete]);

  const togglePlayer = (player) => {
    if (bothReady || playersReady[player]) return;

    setPlayersReady((current) => ({
      ...current,
      [player]: true,
    }));
  };

  return (
    <div
      className="relative h-40 overflow-hidden bg-[#2a2010] px-5 py-4"
    >
      <div
        className={`absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
          bothReady
            ? "scale-125 border-amber-300 bg-amber-300/20 shadow-[0_0_32px_rgba(255,176,32,0.65)]"
            : "border-amber-500/40 bg-black/20"
        }`}
      />
      <div className="relative z-10 grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlayer("left");
          }}
          disabled={playersReady.left || bothReady}
          className={`flex h-24 flex-col items-center justify-center rounded-xl border text-xs font-bold transition disabled:cursor-default ${
            playersReady.left
              ? "border-amber-300 bg-amber-300/15 text-amber-200"
              : "border-amber-700/50 bg-black/20 text-amber-500/80 hover:border-amber-400"
          }`}
        >
          <span className="mb-1 text-2xl">P1</span>
          {playersReady.left ? "ready" : "tap"}
        </button>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="h-1 w-14 rounded-full bg-amber-500/30">
            <div
              className="h-full rounded-full bg-amber-300 transition-all"
              style={{ width: `${(Number(playersReady.left) + Number(playersReady.right)) * 50}%` }}
            />
          </div>
          <p className="w-24 text-[11px] font-bold leading-tight text-amber-300/80">
            {bothReady ? "portal open" : "sync together to see the detail"}
          </p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlayer("right");
          }}
          disabled={playersReady.right || bothReady}
          className={`flex h-24 flex-col items-center justify-center rounded-xl border text-xs font-bold transition disabled:cursor-default ${
            playersReady.right
              ? "border-orange-300 bg-orange-300/15 text-orange-200"
              : "border-orange-700/50 bg-black/20 text-orange-500/80 hover:border-orange-400"
          }`}
        >
          <span className="mb-1 text-2xl">P2</span>
          {playersReady.right ? "ready" : "tap"}
        </button>
      </div>
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

/* Robotic Experience with ROS — a cute self-driving car follows its route */
export function RobotSimMedia() {
  return (
    <div className="relative h-40 overflow-hidden bg-[#0f1f1a]">
      <div className="absolute inset-0 moving-grid opacity-60" />
      <div className="absolute inset-x-0 bottom-5 h-16 bg-[#111827]/80">
        <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 overflow-hidden bg-teal-300/10">
          <div className="road-dashes h-full w-[200%]" />
        </div>
      </div>
      <div className="absolute left-[18%] top-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.6px] text-teal-300/80">
        <span className="h-2 w-2 rounded-full bg-teal-300 sensor-dot" />
        ROS nav active
      </div>
      <div className="absolute bottom-10 left-[18%] right-[18%] h-8">
        {[0, 1, 2, 3].map((point) => (
          <span
            key={point}
            className="route-point absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-teal-300/70 bg-[#0f1f1a]"
            style={{ left: `${point * 33}%`, animationDelay: `${point * 0.45}s` }}
          />
        ))}
      </div>
      <div className="self-driving-car absolute bottom-11 left-[16%]">
        <div className="sensor-arc sensor-arc-one" />
        <div className="sensor-arc sensor-arc-two" />
        <div className="relative h-9 w-16 rounded-[18px] bg-teal-300 shadow-[0_0_18px_rgba(52,229,179,0.35)]">
          <div className="absolute left-4 top-1 h-4 w-8 rounded-t-full bg-[#0f1f1a]/70" />
          <div className="absolute left-2 top-4 h-2 w-2 rounded-full bg-white/80" />
          <div className="absolute right-2 top-4 h-2 w-2 rounded-full bg-white/80" />
          <div className="absolute -bottom-1 left-3 h-3 w-3 rounded-full bg-[#0b0e14] ring-2 ring-teal-100/50" />
          <div className="absolute -bottom-1 right-3 h-3 w-3 rounded-full bg-[#0b0e14] ring-2 ring-teal-100/50" />
        </div>
      </div>
      <p className="absolute bottom-2 left-0 right-0 text-center text-[11px] font-semibold text-teal-300/75">
        autonomous route in progress
      </p>
    </div>
  );
}
