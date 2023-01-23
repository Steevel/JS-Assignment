// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base = prompt("Enter the base ");
const height = prompt("Enter the height");
const area = 0.5 * base * height;

document.getElementById("area").innerHTML = area;
