// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// To find y intercept
const x = 0;
const y = 2 * x - 2;

console.log("Y intercept = " + y);

// To find x intercept
while (2 * x - 2 !== y) {
  x += 1;
}
console.log("X intercept = " + x);
