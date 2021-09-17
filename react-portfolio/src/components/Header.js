import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import banner from '../assets/images/banner.png';
import './styles/Header.css';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div id="banner">
          <img src={banner} className="bannerImage img-fluid w-100 h-100" alt="Gradient of darker grey to lighter" />
        </div>
        {renderPage()}
      </header>
    </div>
  );
}

export default Header;