import React from 'react';
import '../../../assets/styles/Projects.css';

export default function Projects({ projects }) {
  return (
    <section className="container-fluid">
      <div className="row row-cols-2">
        {projects.map((project) => (
          <div className="portfolioCard col w-50 my-4">
            <div className="m-auto text-center col p-0 font">
            <a href={project.application} target="_blank" rel="noreferrer">
              <img src={project.image} className=".img-fluid border border-dark border-5 rounded-3 h-75 w-75 projectImg" alt="Project Screenshot" />
              <h4 class="mt-1">{project.name}</h4>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="fst-italic"><i class="fas fa-code-branch fa-lg"></i> GitHub Repository</a>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
};