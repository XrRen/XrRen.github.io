import { useState } from "react";
import {
  KernelErrorMedia,
  VoyagersMedia,
  WebDevMedia,
  HealthAppMedia,
  RobotSimMedia,
} from "./InteractiveProjectMedia";

/* ---------------------------------------------------------------- */
/* Projects                                                          */
/* ---------------------------------------------------------------- */

const projectCategories = ["All", "Game Design", "Web Dev", "Hackathon", "Robotics"];

const projects = [
  {
    title: "Kernel Error",
    category: "Game Design",
    color: "#ff3d9a",
    Media: KernelErrorMedia,
    desc: "Narrative-driven horror game — 2D puzzles, 3D interaction, save/load, Shader Graph glitch/VHS effects, branching endings.",
    interaction: "hover → glitch flicker + fake terminal message",
  },
  {
    title: "The Voyagers",
    category: "Game Design",
    color: "#ffb020",
    Media: VoyagersMedia,
    desc: "Game-jam puzzle adventure built in a short sprint, focused on physical object interactions and level pacing.",
    interaction: "hover → ball follows your cursor with weight",
  },
  {
    title: "Cyberspace Mall / Clinic Site",
    category: "Web Dev",
    color: "#6b9eff",
    Media: WebDevMedia,
    desc: "Front-end development for a retail and clinic website, focused on responsive layout and clean UI systems.",
    interaction: "click → toggle desktop / tablet / mobile preview",
  },
  {
    title: "Pitt Challenge — Health App",
    category: "Hackathon",
    color: "#66d980",
    Media: HealthAppMedia,
    desc: "Hackathon build (Pitt Challenge 2022): a small health-tracking app interface built under time pressure.",
    interaction: "live-updating mini app-style card",
  },
  {
    title: "Robot Path Simulator",
    category: "Robotics",
    color: "#34e5b3",
    Media: RobotSimMedia,
    desc: "A small robotics playground: click arrows to move a robot across a grid, built to make ROS + Python logic tangible.",
    interaction: "click arrows → robot moves on grid",
  },
];

export function ProjectsSection({ activeFilter, onFilterChange }) {
  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-6">
      <div className="text-center mb-3">
        <p className="text-xs font-semibold tracking-[2px] text-teal-300 mb-3">
          PROJECTS
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Things I&apos;ve Built
        </h2>
        <p className="text-gray-400 mt-3">
          Games, code, and small systems — click a category to filter
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeFilter === cat
                ? "bg-teal-300 text-[#0b0e14] border-teal-300"
                : "bg-[#161a22] text-gray-400 border-[#2a2f3a] hover:border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((p) => (
          <div
            key={p.title}
            className="bg-[#161a22] border border-[#2a2f3a] rounded-2xl overflow-hidden flex flex-col"
          >
            <p.Media />
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.desc}</p>
              <p className="text-xs" style={{ color: p.color }}>
                ✦ {p.interaction}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Photography                                                       */
/* ---------------------------------------------------------------- */

const photoCategories = ["All", "City", "Nature", "People", "Night", "Travel", "Texture"];

const photos = [
  { loc: "Shibuya, Tokyo", mood: "Restless energy", category: "City", color: "#8c6b4d" },
  { loc: "Pacific Coast", mood: "Quiet and vast", category: "Nature", color: "#4d738c" },
  { loc: "Home street, dusk", mood: "Golden and still", category: "City", color: "#807f6b" },
  { loc: "Night market", mood: "Warm chaos", category: "Night", color: "#995252" },
  { loc: "Mountain trail", mood: "Cold clarity", category: "Nature", color: "#526652" },
  { loc: "Subway platform", mood: "In-between", category: "People", color: "#66668c" },
  { loc: "Rooftop, midnight", mood: "City hum", category: "Night", color: "#4d5a66" },
  { loc: "Old brick wall", mood: "Texture study", category: "Texture", color: "#4d4d52" },
];

export function PhotographySection() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="photography" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-6">
      <div className="text-center mb-3">
        <p className="text-xs font-semibold tracking-[2px] text-amber-400 mb-3">
          PHOTOGRAPHY
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Captured Frames
        </h2>
        <p className="text-gray-400 mt-3">
          A visual diary, not just a gallery — what I noticed through the lens
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-10">
        {photoCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              filter === cat
                ? "bg-amber-400 text-[#0b0e14] border-amber-400"
                : "bg-[#161a22] text-gray-400 border-[#2a2f3a] hover:border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-black rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
          {visible.map((p, i) => (
            <div key={p.loc} className="bg-[#161a22] rounded overflow-hidden group">
              <div
                className="aspect-[4/3] flex items-end p-2 transition-transform group-hover:scale-[1.02]"
                style={{ backgroundColor: p.color }}
              >
                <span className="text-[10px] text-white/70">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-white">{p.loc}</p>
                <p className="text-xs mt-0.5 text-amber-400">{p.mood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* About                                                              */
/* ---------------------------------------------------------------- */

const narrative = [
  "I am a computer science student who likes building things that people can feel.",
  "I enjoy game design because it combines logic, emotion, and interaction.",
  "I also like photography — it trains me to notice composition, light, and small details.",
  "Robotics interests me because it brings code into physical movement.",
];

const principles = [
  { label: "Code", rest: "is how I build systems.", color: "#34e5b3" },
  { label: "Games", rest: "are how I build experiences.", color: "#ff3d9a" },
  { label: "Photography", rest: "is how I train my eye.", color: "#ffb020" },
  { label: "Robotics", rest: "is how I make logic move.", color: "#a88cff" },
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto scroll-mt-6">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[2px] text-[#a88cff] mb-3">
          ABOUT ME
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Notebook — Open to Page One
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-[#161a22] border border-[#2a2f3a] rounded-2xl p-8 flex flex-col gap-5">
          {narrative.map((line, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {principles.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-4 bg-[#161a22] rounded-xl px-6 py-5 border"
              style={{ borderColor: `${p.color}66` }}
            >
              <span
                className="w-1 h-7 rounded-full shrink-0"
                style={{ backgroundColor: p.color }}
              />
              <p className="text-white">
                <span className="font-semibold" style={{ color: p.color }}>
                  {p.label}
                </span>{" "}
                {p.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Contact                                                            */
/* ---------------------------------------------------------------- */

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 max-w-xl mx-auto scroll-mt-6 text-center">
      <p className="text-xs font-semibold tracking-[2px] text-[#ff6b6b] mb-3">
        CONTACT
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
        Open the Mailbox
      </h2>
      <p className="text-gray-400 mb-8">
        Have a project, a question, or just want to say hi? I&apos;d love to
        hear from you.
      </p>

      <div className="bg-[#161a22] border border-[#ff6b6b]/40 rounded-2xl p-8 flex flex-col items-center gap-5">
        <a
          href="mailto:hello@example.com"
          className="inline-block bg-[#ff6b6b] text-[#0b0e14] font-semibold px-8 py-3 rounded-full hover:brightness-110 transition"
        >
          hello@example.com
        </a>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
