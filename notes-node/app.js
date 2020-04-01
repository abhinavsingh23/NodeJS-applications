console.log('Starting App : ');

const fs = require('fs');
const os =require('os');

// fs.appendFile('greetings.txt','Hello World!');

// fs.appendFileSync('greetings.txt','Hello World!');

var user = os.userInfo();
console.log(user);

fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);


