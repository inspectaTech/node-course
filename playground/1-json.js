const fs = require('fs');
const yargs = require('yargs');

yargs.command({
  command:"update",
  describe:"update json data",
  builder:{
    name:{
      describe:"add user name",
      demandOption:true,
      type:"string"
    },
    planet:{
      describe:"add user name",
      type:"string"
    },
    age:{
      describe:"add user age",
      demandOption:true,
      type:"int"
    }
  },
  handler:function(argv) {
    let fileBuffer = fs.readFileSync('1-json.json');
    let data_str = fileBuffer.toString();
    let file_data;
    try{
      file_data = JSON.parse(data_str);
    }catch(error){
      file_data = {};
    }
    file_data.name = argv.name;
    file_data.planet = (argv.planet) ? argv.planet : (file_data.planet) ? file_data.planet : "earth";
    file_data.age = argv.age;
    data_str = JSON.stringify(file_data)
    console.log(`adding record ${data_str}`);
    fs.writeFileSync('1-json.json',data_str);
  }
});

yargs.parse();

const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();
console.log(data);


// dummy data
// {
//   "name":"Andrew",
//   "planet":"earth",
//   "age":27
// }
