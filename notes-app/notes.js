const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "your notes...";
};

// add note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
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

// read note

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse.blue(note.title));
    console.log("- " + note.body);
  } else {
    console.log(chalk.inverse.red("Fubar, check your code"));
  }

  // This also worked

  /*  notes.forEach((test) => {
    if (test.title === title) {
      console.log(chalk.green.inverse(test.title));
      console.log(" - " + test.body);
    } else {
      console.log(chalk.red.inverse("ERROR - Normal katastrof"));
    }
  }); */
}; /////////////////////////////////////////////////////////////////

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
  readNote: readNote,
};
