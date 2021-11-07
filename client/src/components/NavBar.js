import React from 'react';
import "../assets/styles/NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar({ links }) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <NavLink
          to="/about"
          className="navbar-brand font-heavy"><h4><span className="nameText">&lt;</span>Mel<span className="nameText">/</span>ody<span className="nameText">&gt;</span> Monyok</h4></NavLink>
        {/* <h1>Mel<span className="odyYok">ody</span> Mon<span className="odyYok">yok</span></h1> */}

        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, a, b) => (
              <li key={a} className="nav-item">
                <NavLink
                  key={b}
                  to={link.href}
                  className='nav-link font navItems'
                  activeClassName="nav-link active font-heavy navItems"
                >{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;