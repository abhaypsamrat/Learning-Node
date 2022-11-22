const yargs = require("yargs");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function () {
    console.log("Removing a note");
  },
});

// create listing command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all note");
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note");
  },
});

console.log(yargs.argv);
