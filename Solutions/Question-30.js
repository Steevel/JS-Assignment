// 30. Write a script which generates a random hexadecimal number.

const hex = '0123456789ABCDEF';
let output = '';

for (let i = 0; i < 10; i++) {
    output += hex.charAt(Math.floor(Math.random() * 16))
}

console.log(output); // 657B207E2B