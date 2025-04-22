

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));


let operation = prompt("Choose an operation: +, -, *, /");


let result;


if (operation == "+") {
  result = num1 + num2;

} else if (operation == "-") {

  result = num1 - num2;

} else if (operation == "*") {

  result = num1 * num2;

} else if (operation == "/") {

  if (num2 !== 0) {

    result = num1 / num2;

  } else {

    result = "Error: Division by zero!";

  }

} else {

  result = "Invalid operation!";

}


alert("Result: " + result);
