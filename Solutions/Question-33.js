
const height = 1.9
const weight = 64

let bmi = weight / (height ** 2)

if (bmi < 18.5) {
    console.log("Underweight")
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight")
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight")
} else {
    console.log("Obese")
}