// Write a program which tells the number of days in a month.

const month = "November"

if (month === "February") {
    console.log(`${month} month has 28 days`)
} else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    console.log(`${month} month has 31 days`)
} else {
    console.log(`${month} month has 30 days`)
}