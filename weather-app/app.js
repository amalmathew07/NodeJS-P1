var request = require('request');
const yargs = require('yargs');
const geoCode = require('./geocode/geocode.js');
const getWeather = require('./weather/weather.js')
var x = "";

const argv = yargs
    .options ({
        a: {
            demand:true,
            alias:'address',
            string:true
        }
    }).help().argv;
    var x ;
    var geoAddr = geoCode.geoCodeAddress(argv,(errorMsg,results) => {
        if (errorMsg) {
            Console.log("Error connecting to server");
        } else {
            var weatherCall = getWeather.getWeather(results.lattitude,results.longitude,(errorMsg,weatherResults) => {
                if (errorMsg) {
                    Console.log("Error connecting to server");
                } else {
                    console.log("Temperature is "+weatherResults.temperature);
                } 
            });
        }
    });

    
    //d681080fad8960d1f07323487eb23768

console.log("Done");