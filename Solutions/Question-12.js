const date = new Date();

console.log("What is the year today?", date.getFullYear()) // 2023
console.log("What is the month today as a number?", date.getMonth() + 1) // 2
console.log("What is the date today?", date.getDate()) // 4
console.log("What is the day today as a number?", date.getDay()) // 6
console.log("What is the hours now?", date.getHours()) // 8
console.log("What is the minutes now?", date.getMinutes()) // 28

const now = new Date();
const previousDate = new Date(1970, 1, 1)
const elapsedSeconds = Math.round((now - previousDate) / 1000);
console.log("Find out the numbers of seconds elapsed from January 1, 1970 to now.", elapsedSeconds) // 1672826403

