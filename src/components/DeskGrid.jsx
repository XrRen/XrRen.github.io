import { Camera, Gamepad2, Bot, NotebookText, Monitor, Mail } from "lucide-react";
import { deskObjects } from "../data/deskObjects";

// Map icon name strings (from data file) to the actual icon components.
const ICONS = { Camera, Gamepad2, Bot, NotebookText, Monitor, Mail };

// Objects that belong to the Projects section also carry a filter category,
// so clicking them both scrolls there AND pre-filters to that category.
const PROJECT_FILTERS = {
  games: "Game Design",
  web: "Web Dev",
  robotics: "Robotics",
};

export default function DeskGrid({ onNavigate }) {
  const handleClick = (obj) => {
    const targetId = PROJECT_FILTERS[obj.id] ? "work" : obj.id;
    if (PROJECT_FILTERS[obj.id]) {
      onNavigate?.(PROJECT_FILTERS[obj.id]);
    }
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-6 pb-24">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">Explore the Desk</h2>
        <p className="text-sm text-gray-400 mt-1">
          Every object opens a different part of my work
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deskObjects.map((obj) => {
          const Icon = ICONS[obj.iconName];
          return (
            <button
              key={obj.id}
              onClick={() => handleClick(obj)}
              className="group bg-[#1c212a] border border-[#38404d] rounded-2xl px-6 py-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:border-white/30"
            >
              <div
                className="w-[88px] h-[88px] rounded-[20px] flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${obj.color}1f` }}
              >
                <Icon size={36} color={obj.color} strokeWidth={1.75} />
              </div>
              <span className="text-lg font-semibold text-white">
                {obj.name}
              </span>
              <span className="text-sm mt-1" style={{ color: obj.color }}>
                → {obj.section}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
