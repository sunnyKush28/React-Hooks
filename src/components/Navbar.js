import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white px-md-5 shadow-lg mx-0">
      <div className="container-fluid mx-0 px-0">
        <Link className="navbar-brand text-white">Navbar</Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item ">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/count" className="nav-link text-white">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo" className="nav-link text-white">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-link text-white">
                WeatherApp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mutipleform" className="nav-link text-white">
                Multt-StepsForm
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/theme" className="nav-link text-white">
                ToggleTheme
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/searchFilter" className="nav-link text-white">
                SearchFilter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
