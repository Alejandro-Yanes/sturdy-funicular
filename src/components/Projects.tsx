"use client";

import Project from "./Project";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export type ProjectsProps = {};

const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading title="My Projects" />
      {projectsData.map((project) => (
        <React.Fragment key={project.title}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
