// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//i can destructure mongoDB
const { MongoClient, ObjectID } = require('mongodb');

// ObjectID lets me create my own ids without the database
const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);

// console.log(id.getTimestamp());

// full localhost ip doesn't cause problems like localhost
// const connectionURL = 'mongodb://localhost:27017';
const connectionURL = 'mongodb://127.0.0.1:27017';// mongoDB url (& default port)
const databaseName = "task-manager";// database name

MongoClient.connect(connectionURL,{ useNewUrlParser: true}, (error, client) => {
   if(error){
     return console.log("unable to connect to database!",error)
   }//if

   // console.log("connected correctly!");
   const db = client.db(databaseName);

   //  /*_id used with ObjectID for real usecase it should probably be instantiated within connect callback*/

   // insert a single document
   // db.collection('users').insertOne({
   //   /*_id:id,*/
   //   name:'Vikram',
   //   age:26
   // },(error, result) => {
   //   if(error){
   //     console.log("Unable to insert user",error);
   //   }//if
   //
   //   console.log(result.ops);
   //   //ops returns [ { name: 'next', age: 27, _id: 5ceedc5f02730e40b0fd286e } ]
   // })

   // insert multiple documents
   // db.collection('users').insertMany([
   //   {
   //     name:'jen',
   //     age: 28
   //   },
   //   {
   //     name:'gunther',
   //     age: 27
   //   }
   // ], (error, result) => {
   //   if(error){
   //     console.log("Unable to insert users",error);
   //   }//if
   //
   //   console.log(result.ops);
   //
   // });

   // insertMany challenge
  // db.collection("tasks").insertMany([
  //   {
  //     description:"create insertMany",
  //     completed: true
  //   },
  //   {
  //     description:"insert 3 tasks",
  //     completed: true
  //   },
  //   {
  //     description:"restart the video",
  //     completed: false
  //   }
  //
  // ],(error, result) => {
  //        if(error){
  //          console.log("Unable to insert users",error);
  //        }//if
  //
  //        console.log(result.ops);
  // });


})// MongoClient.connect
// run this file with $ node mongodb.js
