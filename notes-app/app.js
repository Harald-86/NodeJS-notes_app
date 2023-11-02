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
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove comman

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Note removed.");
  },
});

// Read note

yargs.command({
  command: "read",
  describe: "Reading note",
  handler: function () {
    console.log("Note fetched, and is now readable");
  },
});

// List notes

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: function () {
    console.log("This is the list of all notes");
  },
});

yargs.parse();
/* console.log(yargs.argv); */
