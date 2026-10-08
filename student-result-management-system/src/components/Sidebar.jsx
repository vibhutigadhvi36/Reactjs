import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-brand">

        <div className="brand-icon">
          <i className="bi bi-mortarboard-fill"></i>
        </div>

        <div className="brand-text">
          <h2>SRMS</h2>
          <span>Student Result</span>
          <span>Management System</span>
        </div>

      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-house-fill"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/students"
          className="sidebar-link"
        >
          <i className="bi bi-people-fill"></i>
          <span>Students</span>
        </NavLink>

        <NavLink
          to="/results"
          className="sidebar-link"
        >
          <i className="bi bi-file-earmark-text-fill"></i>
          <span>Results</span>
        </NavLink>

        <NavLink
          to="/reports"
          className="sidebar-link"
        >
          <i className="bi bi-bar-chart-fill"></i>
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/settings"
          className="sidebar-link"
        >
          <i className="bi bi-gear-fill"></i>
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;