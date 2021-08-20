const request = require('postman-request');
// https://weatherstack.com/documentation
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=f';
// const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233&units=s';
const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';

request({url: url, json: true}, (error, response) => {
    const temprature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];
    console.log(`${weather_descriptions} .It is currently ${temprature} degree out, it feels ${feelsLike} degree out.`);
})
