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
    <footer className="footer text-center container-fluid border p-2 font-heavy">
      <hr />
      <div>
        <ul className="d-inline-flex flex-row align-items-center mt-2" id="iconLinks">
          {links.map((link, i, b, l, z) => (
            <li key={i} className="border rounded-3 pe-2 mx-2 linkShadow linkContainer" id="linkContainer">
              <a key={b} className="socialLink" href={link.website} target="_blank" rel="noreferrer">
                <i key={l} className={`me-2 h-100 p-2 rounded-start fab ${link.icon} fa-2x`} id="linkIcon"></i></a>
              <a key={z} className="my-auto linkText" href={link.website} target="_blank" rel="noreferrer">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <h6 className="fw-bold">2021 Monyok Web Development</h6>
    </footer>
  )
};

export default Footer;