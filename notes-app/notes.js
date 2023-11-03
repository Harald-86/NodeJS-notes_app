const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return "your notes...";
};

// add note
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green("New note added"));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};

// Remove note

const removeNote = function (title) {
  const notes = loadNotes();
  console.log(notes);
  const checkNotesList = notes.filter(function (note) {
    return note.title !== title;
  });
  console.log("Current list: ", checkNotesList);
  saveNotes(checkNotesList);
};

/////////////////////////////////////////////////////////////////

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
