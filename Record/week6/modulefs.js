const fs = require('fs');

// Write data to a file
fs.writeFileSync('hello.txt', 'Welcome to Node.js!');

// Read data from the file
const data = fs.readFileSync('hello.txt', 'utf8');

console.log(data);
