import { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`flex z-10 justify-between px-10 md:px-32 py-4 fixed top-0 w-full  duration-500 ease-in-out ${isTop ? "bg-transparent" : "bg-red-500/80"}`}
    >
      <div className="text-2xl md:text-3xl text-zinc-700 font-semibold flex gap-3 font-montserrat">
        <span className="text-white">Pedro</span>
        <span
          className={`${isTop ? "text-red-400" : "text-white"} duration-75`}
        >
          Bispo
        </span>
      </div>
      <ul className="gap-20 items-center justify-center hidden md:flex">
        <li>
          <NavbarLink isTop={isTop} section="home">
            <IoIosHome />
            Home
          </NavbarLink>
        </li>
        <li>
          <NavbarLink isTop={isTop} section="about">
            About
          </NavbarLink>
        </li>
        <li>
          <NavbarLink isTop={isTop} section="portfolio">
            Portfolio
          </NavbarLink>
        </li>
        <li>
          <NavbarLink isTop={isTop} section="contact">
            Contact
          </NavbarLink>
        </li>
      </ul>
      <div className=" text-white md:hidden flex items-center text-2xl">
        {<GiHamburgerMenu />}
      </div>
    </nav>
  );
};
export default Navbar;
