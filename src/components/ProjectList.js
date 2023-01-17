import React from "react";
import ProjectItem from "./ProjectItem";
function ProjectList({ projects }) {
  
  const links = projects.map((project) => {
    <a href={`#${project.name}`} key={project.id}></a>
    return <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={project.id}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      {links}
    </div>
  );
}

export default ProjectList;
