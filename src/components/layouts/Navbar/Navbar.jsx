import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <main>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
          >
            Expand at sm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                >
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                  id="dropdown03"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
