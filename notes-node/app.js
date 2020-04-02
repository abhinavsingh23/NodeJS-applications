console.log('Starting App : ');

const fs = require('fs');
// const os =require('os');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');


// fs.appendFile('greetings.txt','Hello World!');

// fs.appendFileSync('greetings.txt','Hello World!');

// var user = os.userInfo();
// console.log(user);

// fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);


//////////////////////////////////////////////////////////////////////////////////////////////////

const argv = yargs.argv;

console.log('Process walle : ',process.argv);
console.log('Yargs walle: ',argv);

// var command = process.argv[2];
// console.log(command);






// if(command==='add'){
//     console.log('Add New Note');
// }else if(command==='list'){
//     console.log('Listing Notes');
// }else if(command==='read'){
//     console.log('Reading Note');
// }else if(command==='remove'){
//     console.log('Removing Notes');
// }else{
//     console.log('Command Not Recognized');
// }