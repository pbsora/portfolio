import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import "./index.css";
import "./lib/styles.css";

function App() {
  return (
    <div className="max-w-screen flex flex-col">
      <Navbar />
      <Hero />
      <section
        className="h-screen snap-center w-full snap-always bg-gradient-to-b from-[#181A1B] to-[#0B192E] from-40% to-80%"
        id="about"
      >
        About
      </section>
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
