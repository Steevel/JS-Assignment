const x1 = prompt("Enter the value of x1");
const x2 = prompt("Enter the value of x2");
const y1 = prompt("Enter the value of x1");
const y2 = prompt("Enter the value of y2");

const slope = (y2 - y1) / (x2 - x1);

document.getElementById("slope").innerHTML = slope;
