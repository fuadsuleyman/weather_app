const chalk = require('./chalk');
const request = require('postman-request');
// https://weatherstack.com/documentation
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=f';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=s';
const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=';

const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12dsds.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12men.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Baku.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'

// request({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log(chalk.error('Unable to connect weather service!'));
//     } else if(response.body.error){
//         console.log(chalk.error(response.body.error.info)); 
//     } else {
//         const temprature = response.body.current.temperature;
//         const feelsLike = response.body.current.feelslike;
//         const weather_descriptions = response.body.current.weather_descriptions[0];
//         console.log(chalk.success(`${weather_descriptions} .It is currently ${temprature} degree out, it feels ${feelsLike} degree out.`));
//     }
// })


const getGeoCode = (address, callback) => {

    request({url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1`, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
            // console.log(chalk.error('Unable to connect weather service!'));
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
            // console.log(chalk.error('Unable to find location. Try another search!'));
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                place_name: response.body.features[0].place_name    
            })
            // console.log(chalk.success(`Los Angles latut is ${latitude}, longtut is ${longitude}`));
        }
        // callback(latitude, longitude);
    })
}

const address = '12fd';

getGeoCode(address, (error, data) => {
    if (error){
        console.log(chalk.error(error));
    } else {
        console.log(chalk.success(`${data.place_name} latut is ${data.latitude}, longtut is ${data.longitude}`));
    }
})

// request({url: location_url, json: true}, (error, response) => {
//     if (error) {
//         console.log(chalk.error('Unable to connect weather service!'));
//     } else if(response.body.features.length === 0) {
//         console.log(chalk.error('Unable to find location. Try another search!'));
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(chalk.success(`Los Angles latut is ${latitude}, longtut is ${longitude}`));
//     }
// })