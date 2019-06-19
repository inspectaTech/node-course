

// lesson 7 - using yargs
require("./using_yargs.js");



// // challenge #5 adding user input using process.argv
// const chalk = require('chalk');
//
// const getNotes = require("./notes.js");
//
// const command =  process.argv[2]
//
// switch (command) {
//   case "add":
//     console.log(chalk.green.bold("adding note!"));
//   break;
//   case "remove":
//     console.log(chalk.yellow.bold("removing note!"));
//   break;
//   default:
//
// }


// challenge #3 [install chalk](https://www.npmjs.com/package/chalk)
// const chalk = require('chalk');
//
// const getNotes = require("./notes.js");
//
// const notes = getNotes("some notes");
//
// // console.log(chalk.green("success!"));
// console.log(chalk.inverse.red("error!"));
//
// console.log(chalk.blue.bold(notes));
//
// console.log(chalk.yellow.bold(process.argv[2]));


// lesson 3 - loading npm modules
// const validator = require('validator');
// // import {validator} from 'validator';//ES6 syntax import doesn't work in node
//
// const getNotes = require("./notes.js");
//
// const notes = getNotes("some notes");
//
// console.log(notes);

// console.log(validator.isEmail('andrew@example.com'));//true
// console.log(validator.isEmail('example.com'));//false
// console.log(validator.isURL('https://sunzao.us'));


// challenge #2
// const getNotes = require("./notes.js");
//
// const notes = getNotes("some notes");
//
// console.log(notes);

// lesson 2b adding your own files
// const add = require('./utils.js');//fn
// const sum = add(4,-2);
//
// console.log(sum);


// lesson 2a adding your own files
// const name = require('./utils.js');
// const firstname = require('./utils.js');//fn
//
//
// console.log(firstname);


// lesson 1
  // const fs = require('fs');

  // fs.writeFileSync('notes.txt','My name is Andrew!');
  // fs.appendFileSync('notes.txt','\n here is my appended message!');
