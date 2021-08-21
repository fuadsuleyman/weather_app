const getGeoCode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const chalk = require('./chalk');

const address = process.argv[2];

if (!address){
    console.log(chalk.error('Please provide location!'))
} else {
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
    })
}

