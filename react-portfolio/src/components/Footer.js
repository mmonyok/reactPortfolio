import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="text-center container-fluid border p-2">
      <div>
        <ul className="d-inline-flex flex-row align-items-center mt-2">
          <li className="border rounded-3 pe-2 me-3 fw-bold">
            <a className="my-auto" href="https://github.com/mmonyok" target="_blank" rel="noreferrer">
              <i className="h-100 p-2 border-end rounded-start-3 fab fa-github fa-2x"></i> GitHub</a></li>

          <li className="border rounded-3 pe-2 me-3 fw-bold">
            <a href="https://www.linkedin.com/in/melodymonyok/" target="_blank" rel="noreferrer">
              <i className="h-100 p-2 border-end rounded-start-3 fab fa-linkedin fa-2x"></i> LinkedIn</a></li>

          <li className="border rounded-3 pe-2 me-3 fw-bold">
            <a href="https://stackexchange.com/users/21055419/melody" target="_blank" rel="noreferrer">
              <i className="h-100 p-2 border-end rounded-start-3 fab fa-stack-overflow fa-2x"></i> StackOverflow</a></li>

          <li className="border rounded-3 pe-2 fw-bold">
            <a href="https://angel.co/u/melody-monyok" target="_blank" rel="noreferrer">
              <i className="h-100 p-2 border-end  rounded-start-3 fab fa-angellist fa-2x"></i> AngelList</a></li>
        </ul>
      </div>
      <h6 className="fw-bold">2021 Monyok Web Development</h6>
    </footer>
  )
}

export default Footer;