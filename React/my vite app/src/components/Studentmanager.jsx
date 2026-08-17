import { useEffect, useState } from "react";

function StudentManager() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);


  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = () => {
    if (studentName.trim() === "") {
      return;
    }

    setStudents([...students, studentName]);

    setStudentName("");
  };

  const deleteStudent = (indexToDelete) => {
    const updatedStudents = students.filter(
      (_, index) => index !== indexToDelete
    );

    setStudents(updatedStudents);
  };

  return (
    <section className="student-manager">

      <h2>Task 6: Student Information Manager</h2>

      <div className="student-input">

        <input
          type="text"
          placeholder="Enter student name"
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
        />

        <button onClick={addStudent}>
          Add Student
        </button>

      </div>

      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <ul className="student-list">

          {students.map((student, index) => (
            <li key={index}>

              <span>{student}</span>

              <button onClick={() => deleteStudent(index)}>
                Delete
              </button>

            </li>
          ))}

        </ul>
      )}

    </section>
  );
}

export default StudentManager;