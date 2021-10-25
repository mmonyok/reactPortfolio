import React, { useState } from 'react';
import NavBar from './NavBar';
import banner from '../assets/images/banner.png';
import '../assets/styles/Header.css';

function Header({ children }) {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="contentContainer">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="banner">
        <img src={banner} className="img-fluid w-100 h-100 bannerImage" alt="Gradient of darker grey to lighter" />
      </div>
      {children}
    </header>
  );
};

export default Header;