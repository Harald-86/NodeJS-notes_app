const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Remove note

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Read note

yargs.command({
  command: "read",
  describe: "Reading note",
  handler() {
    console.log("Note fetched, and is now readable");
  },
});

// List notes

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

yargs.parse();
/* console.log(yargs.argv); */
