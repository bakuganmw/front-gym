import React from "react";
import "./NavbarElements.css";
const NavbarCom = () => {
  // window.addEventListener("scroll", function () {
  //   let bar = this.document.getElementById("wrapper");
  //   bar.classList.toggle("sticky", window.scrollY > 0);
  // });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="wrapper">
        <a className="navbar-brand ms-5" id="brandName" href="/">
          Gym king
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collaps navbar-collapse me-5" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          reservations
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">rooms</a>
          <a class="dropdown-item" href="#">trainers</a>
          <a class="dropdown-item" href="#">training</a>
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
                Download
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href='#' class="btn btn-secondary btn-lg active me-5" role="button" aria-pressed="true">Log in</a>
        </div>
      </nav>
    </div>
  );
};

export default NavbarCom;
