import { FaNodeJs } from "react-icons/fa";
import SkillIcon from "./SkillIcon";
import { SiDotnet, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { Fragment } from "react/jsx-runtime";

const size = window.innerWidth < 780 ? 30 : 45;

const back = [
  <SkillIcon>
    <FaNodeJs size={size} className="text-green-400" />
  </SkillIcon>,
  <SkillIcon>
    <SiExpress size={size} className="text-zinc-300" />
  </SkillIcon>,
  <SkillIcon>
    <DiMongodb size={size} className="text-green-400" />
  </SkillIcon>,
  <SkillIcon>
    <BiLogoPostgresql size={size} className="text-sky-400" />
  </SkillIcon>,
  <SkillIcon>
    <SiDotnet size={size} className="text-zinc-300" />
  </SkillIcon>,
  <SkillIcon>
    <TbBrandCSharp size={size} className="text-zinc-300" />
  </SkillIcon>,
];

const Backend = () => {
  return (
    <div className="h-28 m-auto overflow-hidden w-full lg:w-[960px] track">
      <h2 className="mb-8">Backend</h2>
      <div className="mask">
        <div
          className="flex flex-nowrap justify-around min-w-[200%] relative slide-track
             mask"
        >
          {back.map((logo, i) => (
            <Fragment key={i}>{logo}</Fragment>
          ))}
          {back.map((logo, i) => (
            <Fragment key={i * 10}>{logo}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Backend;
