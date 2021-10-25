import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            href="about"
            onClick={() => handlePageChange('About')}
            className="navbar-brand font-heavy">Melody Monyok</a>
          {/* <h1>Mel<span className="odyYok">ody</span> Mon<span className="odyYok">yok</span></h1> */}

          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key="1" className="nav-item">
                <a
                  key="A"
                  href="about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active font-heavy' : 'nav-link font'}
                >About</a>
              </li>
              <li key="2" className="nav-item">
                <a
                  key="B"
                  href="portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  className={currentPage === 'Portfolio' ? 'nav-link active font-heavy' : 'nav-link font'}
                >Portfolio</a>
              </li>
              <li key="3" className="nav-item">
                <a
                  key="C"
                  href="contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active font-heavy' : 'nav-link font'}
                >Contact</a>
              </li>
              <li key="4" className="nav-item">
                <a
                  key="D"
                  href="resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active font-heavy' : 'nav-link font'}
                >Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;