import {
  Header,
  Hero,
  Projects,
  Photography,
  About,
  Contact,
} from "./components/Sections";

export default function App() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Photography />
        <About />
      </main>
      <Contact />
    </div>
  );
}
