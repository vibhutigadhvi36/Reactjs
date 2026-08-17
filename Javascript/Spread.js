// Spread Operator

const fruits = ["Apple", "Mango"];
const vegetables = ["Potato", "Tomato"];

const allItems = [...fruits, ...vegetables];

document.getElementById("arrayOutput").innerHTML =
  "Array 1: " + fruits.join(", ") +
  "<br>Array 2: " + vegetables.join(", ") +
  "<br><strong>Merged Array:</strong> " + allItems.join(", ");


// Spread Operator - Merge Two Objects

const student = {
  name: "Vibhuti",
  course: "Full Stack Development"
};

const location = {
  city: "Surat",
  country: "India"
};

const fullStudent = {
  ...student,
  ...location
};

document.getElementById("objectOutput").innerHTML =
  "Name: " + fullStudent.name +
  "<br>Course: " + fullStudent.course +
  "<br>City: " + fullStudent.city +
  "<br>Country: " + fullStudent.country;


// Spread Operator - Copy an Object

const copiedStudent = {
  ...student
};

document.getElementById("copyOutput").innerHTML =
  "Copied Object: " +
  copiedStudent.name +
  " - " +
  copiedStudent.course;