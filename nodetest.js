module.exports.addFn = function() {
    console.log("Here----");
    return "Amal";
}

module.exports.sum = ( a, b) => {
    return a + b;
};
var readNote = () => {
    try {
        var readNote = fs.readFileSync('notes-json.json');
        return JSON.parse(readNote);
    } catch(Exception) {
        return [];
    }
}
var writeNode = (notes) => {
    fs.writeFileSync('notes-json.json',JSON.stringify(notes));
}
var fs = require('fs')
var addNote = (name,age) => {
    //console.log('Hi ',name,body);
    var notes = [];
    var note = {
        name,
        age
    }
    notes = readNote();
    var duplicateNotes = notes.filter((note) => note.name === name);

    if(duplicateNotes.length === 0){
        notes.push(note);
        writeNode(notes);
    }
   
};

var removeNote = (removename) => {
    var notes = [];
    console.log(removename);
    notes = readNote();
    debugger;
    var duplicateNotes = notes.filter((note) => note.name !== removename);
    console.log(duplicateNotes);
    if (duplicateNotes.length !== 0) {
        writeNode(duplicateNotes);
    }
}

var getAll = () => {
    var allNotes = readNote();
    return allNotes;
}


module.exports = {
    addNote,removeNote,getAll
};