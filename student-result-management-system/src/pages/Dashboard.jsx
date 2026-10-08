import React from "react";

import StatCard from "../components/StatCard";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* Welcome Banner */}
      <section className="dashboard-banner">

        <div className="banner-content">

          <h1>Student Result Management System</h1>

          <p>
            Manage student marks, grades, and performance easily.
          </p>

        </div>

        <div className="banner-illustration">
          <i className="bi bi-mortarboard-fill"></i>
          <i className="bi bi-book-fill"></i>
          <span>A+</span>
        </div>

      </section>

      {/* Statistics */}
      <section className="stats-grid">

        <StatCard
          icon="bi-people-fill"
          title="TOTAL STUDENTS"
          value="8"
          change="12% Registered"
          type="students"
        />

        <StatCard
          icon="bi-check-circle-fill"
          title="PASSED"
          value="8"
          change="100.0% pass rate"
          type="passed"
        />

        <StatCard
          icon="bi-x-circle-fill"
          title="FAILED"
          value="0"
          change="18.3% failed"
          type="failed"
        />

        <StatCard
          icon="bi-pie-chart-fill"
          title="AVERAGE PERCENTAGE"
          value="68.3%"
          change="5% Overall performance"
          type="average"
        />

      </section>

      {/* Student Section */}
      <section className="student-dashboard-grid">

        <StudentList />

        <StudentForm />

      </section>

    </div>
  );
}

export default Dashboard;