import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../../../public/assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../Constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Fragment } from "react";
import Image from "next/image";

type Props = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: any;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary  cursor-pointer p-5 rounded-lg sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="relative w-full h-[230px]">
          <Image
            className="w-full h-full object-cover rounded-2xl"
            alt="project Photo"
            src={image}
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              window.open(source_code_link, "_blank");
            }}
          >
            <Image
              src={github}
              alt="Github Logo"
              className="w1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((item) => {
            return (
              <p key={item.name} className={`text-[14px] ${item.color}`}>
                #{item.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((item, index) => {
          return (
            <ProjectCard index={index} key={`project ${index}`} {...item} />
          );
        })}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(Works);
