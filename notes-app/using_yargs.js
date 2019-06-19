// challenge #5 adding user input using process.argv
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


//customize yargs version
// yargs.version('1.1.0');

// create an add command
yargs.command({
  command:'add',
  describe: 'Add a new note',
  builder:{
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body: {
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    // console.log(chalk.green("Adding a new note!",argv))
    console.log(`Adding a new note!,title = ${argv.title}`);
      console.log(`body = ${argv.body}`);
      notes.addNote(argv.title,argv.body);
  }
});

// create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe:"title key to find note",
      demandOption:true,
      type:"string"
    }
  },
  handler: function (argv) {
    // let msg_str = `Removing the note! ${argv.title}`;
    console.log(chalk.yellow(`Removing the note! ${argv.title}`));

    notes.removeNote(argv.title);
  }
})

// create a list command
yargs.command({
  command: 'list',
  describe: 'prints a list of saved notes',
  handler: function () {
    console.log(chalk.grey("Preparing note list!"));
    notes.listNotes();
  }
});

// create a Read command
yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function (argv) {
    console.log(chalk.magenta("reading the note!"));
    notes.readNote(argv.title);
  }
});

const getNotes = require("./notes.js");

console.log(chalk.blue(process.argv));
// console.log(chalk.green(yargs.argv));
console.log(yargs.argv);// needed if not using yargs.parse()
yargs.parse();
