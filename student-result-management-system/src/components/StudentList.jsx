import React from "react";

const students = [
  {
    id: 1,
    rollNo: "101",
    name: "Aarav Sharma",
    course: "BCA",
    math: 85,
    science: 78,
    english: 92,
    grade: "A",
    status: "Pass"
  },
  {
    id: 2,
    rollNo: "102",
    name: "Priya Singh",
    course: "B.Sc",
    math: 76,
    science: 69,
    english: 80,
    grade: "B",
    status: "Pass"
  },
  {
    id: 3,
    rollNo: "103",
    name: "Rohan Kumar",
    course: "B.Com",
    math: 45,
    science: 52,
    english: 48,
    grade: "D",
    status: "Pass"
  },
  {
    id: 4,
    rollNo: "104",
    name: "Sneha Patel",
    course: "BCA",
    math: 92,
    science: 88,
    english: 85,
    grade: "A",
    status: "Pass"
  },
  {
    id: 5,
    rollNo: "105",
    name: "Vikram Mehta",
    course: "B.Sc",
    math: 61,
    science: 57,
    english: 65,
    grade: "C",
    status: "Pass"
  },
  {
    id: 6,
    rollNo: "106",
    name: "Ananya Gupta",
    course: "B.Com",
    math: 38,
    science: 42,
    english: 40,
    grade: "D",
    status: "Pass"
  },
  {
    id: 7,
    rollNo: "107",
    name: "Karan Verma",
    course: "BCA",
    math: 79,
    science: 81,
    english: 76,
    grade: "B",
    status: "Pass"
  },
  {
    id: 8,
    rollNo: "108",
    name: "Meera Iyer",
    course: "B.Sc",
    math: 68,
    science: 72,
    english: 70,
    grade: "B",
    status: "Pass"
  }
];

function StudentList() {

  return (
    <div className="student-list-card">

      {/* Header */}
      <div className="student-list-header">

        <h2>Student Results</h2>

        <div className="student-controls">

          <div className="table-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search student..."
            />
          </div>

          <select className="filter-select">
            <option>All Courses</option>
            <option>BCA</option>
            <option>B.Sc</option>
            <option>B.Com</option>
          </select>

          <select className="filter-select sort-select">
            <option>Sort by Percentage</option>
            <option>Sort by Name</option>
            <option>Sort by Roll Number</option>
          </select>

          <button className="add-result-btn">
            <i className="bi bi-plus-lg"></i>
            Add Result
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="table-wrapper">

        <table className="student-table">

          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Math</th>
              <th>Science</th>
              <th>English</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => {

              const total =
                student.math +
                student.science +
                student.english;

              const percentage =
                ((total / 300) * 100).toFixed(1);

              return (
                <tr key={student.id}>

                  <td>{student.rollNo}</td>

                  <td className="student-name">
                    {student.name}
                  </td>

                  <td>{student.course}</td>

                  <td>{student.math}</td>

                  <td>{student.science}</td>

                  <td>{student.english}</td>

                  <td>{total}</td>

                  <td>{percentage}%</td>

                  <td>
                    <span
                      className={`grade-badge grade-${student.grade}`}
                    >
                      {student.grade}
                    </span>
                  </td>

                  <td>
                    <span className="status-badge">
                      {student.status}
                    </span>
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button className="edit-btn">
                        <i className="bi bi-pencil-fill"></i>
                      </button>

                      <button className="delete-btn">
                        <i className="bi bi-trash-fill"></i>
                      </button>

                    </div>

                  </td>

                </tr>
              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default StudentList;