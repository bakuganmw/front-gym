import React from "react";
import "./NavbarElements.css";
import { Link } from 'react-router-dom';
const NavbarCom = () => {
  // window.addEventListener("scroll", function () {
  //   let bar = this.document.getElementById("wrapper");
  //   bar.classList.toggle("sticky", window.scrollY > 0);
  // });
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="wrapper">
        <a className="navbar-brand ms-5" id="brandName" href="/">
          Gym king
        </a>
        <div className="collaps navbar-collapse me-5">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Reservations
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Rooms</a>
          <a className="dropdown-item" href="/trainer-reservation">Trainer</a>
          <a className="dropdown-item" href="/session-reservation">Session</a>
        </div>
      </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Sessions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
          <a href='/login' className="btn btn-secondary btn-lg active me-5" role="button" aria-pressed="true">Log in</a>
      </nav>
  );
};

export default NavbarCom;
