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

  // db.collection('users').findOne({name:'jen'}, (error, user) => {
    // db.collection('users').findOne({_id: new ObjectID("5ceee5186ff8955b08694ec1")}, (error, user) => {

    // using find like findOne fails - returns a cursor - has not callback
    // db.collection('users').find({age: 27}, (error,user) => {
  // db.collection('users').find({age: 27}).toArray((error,user) => {
  //   if(error){
  //     return console.log("Unable to fetch");
  //   }//if
  //
  //   console.log(user);
  // })// collection
  //
  // db.collection('users').find({age: 27}).count((error,count) => {
  //   if(error){
  //     return console.log("Unable to fetch");
  //   }//if
  //
  //   console.log(count);
  // })// collection
  // returns 4

  // find challenges
  // Use findOne to fetch the last task by its id (print doc to console)
  db.collection('tasks').findOne({_id: new ObjectID("5ceee07946038650d8661a5f")}, (error, task) => {
    if(error){
      console.log("Unable to retrieve tasks");
    }//if

    console.log(task)
  })
  // use find to fetch all tasks that are not completed (print docs to console)
  db.collection('tasks').find({completed:false}).toArray((error,tasks) => {
    if(error){
      console.log("Unable to retrieve tasks");
    }//if

    console.log(tasks)
  })


})// MongoClient.connect
// run this file with $ node mongodb.js
