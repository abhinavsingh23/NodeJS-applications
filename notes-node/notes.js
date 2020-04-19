console.log('Starting Notes.js : ');

const fs = require('fs');

var addNote = (title,body) => {

    // console.log("Adding Note:", title,body );

    var notes = [];
    
    var note = {
        title,
        body
    };

    notes.push(note);

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));






};


var getAll = () => {

    console.log("Getting All Notes");

};

var readNote = (title) => {

    console.log("Reading Notes named :",title);

};
var removeNote = (title) => {

    console.log("Removing Notes named :",title);

};





module.exports = {

    addNote,
    getAll,
    readNote,
    removeNote                                                // addNote: addNote is equivalent to addNote

 

}