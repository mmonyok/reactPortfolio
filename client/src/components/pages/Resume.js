import React from 'react';
import "../../assets/styles/Resume.css";
import resume from '../../assets/images/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1 className="my-2 ms-4 d-flex font-heavy">Resume</h1>
      <div className="d-flex mx-auto text-center font flex-column align-items-center">
        <h2 className="text-center font-heavy" id="skillsTitle">Technical Skills</h2>
        <div className="d-flex w-75 text-center" id="skillsDiv">
          <div className="w-50 text-center me-3 skillsCard">
            <h3>Languages</h3>
            <p>HTML5, Handlebars, Semantic HTML, CSS, Bootstrap, Bulma, Material UI, Responsive Design, JavaScript, jQuery, Mark Down, APIs, JSON, SQL, NoSQL, GraphQL, IndexedDB, OOP, ORM Framework, MVC Framework, PWAs, React, and MERN Stack
            </p>
          </div>
          <div className="w-50 text-center ms-3 skillsCard">
            <h3>Applications</h3>
            <p>Microsoft Word, Excel, and Powerpoint; Google Documents and Sheets; Adobe Photoshop and Lightroom; GitBash, GitHub, and GitHub Pages; MySQL and MySQL Workbench; MongoDB, Compass, and Atlas; Command Line, Insomnia, Visual Studio Code, Node.js, Express Servers, Apollo Servers, and AWS/S3</p>
          </div>
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="mb-3 font-heavy btn btn-outline-dark btn-sm resumeBtn">Download Complete Resume</button>
        </a>
      </div>
    </div>
  );
}