import React from "react";
import '../style.css';
import '../material-icons.css';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <div className="wrapper">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="/"><img src={logo} alt="Logo" className="brand-logo"/></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Register for course</a></li>
            <li><a href="/">Login</a></li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Register for course</a></li>
            <li><a href="/">Login</a></li>
          </ul>
          <a href="#!" data-target='nav-mobile' className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;