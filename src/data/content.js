// All portfolio copy lives here so the components stay purely visual.
import photo0325 from "../assets/photos/0325.jpg";
import photo0438 from "../assets/photos/0438.jpg";
import photo0466 from "../assets/photos/0466.jpg";
import photo0556 from "../assets/photos/0556.jpg";
import photo0601 from "../assets/photos/0601.jpg";
import photo0604 from "../assets/photos/0604.jpg";
import photo1860 from "../assets/photos/1860.jpg";
import photo1929 from "../assets/photos/1929.jpg";
import photo2652 from "../assets/photos/2652.jpg";

export const EMAIL = "xiruiren742@gmail.com";

export const links = [
  { label: "GitHub", href: "https://github.com/XrRen" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/xirui-ren-27292b249" },
];

export const titleBlock = [
  { label: "Discipline", value: "Games · Web · Robotics" },
  { label: "Tools", value: "Unity, React, ROS, Python" },
  { label: "Side practice", value: "Photography" },
  { label: "Contact", value: "Say hello ↓", mark: true, href: "#contact" },
];

// `wide` projects span the full row on desktop.
export const projects = [
  {
    id: "B-01",
    kind: "Game design",
    tag: "Unity / horror",
    title: "Kernel Error",
    desc: "A horror game where the screen does not want you there. Tension built from small moments: a flicker, a wrong-looking screen, a puzzle that watches back. 2D puzzle spaces meet 3D interactions, and the glitch effects carry the story.",
    href: "https://www.youtube.com/watch?v=aeM3NjrkVQ0&t=1s",
    linkLabel: "Playthrough video",
    action: "Open",
    wide: true,
  },
  {
    id: "B-02",
    kind: "Game jam",
    tag: "2-player co-op",
    title: "The Voyagers",
    desc: "A co-op puzzle adventure built around communication, timing and shared momentum, made at a game jam.",
    href: "https://avacai.itch.io/the-voyagers",
    linkLabel: "itch.io",
    action: "Play",
  },
  {
    id: "B-03",
    kind: "Web dev",
    tag: "Responsive",
    title: "Cyberspace Mall / Clinic",
    desc: "Layout treated like a little city: clear paths, useful signs, no dead ends, from desktop down to phone.",
    href: "https://bmg3.net/",
    linkLabel: "Live site",
    action: "Visit",
  },
  {
    id: "B-04",
    kind: "Hackathon",
    tag: "Pitt Challenge",
    title: "Health App",
    desc: "Quick status, simple feedback, no friction between the user and the information. Built against the clock.",
    href: "https://www.youtube.com/watch?v=fsVlWygf8c8",
    linkLabel: "Demo video",
    action: "Watch",
  },
  {
    id: "B-05",
    kind: "Robotics",
    tag: "ROS / sim",
    title: "Robotics with ROS",
    desc: "Nodes talk, sensor data becomes decisions, commands become motion. Path planning tested in a simulator first. Fig. 1 above is a nod to it.",
    linkLabel: "Internal project",
  },
];

// `wide` photos span two grid columns. Order is tuned so every row fills.
export const photos = [
  { src: photo0325, title: "Ocean and friends", wide: true },
  { src: photo0438, title: "Market corner" },
  { src: photo0466, title: "Edge of evening" },
  { src: photo0556, title: "Light and flowers", wide: true },
  { src: photo0601, title: "Summer night" },
  { src: photo1860, title: "Firework" },
  { src: photo1929, title: "Sleeping lotus" },
  { src: photo2652, title: "Mountain", wide: true },
  { src: photo0604, title: "Freedom" },
];

export const aboutIntro =
  "I'm a creator who likes building systems that people can feel. Games, cameras and robots all come down to logic, space and feedback.";

export const aboutItems = [
  { label: "Code", text: "Systems people can feel." },
  { label: "Games", text: "Logic, emotion, interaction and atmosphere." },
  { label: "Photo", text: "Composition, light, small details, rhythm." },
  { label: "Robot", text: "Code turned into movement and feedback." },
];
