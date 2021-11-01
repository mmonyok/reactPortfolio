import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ links }) {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            to="/about"
            className="navbar-brand font-heavy">Melody Monyok</NavLink>
          {/* <h1>Mel<span className="odyYok">ody</span> Mon<span className="odyYok">yok</span></h1> */}

          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link, a, b) => (
                <li key={a} className="nav-item">
                  <NavLink
                    key={b}
                    to={link.href}
                    className='nav-link font'
                    activeClassName="nav-link active font-heavy"
                  >{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;