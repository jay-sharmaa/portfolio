import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Fitlite.png"
          title="FitLite"
          description="A native Android app that creates personalized meal plans, recommends exercises, and detects workout poses using real-time pose estimation."
          link="https://github.com/jay-sharmaa/FitLite"
          className="w-full h-[400px]"
        />
        <ProjectCard
          src="/New Project.png"
          title="Study Help"
          description="A Flutter app that helps with studying creating flow diagrams from algorithms, and allowing users to design their own flowcharts."
          link="https://github.com/jay-sharmaa/studyhelp"
          className="w-full h-[400px]"
        />
        <ProjectCard
          src="/VirtualVogue.png"
          title="Virtual Vogue"
          description="Virtual Vogue is an AR app that lets users virtually try on clothes in real time for a personalized fashion experience."
          link="https://github.com/jay-sharmaa/virtualvogue"
          className="w-full h-[400px]"
        />
      </div>
    </div>
  );
};

export default Projects;
