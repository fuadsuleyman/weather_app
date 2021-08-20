const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=f6d03af80fa5dae802d2c03c9582ec83&query=37.8267,-122.4233';

request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.current);
    console.log(response.body.current);
})
