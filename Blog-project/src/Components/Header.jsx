import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">

      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold"
        >
          ✦ BlogSphere
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link"
              >
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/#about"
                className="nav-link"
              >
                About
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                to="/admin"
                className="btn btn-light admin-btn"
              >
                Admin Panel
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Header;