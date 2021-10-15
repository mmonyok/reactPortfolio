import React from 'react';
import melody from '../../assets/images/melody.jpg';
import '../../assets/styles/About.css';

export default function About() {
  return (
    <section className="my-2">
      <h1 className="ms-4 mb-4 font-heavy">About Melody</h1>
      <div className="d-flex">
        <div className="ms-5 my-auto">
          <img src={melody} className="img-fluid melodyImg m-auto" alt="Melody" />
        </div>
        <div className="text-center w-50 m-auto font">
          <p>
            As a full-stack web developer, she enjoys working in both front and back end coding projects but is especially passionate about JavaScript coding, as well as MySQL or Mongo Database structures. She thrives on researching and writing particularly tricky pieces of code.
            <hr />
            She graduated October, 2nd 2021 from a high-intensity 6 month bootcamp hosted by the University of MN with a Full-Stack Web Development certification. Within this program she learned HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, MERN Stack,
            Node.js, Database Theory, MongoDB, MySQL, Command Line, Web Apps, Git, and more.
            <hr />
            She has 9+ years of experience in customer service, as well as 6 years of working in vendor management. Melody is an asset to any team due to her strong organizational skills, attention to detail, and work ethic. Her completion of the bootcamp is a testament to her ability to learn quickly.
            <hr />
            An ideal workplace for Melody is one that has a dedicated development team that takes new developers and mentors them, fostering further education for advancement of coding proficiency.
          </p>
        </div>
      </div>
    </section>
  );
};