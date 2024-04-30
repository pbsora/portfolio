import { ReactNode } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <section
      className="h-screen snap-center w-full bg-[#181A1B] relative flex items-center justify-center"
      id="hero"
    >
      <div className="font-montserrat flex flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl text-white font-bold text-center"
        >
          Hi, I'm Pedro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-zinc-200 text-center text-2xl"
        >
          A full-stack developer
        </motion.p>
        <div className="flex gap-6 justify-center items-center">
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: "easeInOut",
            }}
            href="#about"
            className="bg-transparent relative hover:cursor-pointer border-2 hover:ring-4 ring-red-800 border-red-500 hover:bg-red-500 duration-200 hover:border-transparent hover:outline-8  z-50 rounded-3xl py-3 px-6 text-white"
          >
            About me
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: "easeInOut",
            }}
            href="#portfolio"
            className="bg-sky-600 hover:cursor-pointer hover:bg-transparent border-2 border-sky-600 rounded-3xl duration-200 py-3 px-6 text-white"
          >
            Some of my work
          </motion.a>
        </div>
      </div>
      <div className="absolute bottom-16 md:bottom-40 -left-2">
        <Icon
          name="LinkedIn"
          bgColor="bg-sky-600"
          link="https://www.linkedin.com/in/pedro-bispo99"
        >
          <FaLinkedin />
        </Icon>
        <Icon
          name="GitHub"
          bgColor="bg-zinc-700"
          link="https://github.com/pbsora"
        >
          <FaGithubSquare />
        </Icon>
        <Icon
          name="Email"
          bgColor="bg-red-500"
          link="mailto:sora.thedev@gmail.com"
        >
          <MdEmail />
        </Icon>
        <Icon name="My resume" bgColor="bg-yellow-500" link="asd">
          <HiOutlineDocumentArrowDown />
        </Icon>
      </div>
      <div className="absolute text-white text-xl bottom-0 left-[50%] animate-bounce duration-[2s] flex flex-col">
        <IoIosArrowDown />
        <IoIosArrowDown />
      </div>
    </section>
  );
};
export default Hero;

export const Icon = ({
  name,
  bgColor,
  link,
  children,
}: {
  name: string;
  bgColor: string;
  link: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`${bgColor} cursor-pointer text-white p-4 text-3xl flex group items-center justify-center origin-left gap-6 -translate-x-[65%] hover:-translate-x-[0] duration-200 ease-in-out`}
    >
      <span className={`text-xl font-bold font-montserrat flex-1`}>{name}</span>
      {children}
    </a>
  );
};
