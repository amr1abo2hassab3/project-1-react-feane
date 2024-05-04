import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  return (
    <div className="Header_NavBar">
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link className="navbar-brand title_nav" to="/">
            Feane
          </Link>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">
                  menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bookTable">
                  book Table
                </NavLink>
              </li>
            </ul>

            <ul className="icons_nav">
              <li>
                <i className="fa-regular fa-user"></i>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li className="btn_navBar">
                <button className="btn_main">order online</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
