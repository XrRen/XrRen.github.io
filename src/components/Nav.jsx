export default function Nav() {
  const links = ["Work", "Photography", "About", "Contact"];

  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-6 relative z-20">
      <span className="font-extrabold tracking-wide text-sm md:text-base text-white">
        SHERRY / XIRUI &nbsp;&middot;&nbsp; LAB
      </span>
      <div className="hidden sm:flex gap-6 md:gap-10 text-xs md:text-sm font-medium tracking-wider text-gray-400">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {link.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}
