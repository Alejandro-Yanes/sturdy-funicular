"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export type SkillsProps = {};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-0"
      ref={ref}
      id="skills"
    >
      <SectionHeading title="Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-gray-100 transition-colors cursor-pointer dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
