const getGeoCode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const chalk = require('./chalk');

// test data for getGeoCode function
const address = 'Baku';

getGeoCode(address, (error, data) => {
    if (error){
        return console.log(chalk.error(error));
    } 
    getForecast(data, (error, forecastData) => {
        if(error){
            return console.log(chalk.error(error));
        }
        console.log(chalk.success(data.place_name));
        console.log(chalk.success(`${forecastData.weather_descriptions} .It is currently ${forecastData.temprature} degree out, it feels ${forecastData.feelsLike} degree out.`));
    })
    // console.log(data);
    // return data;
})

// test data for getForecast function
// const geoCode = {
//     latitude: 40.36666,
//     longitude: 49.83518
// }

// getForecast(geoCode, (error, data) => {
//     if(error){
//         console.log(chalk.error(error));
//     } else {
//         console.log(data);
//     }
// })




