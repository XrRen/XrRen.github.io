import { useEffect, useRef, useState } from "react";
import {
  KernelErrorMedia,
  VoyagersMedia,
  WebDevMedia,
  HealthAppMedia,
  RobotSimMedia,
} from "./InteractiveProjectMedia";
import bit1Sound from "../assets/Bit1.mp3?url";
import bit2Sound from "../assets/Bit2.mp3?url";
import bit3Sound from "../assets/Bit3.mp3?url";
import bit4Sound from "../assets/Bit4.mp3?url";
import photo0325 from "../assets/DSC_0325.JPG";
import photo0438 from "../assets/DSC_0438.jpg";
import photo0448 from "../assets/DSC_0448.jpg";
import photo0466 from "../assets/DSC_0466.jpg";
import photo0499 from "../assets/DSC_0499.jpg";
import photo0556 from "../assets/DSC_0556.jpg";
import photo0601 from "../assets/DSC_0601.jpg";
import photo0604 from "../assets/DSC_0604.jpg";
import photo1653 from "../assets/DSC_1653.jpg";
import photo1860 from "../assets/DSC_1860.jpg";
import photo1929 from "../assets/DSC_1929.jpg";
import photo2381 from "../assets/DSC_2381.jpg";
import photo2438 from "../assets/DSC_2438.jpg";
import photo2652 from "../assets/DSC_2652.jpg";

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
    desc: "A horror game where I got to chase the feeling of a screen that does not want you there.",
    details:
      "This project let me build tension through small moments: a flicker, a wrong-looking screen, a puzzle that feels like it is watching back.\n\nI loved mixing 2D puzzle spaces with 3D interactions because it made the world feel a little broken in the best way. The glitch and VHS effects were not just decoration. I wanted the visuals to feel like part of the story's nervous system.",
    link: {
      href: "https://www.youtube.com/watch?v=aeM3NjrkVQ0&t=1s",
      label: "Watch the playthrough video",
    },
  },
  {
    title: "The Voyagers",
    category: "Game Design",
    color: "#ffb020",
    Media: VoyagersMedia,
    desc: "A two-player co-op puzzle adventure made in a rush, with all the joy and chaos that game jams bring.",
    details:
      "I like game jams because every decision has to matter. The Voyagers became a small co-op world built around communication, timing, and shared momentum.\n\nThe most fun part was thinking about how two players read the same space differently, then tuning the interactions so teamwork felt playful instead of forced. It taught me how much personality can fit into a short experience when the pacing is honest and the mechanics are clear.",
    link: {
      href: "https://avacai.itch.io/the-voyagers",
      label: "Feel free to try our game",
    },
    requiresCoop: true,
  },
  {
    title: "Cyberspace Mall / Clinic Site",
    category: "Web Dev",
    color: "#6b9eff",
    Media: WebDevMedia,
    desc: "A web project where I treated layout like a little city: clear paths, useful signs, and no dead ends.",
    details:
      "I enjoyed thinking about how real visitors move through practical information when they are not there to admire the design.\n\nThe challenge was making retail and clinic content feel organized without becoming cold or generic. Responsive design felt like storytelling here: the same place had to make sense from a desktop screen down to a phone.",
    link: {
      href: "https://bmg3.net/",
      label: "Visit the site",
    },
  },
  {
    title: "Pitt Challenge — Health App",
    category: "Hackathon",
    color: "#66d980",
    Media: HealthAppMedia,
    desc: "A fast hackathon health app that reminded me how exciting it is to turn an idea into something touchable.",
    details:
      "Pitt Challenge had that intense hackathon energy where the clock is always in the room, and I honestly enjoyed that pressure.\n\nI wanted the interface to feel immediate: quick status, simple feedback, and no extra friction between the user and the information. What stayed with me most was the feeling of shaping something useful with a team while the idea was still warm.",
    link: {
      href: "https://www.youtube.com/watch?v=fsVlWygf8c8",
      label: "Watch the demo video",
    },
  },
  {
    title: "Robotic Experience with ROS",
    category: "Robotics",
    color: "#34e5b3",
    Media: RobotSimMedia,
    desc: "A ROS robotics experience where code, sensors, and movement start to feel like one connected system.",
    details:
      "Working with ROS made robotics feel alive to me because every part has a role: nodes talk to each other, sensor data becomes decisions, and small commands turn into motion. I enjoyed seeing how a robot can become a system of conversations instead of just a machine following instructions.\n\nThis project helped me think through path planning, movement constraints, and feedback in a more visual way. The simulator became a small place to test ideas before imagining them on a real robot, and I liked how even a simple grid could show the relationship between logic, space, and control.",
    interaction: "watch → self-driving car follows a ROS-style route",
  },
];

export function ProjectsSection({ activeFilter, onFilterChange }) {
  const [flippedProject, setFlippedProject] = useState(null);
  const [coopReadyProjects, setCoopReadyProjects] = useState({});

  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const toggleProject = (title) => {
    setFlippedProject((current) => (current === title ? null : title));
  };

  const handleProjectKeyDown = (event, title, canFlip) => {
    if (event.currentTarget !== event.target) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!canFlip) return;
      toggleProject(title);
    }
  };

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
        {visible.map((p) => {
          const isFlipped = flippedProject === p.title;
          const canFlip = !p.requiresCoop || coopReadyProjects[p.title] || isFlipped;

          return (
            <div
              key={p.title}
              className={`project-card ${isFlipped ? "is-flipped" : ""}`}
              role="button"
              tabIndex={0}
              aria-pressed={isFlipped}
              aria-label={`${p.title}: ${isFlipped ? "show preview" : canFlip ? "show project details" : "tap P1 and P2 to unlock details"}`}
              onClick={() => {
                if (!canFlip) return;
                toggleProject(p.title);
              }}
              onKeyDown={(event) => handleProjectKeyDown(event, p.title, canFlip)}
            >
              <div className="project-card-inner">
                <div
                  className="project-card-face project-card-front bg-[#161a22] border border-[#2a2f3a] rounded-2xl overflow-hidden"
                  aria-hidden={isFlipped}
                  inert={isFlipped}
                >
                  <p.Media
                    onCoopComplete={
                      coopReadyProjects[p.title]
                        ? undefined
                        : () => {
                            setCoopReadyProjects((current) => ({
                              ...current,
                              [p.title]: true,
                            }));
                            setFlippedProject(p.title);
                          }
                    }
                  />
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-white">{p.title}</h3>
                      <span
                        className="shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
                        style={{ color: p.color, borderColor: `${p.color}66` }}
                      >
                        Details
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                    <p className="text-xs" style={{ color: p.color }}>
                      {p.interaction}
                    </p>
                  </div>
                </div>

                <div
                  className="project-card-face project-card-back border rounded-2xl p-6 flex flex-col justify-between gap-5"
                  aria-hidden={!isFlipped}
                  inert={!isFlipped}
                >
                  <div className="flex min-h-0 flex-col gap-4">
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[2px]"
                        style={{ color: p.color }}
                      >
                        {p.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-white">{p.title}</h3>
                    </div>
                    <div className="project-card-details space-y-4 pr-2 text-sm leading-6 text-gray-300">
                      {p.link && (
                        <a
                          href={p.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit text-sm font-semibold transition hover:brightness-125"
                          style={{ color: p.color }}
                          onClick={(event) => event.stopPropagation()}
                        >
                          {p.link.label}
                        </a>
                      )}
                      {p.details.split("\n\n").map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                      
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Click again to return to the interactive preview.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Photography                                                       */
/* ---------------------------------------------------------------- */

const photoCategories = ["All", "City", "Nature", "People", "Night"];

const photos = [
  { loc: "Frame 0325", mood: "Ocean and Friends", category: "People", image: photo0325 },
  { loc: "Frame 0438", mood: "Market Corner", category: "City", image: photo0438 },
  { loc: "Frame 0448", mood: "Small pause", category: "People", image: photo0448 },
  { loc: "Frame 0466", mood: "Edge of evening", category: "City", image: photo0466 },
  { loc: "Frame 0499", mood: "Soft distance", category: "Nature", image: photo0499 },
  { loc: "Frame 0556", mood: "Light and Flowers", category: "Nature", image: photo0556 },
  { loc: "Frame 0601", mood: "Summer night", category: "Nature", image: photo0601 },
  { loc: "Frame 0604", mood: "Freedom", category: "Nature", image: photo0604 },
  { loc: "Frame 1653", mood: "Time", category: "City", image: photo1653 },
  { loc: "Frame 1860", mood: "Firework", category: "Night", image: photo1860 },
  { loc: "Frame 1929", mood: "Sleeping Lotus", category: "Nature", image: photo1929 },
  { loc: "Frame 2381", mood: "Faith", category: "Nature", image: photo2381 },
  { loc: "Frame 2438", mood: "Urban rhythm", category: "Nature", image: photo2438 },
  { loc: "Frame 2652", mood: "Montain", category: "Nature", image: photo2652 },
];

export function PhotographySection() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);
  const [activePhoto, setActivePhoto] = useState(0);
  const selectedPhoto = visible[activePhoto] ?? visible[0];

  useEffect(() => {
    setActivePhoto(0);
  }, [filter]);

  const movePhoto = (direction) => {
    setActivePhoto((current) => (current + direction + visible.length) % visible.length);
  };

  const shufflePhoto = () => {
    if (visible.length < 2) return;

    setActivePhoto((current) => {
      const next = Math.floor(Math.random() * (visible.length - 1));
      return next >= current ? next + 1 : next;
    });
  };

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

      <div className="photo-lab rounded-2xl border border-[#2a2f3a] bg-black p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-5">
          <div className="photo-viewfinder">
            <img
              src={selectedPhoto.image}
              alt={`${selectedPhoto.loc} photography`}
              className="photo-viewfinder-image"
            />
            <div className="photo-viewfinder-grid" />
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.6px] text-white/80">
              {selectedPhoto.category}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-white">{selectedPhoto.loc}</p>
                <p className="text-sm text-amber-300">{selectedPhoto.mood}</p>
              </div>
              <p className="shrink-0 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white/80">
                {String(activePhoto + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#2a2f3a] bg-[#10151f] p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-amber-400">
                Camera Desk
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Pick a frame from the filmstrip or press the shutter to let the page choose one.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => movePhoto(-1)}
                className="rounded-full border border-[#2a2f3a] px-3 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-amber-400 hover:text-white"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                onClick={shufflePhoto}
                className="rounded-full bg-amber-400 px-3 py-2 text-sm font-bold text-[#0b0e14] transition hover:brightness-110"
              >
                Shutter
              </button>
              <button
                onClick={() => movePhoto(1)}
                className="rounded-full border border-[#2a2f3a] px-3 py-2 text-sm font-bold text-gray-300 transition-colors hover:border-amber-400 hover:text-white"
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="photo-filmstrip mt-5 flex gap-3 overflow-x-auto pb-2">
          {visible.map((p, i) => (
            <button
              key={p.loc}
              onClick={() => setActivePhoto(i)}
              className={`photo-card group w-40 shrink-0 overflow-hidden rounded-lg border bg-[#161a22] text-left transition ${
                i === activePhoto
                  ? "border-amber-400"
                  : "border-[#2a2f3a] hover:border-gray-500"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.loc} photography`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-2">
                <span className="text-[10px] text-white/70">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-white">{p.loc}</p>
                <p className="text-xs mt-0.5 text-amber-400">{p.mood}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* About                                                              */
/* ---------------------------------------------------------------- */

const aboutTokens = [
  {
    id: "code",
    label: "Code",
    symbol: "C",
    color: "#34e5b3",
    sound: bit1Sound,
    note: "I am a computer science student who likes building systems that people can feel.",
  },
  {
    id: "games",
    label: "Games",
    symbol: "G",
    color: "#ff3d9a",
    sound: bit2Sound,
    note: "Game design gives me a place to combine logic, emotion, interaction, and atmosphere.",
  },
  {
    id: "photo",
    label: "Photo",
    symbol: "P",
    color: "#ffb020",
    sound: bit3Sound,
    note: "Photography trains my eye for composition, light, small details, and visual rhythm.",
  },
  {
    id: "robot",
    label: "Robot",
    symbol: "R",
    color: "#a88cff",
    sound: bit4Sound,
    note: "Robotics interests me because it turns code into physical movement and feedback.",
  },
];

const aboutTokenIds = aboutTokens.map((token) => token.id);

const getRandomPadId = (previousPadId) => {
  const choices = aboutTokenIds.filter((id) => id !== previousPadId);
  return choices[Math.floor(Math.random() * choices.length)];
};

const createRandomSequence = (length) => {
  const sequence = [];

  while (sequence.length < length) {
    sequence.push(getRandomPadId(sequence[sequence.length - 1]));
  }

  return sequence;
};

const createUnlockOrder = () => {
  const remaining = [...aboutTokenIds];
  const order = [];

  while (remaining.length > 0) {
    const index = Math.floor(Math.random() * remaining.length);
    order.push(remaining.splice(index, 1)[0]);
  }

  return order;
};

export function AboutSection() {
  const soundRefs = useRef({});
  const audioUnlockedRef = useRef(false);
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState(() => createRandomSequence(2));
  const [unlockOrder, setUnlockOrder] = useState(() => createUnlockOrder());
  const [inputIndex, setInputIndex] = useState(0);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [playbackIndex, setPlaybackIndex] = useState(0);
  const [litPadId, setLitPadId] = useState(null);
  const [unlocked, setUnlocked] = useState([]);
  const [streak, setStreak] = useState(0);
  const [activeTokenId, setActiveTokenId] = useState("games");
  const [status, setStatus] = useState("Press Play Signal. Every round is random.");
  const [roundFailed, setRoundFailed] = useState(false);

  const activeToken =
    aboutTokens.find((token) => token.id === activeTokenId) ?? aboutTokens[0];

  const playPadSound = (tokenId) => {
    const sound = soundRefs.current[tokenId];
    if (!sound) return;

    sound.pause();
    sound.currentTime = 0;
    sound.play().catch(() => {
      // Browsers can block audio until the visitor interacts with the page.
    });
  };

  const unlockAudio = () => {
    if (audioUnlockedRef.current) return;

    audioUnlockedRef.current = true;
    aboutTokens.forEach((token) => {
      const sound = soundRefs.current[token.id];
      if (!sound) return;

      sound.muted = true;
      sound
        .play()
        .then(() => {
          sound.pause();
          sound.currentTime = 0;
          sound.muted = false;
        })
        .catch(() => {
          sound.muted = false;
        });
    });
  };

  useEffect(() => {
    if (!isShowingSequence) return undefined;

    if (playbackIndex >= sequence.length) {
      const doneTimer = window.setTimeout(() => {
        setLitPadId(null);
        setIsShowingSequence(false);
        setPlaybackIndex(0);
        setInputIndex(0);
        setStatus("Your turn. Repeat the signal.");
      }, 260);

      return () => window.clearTimeout(doneTimer);
    }

    const tokenId = sequence[playbackIndex];
    setLitPadId(tokenId);
    playPadSound(tokenId);

    const timer = window.setTimeout(() => {
      setLitPadId(null);
      window.setTimeout(() => setPlaybackIndex((current) => current + 1), 160);
    }, 460);

    return () => window.clearTimeout(timer);
  }, [isShowingSequence, playbackIndex, sequence]);

  const playSignal = () => {
    unlockAudio();
    setRoundFailed(false);
    setStatus("Watch the signal.");
    setInputIndex(0);
    setPlaybackIndex(0);
    setIsShowingSequence(true);
  };

  const resetSignal = () => {
    setLevel(1);
    setSequence(createRandomSequence(2));
    setUnlockOrder(createUnlockOrder());
    setInputIndex(0);
    setIsShowingSequence(false);
    setPlaybackIndex(0);
    setLitPadId(null);
    setStreak(0);
    setRoundFailed(false);
    setStatus("Game reset. Your unlocked clues stay open.");
  };

  const advanceLevel = () => {
    const nextLevel = level + 1;
    const nextLength = Math.min(7, 2 + Math.floor(nextLevel / 2));

    setLevel(nextLevel);
    setSequence(createRandomSequence(nextLength));
    setStatus(
      unlocked.length === aboutTokens.length
        ? "Nice run. New random signal loaded."
        : "Clue unlocked. New random signal loaded.",
    );
  };

  const handlePadClick = (tokenId) => {
    if (isShowingSequence) return;

    unlockAudio();
    setLitPadId(tokenId);
    playPadSound(tokenId);
    window.setTimeout(() => setLitPadId(null), 180);

    const expectedTokenId = sequence[inputIndex];
    if (tokenId !== expectedTokenId) {
      setInputIndex(0);
      setStreak(0);
      setRoundFailed(true);
      setStatus("Round failed. Press Play Signal to hear a new pattern and try again.");
      setSequence(createRandomSequence(sequence.length));
      return;
    }

    const nextInputIndex = inputIndex + 1;
    const completedRound = nextInputIndex === sequence.length;

    if (!completedRound) {
      setInputIndex(nextInputIndex);
      setStatus(`${nextInputIndex} / ${sequence.length} matched.`);
      return;
    }

    const nextUnlockedTokenId = unlockOrder.find((id) => !unlocked.includes(id));
    if (nextUnlockedTokenId) {
      setActiveTokenId(nextUnlockedTokenId);
      setUnlocked((current) => [...current, nextUnlockedTokenId]);
    }

    setStreak((current) => current + 1);
    setInputIndex(0);
    setRoundFailed(false);
    advanceLevel();
  };

  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto scroll-mt-6">
      <div className="hidden" aria-hidden="true">
        {aboutTokens.map((token) => (
          <audio
            key={token.id}
            ref={(element) => {
              if (element) soundRefs.current[token.id] = element;
            }}
            preload="auto"
            src={token.sound}
          />
        ))}
      </div>
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[2px] text-[#a88cff] mb-3">
          ABOUT ME
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Notebook — Open to Page One
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="about-signal-panel">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a88cff]">
                Signal Level {level}
              </p>
              <p className={`mt-1 text-sm ${roundFailed ? "font-semibold text-[#ff6b6b]" : "text-gray-400"}`}>
                {status}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={playSignal}
                disabled={isShowingSequence}
                className="rounded-full bg-[#a88cff] px-4 py-2 text-sm font-bold text-[#0b0e14] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
              >
                Play Signal
              </button>
              <button
                onClick={resetSignal}
                className="rounded-full border border-[#2a2f3a] px-4 py-2 text-sm font-semibold text-gray-300 transition-colors hover:border-[#a88cff] hover:text-white"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">
            <div className="rounded-xl border border-[#2a2f3a] bg-[#161a22] px-3 py-2">
              Length <span className="text-white">{sequence.length}</span>
            </div>
            <div className="rounded-xl border border-[#2a2f3a] bg-[#161a22] px-3 py-2">
              Streak <span className="text-white">{streak}</span>
            </div>
            <div className="rounded-xl border border-[#2a2f3a] bg-[#161a22] px-3 py-2">
              Clues <span className="text-white">{unlocked.length}/{aboutTokens.length}</span>
            </div>
          </div>

          <div className="about-signal-stage" aria-label="About me signal memory game">
            {aboutTokens.map((token) => {
              const isLit = litPadId === token.id;
              const isUnlocked = unlocked.includes(token.id);

              return (
                <button
                  key={token.id}
                  onClick={() => handlePadClick(token.id)}
                  className={`about-signal-pad ${isLit ? "is-lit" : ""} ${isUnlocked ? "is-unlocked" : ""}`}
                  style={{
                    "--pad-color": token.color,
                    borderColor: `${token.color}70`,
                  }}
                  aria-label={`Signal pad ${token.label}`}
                  disabled={isShowingSequence}
                >
                  <span className="about-signal-symbol">{token.symbol}</span>
                  <span className="about-signal-label">{token.label}</span>
                </button>
              );
            })}
            <div className="about-signal-core">
              <span>{inputIndex}/{sequence.length}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl border bg-[#161a22] p-6"
            style={{ borderColor: `${activeToken.color}66` }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[2px]"
              style={{ color: activeToken.color }}
            >
              Unlocked: {unlocked.length} / {aboutTokens.length}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold text-white">
              {activeToken.label}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-300">
              {unlocked.includes(activeToken.id)
                ? activeToken.note
                : "Repeat random signal patterns to unlock clues. Once all clues are open, the game keeps generating new patterns."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {aboutTokens.map((token) => {
              const isUnlocked = unlocked.includes(token.id);

              return (
              <button
                  key={token.id}
                  onClick={() => {
                    if (!isUnlocked) return;
                    unlockAudio();
                    playPadSound(token.id);
                    setActiveTokenId(token.id);
                  }}
                  className={`rounded-xl border px-4 py-4 text-left transition-colors ${
                    isUnlocked
                      ? "bg-[#161a22] text-white hover:border-white/40"
                      : "bg-[#10151f] text-gray-500"
                  }`}
                  style={{ borderColor: isUnlocked ? `${token.color}66` : "#2a2f3a" }}
                  aria-label={`${isUnlocked ? "Unlocked note" : "Locked note"} ${token.label}`}
                  disabled={!isUnlocked}
                >
                  <span
                    className="mb-2 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold"
                    style={{ color: token.color, borderColor: `${token.color}80` }}
                  >
                    {token.symbol}
                  </span>
                  <span className="block text-sm font-semibold">{token.label}</span>
                </button>
              );
            })}
          </div>
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
          href="mailto:xiruiren742@gmail.com"
          className="inline-block bg-[#ff6b6b] text-[#0b0e14] font-semibold px-8 py-3 rounded-full hover:brightness-110 transition"
        >
          xiruiren742@gmail.com
        </a>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="https://github.com/XrRen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/xirui-ren-27292b249" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
