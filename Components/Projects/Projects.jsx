import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="city planner"
          main="A City Planner Web App is a digital platform designed to assist in urban planning, development, and management. This app enables users—such as city officials, architects, and developers—to visualize and analyze city infrastructure, zoning, and land use efficiently."
        />
        <ProjectCard
          title="aura matrix"
          main="Aura Level Counting is an AI-driven feature that analyzes a person’s energy, mood, or well-being using facial recognition, biometric sensors, and behavioral tracking"
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
