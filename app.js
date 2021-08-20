const request = require('postman-request');
// https://weatherstack.com/documentation
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=f';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=s';
const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';

const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'
// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Baku.json?access_token=pk.eyJ1IjoiZnVhZHN1bGV5bWFub3YiLCJhIjoiY2tzazZ0NWc2MTh5YTJvbWJ0dHowZmxnMCJ9.q98JwMqq658sbxPMplnd4g&limit=1'

request({url: url, json: true}, (error, response) => {
    const temprature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];
    console.log(`${weather_descriptions} .It is currently ${temprature} degree out, it feels ${feelsLike} degree out.`);
})


request({url: location_url, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(`Los Angles latut is ${latitude}, longtut is ${longitude}`);
})