import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import "./lib/styles.css";

function App() {
  return (
    <div className="max-w-screen flex items-center justify-center flex-col">
      <Navbar />
      <Hero />
      <section
        className="h-screen snap-center w-full bg-green-300 snap-always"
        id="about"
      >
        About
      </section>
      <section
        className="h-screen snap-center w-full bg-blue-300 snap-always"
        id="portfolio"
      >
        Porfolio
      </section>
      <section
        className="h-screen snap-center w-full bg-yellow-300 snap-always"
        id="contact"
      >
        Contact
      </section>
    </div>
  );
}

export default App;
