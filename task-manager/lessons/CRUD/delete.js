// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//i can destructure mongoDB
const { MongoClient, ObjectID } = require('mongodb');


// full localhost ip doesn't cause problems like localhost
// const connectionURL = 'mongodb://localhost:27017';
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager";

MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error, client) => {
  if(error){
    return console.log("unable to connect to database!",error)
  }//if

   // console.log("connected correctly!");
  const db = client.db(databaseName);

  // db.collection("users").deleteMany({
  //   age:27
  // }).then((result) => {
  //   console.log(result);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  // challenge - use deleteOne to remove a task
  // grab the description of the task you want to remove
  db.collection("tasks").deleteOne({
    description:"restart the video"
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })


})// MongoClient.connect
// run this file with $ node mongodb.js
