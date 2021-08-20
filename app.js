const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';

request({url: url, json: true}, (error, response) => {
    const temprature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    console.log(`It is currently ${temprature} degree out, it feels ${feelsLike} degree out.`);
})
