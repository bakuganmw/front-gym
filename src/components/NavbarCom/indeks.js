import React from "react";
import "./NavbarElements.css";
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
          <a className="dropdown-item" href="#">rooms</a>
          <a className="dropdown-item" href="#">trainer</a>
          <a className="dropdown-item" href="#">session</a>
        </div>
      </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                sessions
              </a>
            </li>
          </ul>
        </div>
          <a href='#' className="btn btn-secondary btn-lg active me-5" role="button" aria-pressed="true">Log in</a>
      </nav>
  );
};

export default NavbarCom;
