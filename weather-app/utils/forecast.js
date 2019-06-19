const request = require('request');
const chalk = require('chalk');

const forecast = (url, place_name) => {
  request({url,json:true},(error, {body}) => {
    if (error) {
      console.log(chalk.red('an error occured'));
    }else if(body.error)
    {
      console.log(chalk.red('location could not be found'));
    }else{
      // console.log(response);
      // const data = JSON.parse(response.body);
      // console.log(data.currently);
      // console.log(response.body.currently);
      let temp_str = `It is currently ${body.currently.temperature} degrees out.`;
      let precip_str = `There is a ${body.currently.precipProbability}% chance of rain.`;

      console.log(place_name);
      console.log(body.daily.data[0].summary);
      console.log(temp_str);
      console.log(precip_str);
    }
  });
}

module.exports = forecast;
