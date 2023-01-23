// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const r = prompt("Enter the radius");
const pi = 3.14;
const area = pi * r * r;

document.getElementById("area").innerHTML = area;
