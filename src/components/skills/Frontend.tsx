import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import SkillIcon from "./SkillIcon";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Fragment } from "react/jsx-runtime";

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

const Frontend = () => {
  return (
    <div className="h-28 m-auto overflow-x-hidden w-full lg:w-[960px] ">
      <h2 className="mb-8">Frontend</h2>
      <div className="mask">
        <div className="flex flex-nowrap justify-around min-w-[200%] slide-reverse">
          {front.map((logo, i) => (
            <Fragment key={i}>{logo}</Fragment>
          ))}
          {front.map((logo, i) => (
            <Fragment key={i * 10}>{logo}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Frontend;
