import { ReactNode } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="h-screen snap-center w-full bg-[#181A1B] relative"
      id="home"
    >
      <div className="absolute bottom-40">
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
      </div>
      <div className="absolute text-white text-xl bottom-0 left-[50%] animate-bounce duration-[2s] flex flex-col">
        <IoIosArrowDown />
        <IoIosArrowDown />
      </div>
    </section>
  );
};
export default Hero;

const Icon = ({
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
