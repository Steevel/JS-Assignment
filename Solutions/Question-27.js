const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
ages.sort()
const minAge = ages[0]
const maxAge = ages[ages.length - 1]
console.log("Minimum age: " + minAge + ", Maximum age: " + maxAge) // Minimum age: 19, Maximum age: 26

// - Find the median age(one middle item or two middle items divided by two)
const middleIndex = ages.length / 2;
let medianAge = 0
if (ages.length % 2 == 0) {
    medianAge = (ages[middleIndex] + ages[middleIndex - 1]) / 2;
} else {
    medianAge = ages[middleIndex] / 2;
}
console.log("Median age: " + medianAge) // 24

// - Find the average age(all items divided by number of items)
const sum = ages.reduce((sum, item) => sum + item);
const average = sum / ages.length;
console.log('Average age is: ' + average); // Average age is: 22.8

// - Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log('Range is: ' + range); // Range is: 7

// - Compare the value of (min - average) and (max - average), use abs() method
const first = Math.abs(minAge - average)
const second = Math.abs(maxAge - average)
console.log(first)
console.log(second)