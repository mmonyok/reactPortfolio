import React from 'react';
import '../../../assets/styles/Projects.css';
import { Button } from "react-bootstrap";
// Possibly add later: Use to make carousel: https://dzone.com/articles/how-to-build-responsive-react-carousel

export default function Projects({ projects }) {
  return (
    <section className="container-fluid">
      <div className="row row-cols-2">
        {projects.map((project, a) => (
          <div key={a} className="portfolioCard col w-50 my-3" id="projectCards">
            <div className="m-auto text-center col p-0 font">
              <a href={project.application} target="_blank" rel="noreferrer">
                <img src={project.image} className=".img-fluid border border-dark border-5 rounded-3 h-75 w-75 projectImg" alt="Project Screenshot" />
                <h4 className="mt-1">{project.name}</h4>
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="fst-italic"><i className="fas fa-code-branch fa-lg"></i> GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};