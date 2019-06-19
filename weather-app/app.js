const request = require('request');
const argv = require('yargs').argv;// new simple way to use yargs
const getLocation = require('./utils/getLocation.js');
const forecast = require('./utils/forecast.js');
const chalk = require('chalk');


const place = (argv.location != undefined) ? encodeURIComponent(argv.location) : encodeURIComponent('washington dc');


    // console.log(`argv = ${process.argv[2]}`);
    // console.log(`yargs location ${argv.location}`);
    const location_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1IjoiaW5zcGVjdGF0ZWNoIiwiYSI6ImNqdXd2dWw1ZjBncWc0M3MwdnMycjRxMXYifQ.MYuiIUUZAXH9L0p4xp_21A`
    // console.log(`location url = ${location_url}`);


    getLocation(location_url,forecast);


// yargs.command({
//   command:location,
//   describe:"enter desired forecast location",
// })


// temperature:
//  precipProbability
