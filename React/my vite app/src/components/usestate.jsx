import { useState } from "react";

function UseState() {

  const [name, setName] = useState("Vibhuti");

  const [age, setAge] = useState(18);

  const [isStudent, setIsStudent] = useState(true);

  const [subjects, setSubjects] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const [student, setStudent] = useState({
    city: "Surat",
    course: "Full Stack Development"
  });

  const updateData = () => {
    setName("Vibhuti Gadhvi");
    setAge(18);
    setIsStudent(false);

    setSubjects([
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ]);

    setStudent({
      city: "Ahmedabad",
      course: "React Development"
    });
  };

  const resetData = () => {
    setName("Vibhuti");
    setAge(18);
    setIsStudent(true);

    setSubjects([
      "HTML",
      "CSS",
      "JavaScript"
    ]);

    setStudent({
      city: "Surat",
      course: "Full Stack Development"
    });
  };


  return (
    <section className="use-state">

      <h2>Task 5: State (useState)</h2>

      {/* String */}
      <div className="state-card">
        <h3>1. String</h3>
        <p>Name: {name}</p>
      </div>


      {/* Number */}
      <div className="state-card">
        <h3>2. Number</h3>
        <p>Age: {age}</p>
      </div>


      {/* Boolean */}
      <div className="state-card">
        <h3>3. Boolean</h3>
        <p>
          Student Status: {isStudent ? "Student" : "Not a Student"}
        </p>
      </div>


      {/* Array */}
      <div className="state-card">
        <h3>4. Array</h3>
        <p>Subjects:</p>

        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>


      {/* Object */}
      <div className="state-card">
        <h3>5. Object</h3>
        <p>City: {student.city}</p>
        <p>Course: {student.course}</p>
      </div>


      {/* Buttons */}
      <div className="state-buttons">

        <button onClick={updateData}>
          Add / Update Data
        </button>

        <button onClick={resetData}>
          Reset Data
        </button>

      </div>

    </section>
  );
}

export default UseState;