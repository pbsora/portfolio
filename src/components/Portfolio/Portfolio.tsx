import { motion, useScroll, useSpring } from "framer-motion";
import { Fragment, ReactNode, useRef } from "react";
import {
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiTailwindcss,
} from "react-icons/si";
import { BsBoxArrowDownRight } from "react-icons/bs";
import { FaGithubSquare, FaNodeJs } from "react-icons/fa";
import PortfolioLink from "./PortfolioLink";
import SkillIcon from "../skills/SkillIcon";
import { FaReact } from "react-icons/fa6";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

import petopia from "/petopia.png";
import momiji from "/momiji.png";

type Project = {
  name: string;
  description: string;
  image: string;
  skills: ReactNode[];
  link: string;
  repo: string;
};

const Projects = [
  {
    name: "Petopia",
    description:
      "Because of my love of dogs, i decided to make my own petshop (even though it's fake), then this project came alive. Like real stores, you can create an account, bookmark products to see them later, search for products by name and a few search filters, and of course make a purchase, which will show under your profile.",
    image: petopia,
    skills: [
      <SkillIcon>
        <FaReact size={25} className="text-blue-500" />
      </SkillIcon>,
      <SkillIcon>
        <BiLogoTypescript size={25} className="text-blue-500" />
      </SkillIcon>,
      <SkillIcon>
        <SiDotnet size={25} className="text-zinc-300" />
      </SkillIcon>,
      <SkillIcon>
        <SiTailwindcss size={25} className="text-sky-500" />
      </SkillIcon>,
      <SkillIcon>
        <BiLogoPostgresql size={25} className="text-sky-500" />
      </SkillIcon>,
      <SkillIcon>
        <SiReactquery size={25} className="text-red-500" />
      </SkillIcon>,
    ],
    link: "https://petopia-shop.vercel.app/",
    repo: "https://github.com/pbsora/petshop",
  },
  {
    name: "Momiji",
    description:
      "This project was part of The Odin Project's curriculum. The task was to create a social media clone. I went with a Twitter-style version. For keeping things secure, I used express sessions and passport for authentication. And to make life easier, I added Google authentication too. MongoDB handled all the data storage",
    image: momiji,
    skills: [
      <SkillIcon>
        <FaReact size={25} className="text-blue-500" />
      </SkillIcon>,
      <SkillIcon>
        <FaNodeJs size={25} className="text-green-500" />
      </SkillIcon>,
      <SkillIcon>
        <SiExpress size={25} className="text-zinc-300" />
      </SkillIcon>,
      <SkillIcon>
        <SiTailwindcss size={25} className="text-sky-500" />
      </SkillIcon>,
      <SkillIcon>
        <SiMongodb size={25} className="text-green-500" />
      </SkillIcon>,
    ],
    link: "https://momiji-eight.vercel.app",
    repo: "https://github.com/pbsora/odinbook",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="bg-[#0B192E] relative " id="portfolio" ref={ref}>
      <div className="sticky left-0 top-0 pt-20 text-white ">
        <h1 className="text-center text-4xl mb-3 text-orange-600 font-montserrat font-bold">
          My work
        </h1>
        <motion.div
          style={{ scaleX }}
          className="h-2 lg:h-3 bg-white"
        ></motion.div>
      </div>
      {Projects.map((el, i) => (
        <Fragment key={i + 1 * 10}>
          <Single position={i} project={el} />
        </Fragment>
      ))}
    </section>
  );
};

const Single = ({
  position,
  project,
}: {
  position: number;
  project: Project;
}) => {
  return (
    <>
      <section
        className={` text-white h-screen w-full snap-center bg-[#0B192E] overflow-hidden mt-3`}
      >
        <div
          className={`${position + 1 === 2 ? "lg:flex-row-reverse" : "lg:flex-row "} flex items-center justify-center h-full max-w-[85%] lg:max-w-[75%] m-auto flex-col mt-10`}
        >
          <motion.div
            className="lg:flex-1 relative"
            initial={{ x: position + 1 === 2 ? "-100%" : "100%", opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.9,
                damping: 15,
              },
            }}
            exit={{ x: "-100%" }}
          >
            <img
              src={project.image}
              className="aspect-video object-cover lg:scale-110 rounded-xl shadow-2xl "
              alt={project.name}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-8 lg:flex-1 mt-4 lg:mt-0"
            initial={{ y: "100%", opacity: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.9,
                damping: 15,
              },
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`${position + 1 === 2 ? "lg:text-left lg:translate-x-20" : "lg:text-right lg:-translate-x-20"} text-3xl font-bold font-montserrat`}
            >
              {project.name}
            </motion.h2>
            <p
              className={`${position + 1 == 2 ? "lg:translate-x-20" : "lg:-translate-x-20"} text-zinc-300 font-montserrat rounded-lg py-4 px-3  bg-[#011F38] shadow-2xl`}
            >
              {project.description}
            </p>
            <div
              className={`${position + 1 === 2 ? "lg:self-start lg:translate-x-20" : "lg:self-end lg:-translate-x-20"} flex items-center`}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="block mr-6"
              >
                Made with:
              </motion.h2>
              <div className="flex gap-3">
                {project.skills?.map((skill, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.9 + 0.2 * i,

                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className={`${position + 1 === 2 ? "lg:self-start lg:translate-x-20" : "lg:self-end lg:-translate-x-20"} flex items-center justify-center gap-10`}
            >
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeInOut" }}
                className=" py-2 w-2/4"
                viewport={{ once: true }}
              >
                <PortfolioLink link={project.link}>
                  LIVE PREVIEW <BsBoxArrowDownRight className="-rotate-90" />
                </PortfolioLink>
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
                className=" py-2 w-2/4"
                viewport={{ once: true }}
              >
                <PortfolioLink link={project.repo}>
                  GITHUB <FaGithubSquare />
                </PortfolioLink>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
