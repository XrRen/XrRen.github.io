import { useState } from "react";
import RobotArm from "./RobotArm";
import {
  EMAIL,
  links,
  titleBlock,
  projects,
  photos,
  aboutIntro,
  aboutItems,
} from "../data/content";

const NAV = ["Work", "Photo", "About", "Contact"];

// Crop marks on the four corners of a framed sheet.
function Corners() {
  return (
    <>
      <i className="c tl" />
      <i className="c tr" />
      <i className="c bl" />
      <i className="c br" />
    </>
  );
}

// Section heading: sheet letter, title, note, then a dimension line.
function SectionHead({ letter, title, note }) {
  return (
    <>
      <div className="sh">
        <span className="m">{letter}</span>
        <h2>{title}</h2>
        <span className="m">{note}</span>
      </div>
      <div className="dim" />
    </>
  );
}

export function Header() {
  return (
    <header>
      <span className="m" style={{ color: "var(--ink)" }}>
        XR — Drawing set <span className="mark">rev.02</span>
      </span>
      <nav aria-label="Sections">
        {NAV.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <div className="frame hero">
      <Corners />
      <div className="txt">
        <span className="m">Sheet A-01 · Introduction</span>
        <h1>
          Sherry Ren
          <br />
          <span>designs systems you can feel.</span>
        </h1>
        <p>
          Computer science student. I build interactive worlds, take
          photographs, and teach small robots where to go.
        </p>
      </div>
      <RobotArm />
      <div className="tblock">
        {titleBlock.map((item) => (
          <div key={item.label}>
            <span className="m">{item.label}</span>
            {item.href ? (
              <a href={item.href} className={item.mark ? "mark tb-link" : "tb-link"}>
                {item.value}
              </a>
            ) : (
              <b className={item.mark ? "mark" : undefined}>{item.value}</b>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work">
      <SectionHead letter="B" title="Projects" note={`${projects.length} sheets`} />
      <div className="sheets">
        {projects.map((p) => {
          const className = `frame sheetc${p.wide ? " span" : ""}`;
          const body = (
            <>
              <div className="hd">
                <span className="m">
                  {p.id} · {p.kind}
                </span>
                <span className="m">{p.tag}</span>
              </div>
              <div className="bd">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="ft">
                <span className="m">{p.linkLabel}</span>
                {p.href ? <span className="go">{p.action} ↗</span> : <span className="m">—</span>}
              </div>
            </>
          );
          return p.href ? (
            <a key={p.id} className={className} href={p.href} target="_blank" rel="noopener noreferrer">
              {body}
            </a>
          ) : (
            <div key={p.id} className={className} tabIndex={0}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Photography() {
  return (
    <section id="photo">
      <SectionHead letter="C" title="Photography" note="Hover to restore colour" />
      <div className="ph">
        {photos.map((photo) => (
          <figure key={photo.title} className={photo.wide ? "wide" : undefined}>
            <div className="fr">
              <img src={photo.src} alt={photo.title} loading="lazy" />
            </div>
            <figcaption>
              <span className="m">{photo.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about">
      <SectionHead letter="D" title="About" note="Bill of materials" />
      <div className="frame about">
        <Corners />
        <div className="l">
          <p>{aboutIntro}</p>
        </div>
        <ol>
          {aboutItems.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              {item.text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer id="contact">
      <SectionHead letter="E" title="Contact" note="Drawn by Xirui Ren" />
      <div className="frame ct">
        <Corners />
        <a className="addr" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <div className="lk">
          <button type="button" onClick={copyEmail}>
            {copied ? "Copied" : "Copy email"}
          </button>
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
