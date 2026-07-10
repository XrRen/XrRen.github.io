import { useState } from "react";
import ApertureIris from "./ApertureIris";

const interests = [
  {
    id: "game",
    label: "Game Design",
    detail: "Unity · narrative · horror aesthetics",
    color: "#ff3d9a",
    hoverNote: "hover → glitch / VHS background",
  },
  {
    id: "photo",
    label: "Photography",
    detail: "Street · travel · composition",
    color: "#ffb020",
    hoverNote: "hover → camera shutter flash",
  },
  {
    id: "robotics",
    label: "Robotics / Systems",
    detail: "ROS · Python · movement & control",
    color: "#34e5b3",
    hoverNote: "hover → moving grid path",
  },
];

export default function Hero() {
  const [activeEffect, setActiveEffect] = useState(null);

  return (
    <section className="relative overflow-hidden">
      {/* Background effects, layered behind everything else in this section */}
      <div className="absolute inset-0 pointer-events-none">
        {activeEffect === "game" && <GlitchBackground />}
        {activeEffect === "photo" && <ShutterBackground />}
        {activeEffect === "robotics" && <GridPathBackground />}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-24">
        <p className="text-xs md:text-sm font-semibold tracking-[2px] text-teal-300 mb-4">
          WELCOME TO THE LAB — CLICK TO SEE MY WORLD
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I&apos;m Sherry / Xirui
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-xl text-gray-400">
          I build interactive worlds, visual stories, and small systems that
          feel alive.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {interests.map((item) => (
            <button
              key={item.id}
              onMouseEnter={() => setActiveEffect(item.id)}
              onMouseLeave={() => setActiveEffect(null)}
              onFocus={() => setActiveEffect(item.id)}
              onBlur={() => setActiveEffect(null)}
              className="text-left bg-[#1c212a]/90 backdrop-blur rounded-2xl px-6 py-4 border transition-transform hover:-translate-y-1"
              style={{ borderColor: `${item.color}80` }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-semibold text-white">{item.label}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.detail}</p>
              <p
                className="text-[10px] mt-1"
                style={{ color: item.color }}
              >
                ✦ {item.hoverNote}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Background effect components ---

function GlitchBackground() {
  return (
    <div className="absolute inset-0 opacity-70 overflow-hidden">
      <div className="glitch-lines">
      </div>
    </div>
  );
}

function ShutterBackground() {
  return <ApertureIris />;
}

function GridPathBackground() {
  return (
    <div className="absolute inset-0 opacity-60">
      <div className="moving-grid" />
    </div>
  );
}
