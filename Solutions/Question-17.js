// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

console.log(year + '-' + month + '-' + day + ' ' + hour + ':' + minute);
console.log(day + '-' + month + '-' + year + ' ' + hour + ':' + minute);
console.log(day + '/' + month + '/' + year + ' ' + hour + ':' + minute);

// 2023-2-4 10:19
// 4-2-2023 10:19
// 4/2/2023 10:19