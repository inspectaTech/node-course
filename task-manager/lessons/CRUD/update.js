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

  // db.collection("users").updateOne(
  //   {
  //     _id: new ObjectID("5ceedae2be89e10c288286c0")
  //   },
  //   {
  //    $inc:{
  //      age: 1
  //   }
  //   /*{
  //    $set:{
  //      name:'Mike'
  //   }*/
  // }).then((result) => {
  //   console.log(result);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

    db.collection("tasks").updateMany(
      {
        completed: false
      },
      {
       $set:{
         completed: true
      }
      /*{
       $set:{
         name:'Mike'
      }*/
    }).then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  // [mongoDB update operators](https://docs.mongodb.com/manual/reference/operator/update/)


})// MongoClient.connect
// run this file with $ node mongodb.js
