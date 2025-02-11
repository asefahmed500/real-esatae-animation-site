import React from "react";
import Marquee from "react-fast-marquee";

const projects = [
  { src: "projectcard1.jpg", alt: "Project 1" },
  { src: "projectcard2.png", alt: "Project 2" },
  { src: "projectcard3.png", alt: "Project 3" },
];

const ProjectRepSection = () => {
  return (
    <div className="mt-20">
      <Marquee gradient={true} speed={50} pauseOnHover={true}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-96 mx-4 rounded-xl overflow-hidden shadow-lg bg-base-100"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-56 object-cover rounded-xl"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ProjectRepSection;
