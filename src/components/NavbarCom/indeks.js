import React from 'react'
const NavbarCom = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ms-5" href="#">gym king</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collaps navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Pricing </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Download </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  )
}

export default NavbarCom