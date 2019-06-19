const fs = require('fs');
const chalk = require('chalk');

const getNotes = (msg = "") => `Your notes...${msg}`;

const addNote = ( title, body ) => {
  console.log("addNote running!");
  const notes = loadNotes();

  //unique titles
  // const duplicateNotes = notes.filter( note => note.title === title )
  const duplicateNote = notes.find( note => note.title === title )

  // if(duplicateNotes.length === 0){
  if(!duplicateNote){
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.green('new note added!'));
  }else {
    console.log(chalk.red('note title taken!'));
  }
  // console.log(`notes = ${notes}`);
}//addNote

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch(e){
    return [];
  }
}//loadNote

const removeNote = title => {
  console.log(chalk.green(`removing note ${title}`));
  const notes = loadNotes();
  // any data that returns as true is added to the new array
  const notesToKeep = notes.filter( note => note.title != title);

  if(notes.length > notesToKeep.length){
    console.log(chalk.green.inverse("note removed!"));
  }else {
    console.log(chalk.red.inverse("no note found!"));
  }

  saveNotes(notesToKeep);
}//removeNote

const listNotes = title => {
  const notes = loadNotes();

  if(notes.length > 0){

  console.log(chalk.yellow.inverse("Your notes:"));

  // any data that returns as true is added to the new array
  notes.forEach( note => {
    console.log(chalk.yellow(`${note.title}`));
  });


  }else {
    console.log(chalk.red.inverse("no notes found!"));
  }//else
}//listNotes

const readNote = title => {
  const notes = loadNotes();

  if(notes.length > 0){

  console.log(chalk.yellow.inverse.bold("Note Reader"));

  // any data that returns as true is added to the new array
  let note = notes.find( note => note.title === title);

  if(note){
    console.log(chalk.yellow(`title: ${note.title}`));
    console.log(`body: ${note.body}`);
  }
  else{
    console.log(chalk.red.inverse("no note found!"));
  }


  }else {
    console.log(chalk.red.inverse("no notes found!"));
  }//else
}//readNote

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};
