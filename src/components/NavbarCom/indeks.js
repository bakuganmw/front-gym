import React, { useState } from "react";
import "./NavbarElements.css";
import axios from "axios";
import getCookie from "../../Utilities/functions";
const NavbarCom = () => {

  function getRole() {
    axios
      .get("http://localhost:8080/users/current", {
        headers: {
          Authorization: authHeader,
        },
      })
      .then((response) => {
        setRole(response.data.role);
        console.log(response.data.role);
      })
      .catch((err) => console.log(err));
    return role;
  }
  const [role, setRole] = useState('')
  const authHeader = getCookie("authHeader");
  function logout() {
    document.cookie = "authHeader=; expires=" + new Date("1990-03-25");
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="wrapper">
      <a className="navbar-brand mx-5 pe-5" id="brandName" href="/">
        Gym king
      </a>
      <div className="collaps navbar-collapse navchoice">
        <ul className="navbar-nav mx-1">
          <li className="nav-item dropdown">
            {authHeader !== "" ? (<div><button
              className="nav-link dropdown-toggle navOption bg-dark"
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
              </div></div>) : (<div></div>)}

          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/sessions">
              Sessions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/gyms">
              Gyms
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/trainers">
              Trainers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navOption" href="/multi">
              Multi cards
            </a>
          </li>
        </ul>
      </div>
      <div>
        {authHeader !== "" ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-dark me-5"
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
                <a className="dropdown-item" href="/my-profile">
                  My profile
                </a>
                {getRole() === 'TRAINER' && (
                  <>
                  <a className="dropdown-item" href="/time-schedule">
                    My schedule
                  </a>
                  <a className="dropdown-item" href="/gym-change">
                    Change gym
                  </a>
                  </>
                )}
                {getRole() === 'ADMIN' && (
                  <>
                    <a className="dropdown-item" href="/administration">
                      Administration
                    </a>
                    <a className="dropdown-item" href="/forms">
                      Forms
                    </a>
                    <a className="dropdown-item" href="/create-gym">
                      Create gym
                    </a>
                  </>
                )}
                <a className="dropdown-item" onClick={logout} href="/">
                  Log out
                </a>
              </div>
            </li>
          </ul>
        ) : (
          <a
            href="/login"
            className="btn button btn-lg  me-5"
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
