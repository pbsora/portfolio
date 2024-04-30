import { Fragment } from "react/jsx-runtime";
import SkillIcon from "./SkillIcon";
import { FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiAdobephotoshop } from "react-icons/si";

const size = window.innerWidth < 780 ? 30 : 45;

const other = [
  <SkillIcon>
    <FaGitAlt size={size} className="text-red-500" />
  </SkillIcon>,
  <SkillIcon>
    <FaGithubSquare size={size} />
  </SkillIcon>,
  <SkillIcon>
    <FcLinux size={size} />
  </SkillIcon>,
  <SkillIcon>
    <SiAdobephotoshop size={size} className="text-sky-400" />
  </SkillIcon>,
];

const Other = () => {
  return (
    <div className=" h-28 m-auto overflow-hidden  w-full lg:w-[960px] track">
      <h2 className="mb-8">Other technologies</h2>
      <div className="mask">
        <div
          className="flex flex-nowrap justify-around min-w-[200%] slide-reverse
               mask"
        >
          {other.map((logo, i) => (
            <Fragment key={i}>{logo}</Fragment>
          ))}
          {other.map((logo, i) => (
            <Fragment key={i * 10}>{logo}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Other;
