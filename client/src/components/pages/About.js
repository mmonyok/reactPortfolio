import React from 'react';
import melody from '../../assets/images/melody.jpg';
import '../../assets/styles/About.css';

export default function About() {
  return (
    <section className="my-2">
      <h1 className="ms-4 font-heavy" id="aboutTitle">About Melody</h1>
      <div className="d-flex mt-2 mx-auto" id="bodySection">
        <div className="m-auto">
          <img src={melody} className="img-fluid m-auto" id="melodyImg" alt="Melody" />
        </div>
        <div className="text-center w-50 m-auto font" id="aboutText">
          <p>
            As a full-stack web developer, I enjoy working in both front and back-end coding projects but am especially passionate about JavaScript coding, MySQL, Mongo, or NoSQL Database structures, and back-end in general. I thrive on researching and writing particularly tricky pieces of code.
          </p>
          <hr />
          <p>
            I graduated October, 2nd 2021 from a high-intensity 6 month bootcamp hosted by the University of MN with a Full-Stack Web Development certification. Within this program I learned HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, MERN Stack, Node.js, Database Theory, MongoDB, MySQL, Command Line, Web Apps, Git, and more.
          </p>
          <hr />
          <p>
            I have 9+ years of experience in customer service, as well as 6 years of working in vendor management. I am an asset to any team due to my strong organizational skills, attention to detail, and work ethic. My completion of the bootcamp is a testament to my ability to learn quickly and successfully collaborate.
          </p>
          <hr />
          <p>
            An ideal workplace for me is one that has a dedicated development team that takes new developers and mentors them, fostering further education for advancement of coding proficiency.
          </p>
        </div>
      </div>
    </section >
  );
};