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
//// Just to be DRY///////
const titleOptions =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions =  {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
//////////////////////////
const argv = yargs
    .command('add', 'Add a New Note',{
        title: titleOptions,
        body : bodyOptions
    })
    .command('list', 'List All Notes')
    .command('read', 'Read a Note',{
        title: titleOptions
    })
    .command('remove', 'Delete a Note',{
        title: titleOptions
    })
    .help()
    .argv;

// console.log('Process walle : ',process.argv);
// console.log('Yargs walle: ',argv);
// console.log(command);
var command = argv._[0];


if(command==='add'){
    // console.log('Add New Note');
    var note = notes.addNote(argv.title,argv.body);

    if(note){
        notes.logNote(note);
    }else{
        console.log("Note with same title already exist");
    }
}else if(command==='list'){
    var allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} Note(s)`);

    allNotes.forEach((note) => notes.logNote(note));




}else if(command==='read'){

    var  note = notes.readNote(argv.title);

    if(note){
        notes.logNote(note);
    }else{
        console.log("Note Not Found");
    }

}else if(command==='remove'){
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Note not found';

    console.log(message);

}else{
    console.log('Command Not Recognized');
}