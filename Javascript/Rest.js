// Rest Operator

function addNumbers(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total = total + number;
  }

  return total;
}

const result = addNumbers(10, 20, 30, 40);

document.getElementById("restOutput").innerHTML =
  "Numbers: 10, 20, 30, 40" +
  "<br><strong>Total:</strong> " +
  result; 