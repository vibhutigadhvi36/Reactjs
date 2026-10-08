import React from "react";

function StudentForm() {

  return (
    <div className="student-form-card">

      <h2>
        <i className="bi bi-plus-square-fill"></i>
        Add / Edit Result
      </h2>

      <form>

        <input
          type="text"
          placeholder="Student Name"
        />

        <input
          type="text"
          placeholder="Roll No"
        />

        <select>
          <option value="">
            Select Course
          </option>

          <option value="BCA">BCA</option>
          <option value="B.Sc">B.Sc</option>
          <option value="B.Com">B.Com</option>
        </select>

        <input
          type="number"
          placeholder="Math Marks"
        />

        <input
          type="number"
          placeholder="Science Marks"
        />

        <input
          type="number"
          placeholder="English Marks"
        />

        <button type="submit">
          <i className="bi bi-save-fill"></i>
          Save Result
        </button>

      </form>

    </div>
  );
}

export default StudentForm;