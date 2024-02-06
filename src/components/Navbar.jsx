import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <Link to="/Card" className="nav-link" href="#">
                  ALL
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link to="/fsd" className="nav-link" href="">
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link to="/datascience" className="nav-link" href="">
                  DATA SCIENCE
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link to="/cybersecurity" className="nav-link" href="">
                  CYBER SECURITY
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link to="/career" className="nav-link" href="">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
}

export default Navbar;
