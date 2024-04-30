import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <button className="text-white z-50" onClick={openSidebar}>
        <GiHamburgerMenu />
      </button>
      <div
        className={`${isOpen ? "fixed" : "hidden"} z-40 bg-zinc-900/60 pointer-events-none  top-0 left-0 w-full h-screen duration-200 ease-in-out`}
        style={{ pointerEvents: "auto" }}
        onClick={closeSidebar}
      ></div>
      <div
        className={`${isOpen ? "translate-x-0" : "translate-x-96"} bg-zinc-800 flex flex-col items-center justify-center w-3/4 h-screen z-50 absolute top-0 right-0 duration-200 ease-in-out`}
      >
        <button
          className="text-white z-50 absolute top-5 right-10"
          onClick={closeSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <ul className=" items-center justify-center font-montserrat flex flex-col gap-6  md:hidden">
          <li>
            <a
              href="#hero"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Page top
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-3xl"
              onClick={() => setIsOpen(false)}
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
