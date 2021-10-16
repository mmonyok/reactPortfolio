import React from 'react';
import '../assets/styles/Footer.css';

const links = [
  {
    name: 'GitHub',
    icon: 'fa-github',
    website: 'https://github.com/mmonyok'
  },
  {
    name: 'LinkedIn',
    icon: 'fa-linkedin',
    website: 'https://www.linkedin.com/in/melodymonyok/'
  },
  {
    name: 'Stackoverflow',
    icon: 'fa-stack-overflow',
    website: 'https://stackexchange.com/users/21055419/melody'
  },
  {
    name: 'AngelList',
    icon: 'fa-angellist',
    website: 'https://angel.co/u/melody-monyok'
  }
];

function Footer() {
  return (
    <footer className="footer text-center container-fluid border p-2 font-heavy mt-5">
      <div>
        <ul className="d-inline-flex flex-row align-items-center mt-2">
          {links.map((link) => (
            <li className="border rounded-3 pe-2 mx-2 linkShadow">
              <a className="my-auto" href={link.website} target="_blank" rel="noreferrer">
                <i className={`h-100 p-2 rounded-start fab ${link.icon} fa-2x`}></i> {link.name}</a></li>
          ))}
        </ul>
      </div>
      <h6 className="fw-bold">2021 Monyok Web Development</h6>
    </footer>
  )
};

export default Footer;