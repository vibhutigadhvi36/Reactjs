import React from "react";

function Navbar() {
  return (
    <header className="top-navbar">

      {/* Search */}
      <div className="navbar-search">

        <i className="bi bi-search"></i>

        <input
          type="text"
          placeholder="Search students, results..."
        />

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <button className="notification-btn">
          <i className="bi bi-bell"></i>
          <span className="notification-dot"></span>
        </button>

        <div className="admin-profile">

          <div className="admin-icon">
            <i className="bi bi-person-fill"></i>
          </div>

          <div className="admin-info">
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;