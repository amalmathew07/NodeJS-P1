
var request = require('request');
var getWeather = (lattitude,longitude,callback) => {

    request({
        url:`https://api.darksky.net/forecast/d681080fad8960d1f07323487eb23768/${lattitude},${longitude}`,
        json:true
    }, (error,response,body) => {
      
        if (error) {
            callback("Error Detected"); 
        } else {
        //console.log(`Body: ${body}`);
        //console.log(response);
            //console.log(body.currently.temperature);  
            callback(undefined, {
                temperature: body.currently.temperature
            })
        }
                    // `Address: ${body.results[0].formatted_address}`
    })
    
}


module.exports = {
    getWeather
}