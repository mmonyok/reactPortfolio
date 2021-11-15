import React from 'react';
import NavBar from './NavBar';
import banner from '../assets/images/banner.png';
import '../assets/styles/Header.css';

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/portfolio",
  },
  {
    name: "Resume",
    href: "/resume",
  }
];

function Header({ children }) {
  return (
    <header className="contentContainer">
      <NavBar links={links}/>
      <div id="banner">
        <img src={banner} className="img-fluid w-100 h-100 bannerImage" alt="Gradient of darker grey to lighter" />
      </div>
      {children}
    </header>
  );
};

export default Header;