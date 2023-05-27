import React from "react";
import "./NavbarElements.css";
// import { Link } from "react-router-dom";
const NavbarCom = () => {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const authHeader = getCookie("authHeader");
  console.log(authHeader);
  function logout(){
    document.cookie ="authHeader=; expires=" + new Date("1990-03-25");
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="wrapper">
      <a className="navbar-brand ms-5" id="brandName" href="/">
        Gym king
      </a>
      <div className="collaps navbar-collapse me-5">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle bg-dark"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Reservations
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {/* <a className="dropdown-item" href="#">
                Rooms
              </a> */}
              <a className="dropdown-item" href="/trainer-reservation">
                Trainer
              </a>
              {/* <a className="dropdown-item" href="/session-reservation">
                Session
              </a> */}
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Sessions
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gyms">
              Gyms
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">
              Trainers
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        {authHeader !== "" ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-dark"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button className="dropdown-item" onClick={logout} href="/">
                  logout
                </button>
              </div>
            </li>
          </ul>
        ) : (
          <a
            href="/login"
            className="btn btn-secondary btn-lg active me-5"
            role="button"
            aria-pressed="true"
          >
            Log in
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavbarCom;
