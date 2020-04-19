console.log('Starting Notes.js : ');

const fs = require('fs');


var fetchNotes = () => {

    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
}

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


var addNote = (title,body) => {

    // console.log("Adding Note:", title,body );

    var notes = fetchNotes();
    
    var note = {
        title,
        body
    };

    //      This Funtionality is transfered to fetchNotes function above for the sake of reusability 
    //
    // try {
    //     var notesString = fs.readFileSync('notes-data.json');
    //     notes = JSON.parse(notesString);
    // } catch (error) {
    //   
    // }

    //********************************** To check if duplicate title note is added ***************************************** //
    var duplicateNotes = notes.filter((note) =>{                
            return note.title ===title;

    }); 
    //***************************************************************************************************** */

    if(duplicateNotes.length === 0){
        notes.push(note);
       // fs.writeFileSync('notes-data.json', JSON.stringify(notes));   ----> Again for reusability purpose transferring this line to saveNotes function above
       saveNotes(notes);

        return note;            // To app.js, just to print message to user 

    }

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