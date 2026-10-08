import React from "react";

function StatCard({
  icon,
  title,
  value,
  change,
  type
}) {
  return (
    <div className={`stat-card ${type}`}>

      <div className="stat-icon">
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="stat-content">

        <span className="stat-title">
          {title}
        </span>

        <strong className="stat-value">
          {value}
        </strong>

        <span className="stat-change">
          <i className="bi bi-arrow-up"></i>
          {change}
        </span>

      </div>

    </div>
  );
}

export default StatCard;