const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "your notes...";
};

// add note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  /*   const duplicateNotes = notes.filter((note) => {
    return note.title === title; */

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

const removeNote = (title) => {
  const notes = loadNotes();
  console.log(notes);
  const notesToKeep = notes.filter((note) => note.title !== title);
  console.log("Current list: ", notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red("No note found!"));
  }
};

// load list of notes

const listNotes = () => {
  console.log(chalk.inverse.blue("My notes!"));

  const notes = loadNotes();
  notes.forEach((noteTitle) => console.log(noteTitle.title));
};
/////////////////////////////////////////////////////////////////

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
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
  listNotes: listNotes,
};
