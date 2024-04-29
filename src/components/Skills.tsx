import SkillIcon from "./skills/SkillIcon";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobephotoshop,
  SiDotnet,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FcLinux } from "react-icons/fc";

const front = [
  <SkillIcon>
    <FaHtml5 size={45} className="text-red-500" />
  </SkillIcon>,
  <SkillIcon>
    <FaCss3Alt size={45} className="text-sky-500" />
  </SkillIcon>,
  <SkillIcon>
    <TbBrandNextjs size={45} className="text-black" />
  </SkillIcon>,
  <SkillIcon>
    <FaReact size={45} className="text-blue-500" />
  </SkillIcon>,
  <SkillIcon>
    <SiTailwindcss size={45} className="text-sky-400" />
  </SkillIcon>,
  <SkillIcon>
    <RiJavascriptFill size={45} className="text-yellow-400" />
  </SkillIcon>,
  <SkillIcon>
    <BiLogoTypescript size={45} className="text-sky-400" />
  </SkillIcon>,
];

const back = [
  <SkillIcon>
    <FaNodeJs size={45} className="text-green-400" />
  </SkillIcon>,
  <SkillIcon>
    <SiExpress size={45} className="text-zinc-300" />
  </SkillIcon>,
  <SkillIcon>
    <DiMongodb size={45} className="text-green-400" />
  </SkillIcon>,
  <SkillIcon>
    <BiLogoPostgresql size={45} className="text-sky-400" />
  </SkillIcon>,
  <SkillIcon>
    <SiDotnet size={45} className="text-zinc-300" />
  </SkillIcon>,
];

const other = [
  <SkillIcon>
    <FaGitAlt size={45} className="text-red-500" />
  </SkillIcon>,
  <SkillIcon>
    <FaGithubSquare size={45} />
  </SkillIcon>,
  <SkillIcon>
    <FcLinux size={45} />
  </SkillIcon>,
  <SkillIcon>
    <SiAdobephotoshop size={45} className="text-sky-400" />
  </SkillIcon>,
];

const Skills = () => {
  return (
    <section
      className="h-screen snap-center w-full snap-always bg-[#0B192E] text-white flex items-center"
      id="skills"
    >
      <div className="w-full container lg:w-[65%] h-3/4 lg:h-[65%] m-auto items-center justify-center font-montserrat ">
        <div className="flex items-center mb-10 gap-5">
          <h1 className=" text-white font-semibold text-3xl">
            What i'm skilled at{" "}
          </h1>
          <hr className="border border-zinc-800 w-2/4" />
        </div>
        <div className=" flex flex-col gap-10">
          <div className=" h-28 m-auto overflow-x-hidden w-[960px] ">
            <h2 className="mb-8">Frontend</h2>
            <div className="mask">
              <div className="flex flex-nowrap justify-around min-w-[200%] slide-reverse hover:paused ">
                {front.map((logo) => logo)}
                {front.map((logo) => logo)}
              </div>
            </div>
          </div>
          <div className=" h-28 m-auto overflow-hidden  w-[960px] track">
            <h2 className="mb-8">Backend</h2>
            <div className="mask">
              <div
                className="flex flex-nowrap justify-around min-w-[200%] relative slide-track
              hover:paused mask"
              >
                {back.map((logo) => logo)}
                {back.map((logo) => logo)}
              </div>
            </div>
          </div>
          <div className=" h-28 m-auto overflow-hidden  w-[960px] track">
            <h2 className="mb-8">Other technologies</h2>
            <div className="mask">
              <div
                className="flex flex-nowrap justify-around min-w-[200%] slide-reverse
              hover:paused mask"
              >
                {other.map((logo) => logo)}
                {other.map((logo) => logo)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
