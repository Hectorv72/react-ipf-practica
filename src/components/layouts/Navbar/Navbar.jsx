import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const { items } = props;

  const links = items.map((item) => (
    <nav className="nav-item">
      <Link className="nav-link" to={item.link}>
        {item.name}
      </Link>
    </nav>
  ));

  return (
    <main>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="First navbar example"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://getbootstrap.com/docs/5.0/examples/navbars/#"
          >
            Never expand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample01"
            aria-controls="navbarsExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample01">
            <ul className="navbar-nav me-auto mb-2">{links}</ul>
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
