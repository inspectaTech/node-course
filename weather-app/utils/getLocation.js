const request = require('request');
const chalk = require('chalk');

let url = "";
let place_name = "";
let lattitude = 37.8267;
let longitude = -122.4233;

const getLocation = (location_url, callout) => {
  // console.log('new geoLocation running!');

  request({url:location_url,json:true},(error, {body}) => {
    if(error){
      console.log(chalk.red('an error occured'))
    }else{

      // console.log(`response keys: ${Object.keys(response)}`);
      // console.log(`body keys: ${Object.keys(response.body)}`);
      // console.log(`features keys: ${Object.keys(response.body.features)}`);
      // console.log(response.body.features.center);
      let place_name = body.features[0].place_name;
      let lattitude = body.features[0].center[1];
      let longitude = body.features[0].center[0];

      url = `https://api.darksky.net/forecast/b3de7543e6d9a2ed65493b4b3d677988/${lattitude},${longitude}`;
      callout(url, place_name);
    }//else
  });
}


module.exports = getLocation;
