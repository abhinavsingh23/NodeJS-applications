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

// console.log('Process walle : ',process.argv);
// console.log('Yargs walle: ',argv);

var command = process.argv[2];
// console.log(command);


if(command==='add'){
    // console.log('Add New Note');
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Note Succesfully added");
        console.log(`Title : ${note.title}`);
        console.log(`Title : ${note.body}`);

    }else{
        console.log("Notes with same title already exist");
    }

}else if(command==='list'){
    notes.getAll();

}else if(command==='read'){
    notes.readNote(argv.title);

}else if(command==='remove'){
    notes.removeNote(argv.title);

}else{
    console.log('Command Not Recognized');
}