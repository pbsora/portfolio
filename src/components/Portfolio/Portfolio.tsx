import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import CSS from "../skills/CSS";
import HTML from "../skills/HTML";
import React from "../skills/React";

import { BsBoxArrowDownRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import PortfolioLink from "./PortfolioLink";

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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim natus voluptatum minima facere sunt quaerat tempora, iure saepe maxime quos ullam eligendi modi, quibusdam ipsum perferendis nesciunt accusantium incidunt!",
    image:
      "https://images.pexels.com/photos/20801061/pexels-photo-20801061/free-photo-of-madeira-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [<CSS size={20} />, <HTML size={20} />, <React size={20} />],
    link: "https://petopia-shop.vercel.app/",
    repo: "https://github.com/pbsora/petshop",
  },
  {
    name: "Momiji",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim natus voluptatum minima facere sunt quaerat tempora, iure saepe maxime quos ullam eligendi modi, quibusdam ipsum perferendis nesciunt accusantium incidunt!",
    image:
      "https://images.pexels.com/photos/21369952/pexels-photo-21369952/free-photo-of-comida-alimento-refeicao-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [<CSS size={20} />, <HTML size={20} />, <React size={20} />],
    link: "https://momiji-eight.vercel.app",
    repo: "https://github.com/pbsora/odinbook",
  },
  {
    name: "Petopia",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim natus voluptatum minima facere sunt quaerat tempora, iure saepe maxime quos ullam eligendi modi, quibusdam ipsum perferendis nesciunt accusantium incidunt!",
    image:
      "https://images.pexels.com/photos/20801061/pexels-photo-20801061/free-photo-of-madeira-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [<CSS size={20} />, <HTML size={20} />, <React size={20} />],
    link: "https://petopia-shop.vercel.app/",
    repo: "https://github.com/pbsora/petshop",
  },
  {
    name: "Momiji",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim natus voluptatum minima facere sunt quaerat tempora, iure saepe maxime quos ullam eligendi modi, quibusdam ipsum perferendis nesciunt accusantium incidunt!",
    image:
      "https://images.pexels.com/photos/21369952/pexels-photo-21369952/free-photo-of-comida-alimento-refeicao-madeira.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    skills: [<CSS size={20} />, <HTML size={20} />, <React size={20} />],
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
        <motion.div style={{ scaleX }} className="h-3 bg-white"></motion.div>
      </div>
      {Projects.map((el, i) => (
        <Single key={el.name} position={i} project={el} />
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
              className={`${position + 1 === 2 ? "self-start lg:translate-x-20" : "self-end lg:-translate-x-20"} flex items-center`}
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
            <div
              className={`${position + 1 === 2 ? "self-start translate-x-20" : "self-end -translate-x-20"} flex  items-center justify-center gap-10`}
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
