import React from 'react';
import resume from '../../assets/images/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1 className="my-2 ms-4 d-flex font-heavy">Resume</h1>
      <h2 className="text-center font-heavy">Technical Skills</h2>
      <div className="w-75 mx-auto">
        <table className="table table-bordered text-center font">
          <thead>
            <tr>
              <th scope="col" className="w-50">Languages</th>
              <th scope="col" className="w-50">Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML5, Handlebars, Semantic HTML, CSS, Bootstrap, Bulma, Material UI, Responsive Design, JavaScript, jQuery, Mark Down, APIs, JSON, SQL, NoSQL, GraphQL, IndexedDB, OOP, ORM Framework, MVC Framework, PWAs, React, and MERN Stack
              </td>
              <td>Microsoft Word, Excel, and Powerpoint; Google Documents and Sheets; Adobe Photoshop and Lightroom; GitBash, GitHub, and GitHub Pages; MySQL and MySQL Workbench; MongoDB, Compass, and Atlas; Command Line, Insomnia, Visual Studio Code, Node.js, Express Servers, Apollo Servers, and AWS/S3</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mb-3 font-heavy">
          <a href={resume} target="_blank" rel="noreferrer">
            <button className="btn btn-outline-dark btn-sm">Download Complete Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}