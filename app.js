const getGeoCode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const chalk = require('./chalk');

const address = process.argv[2];

if (!address){
    console.log(chalk.error('Please provide location!'))
} else {
    // = {} this part is default func parametr
    getGeoCode(address, (error, {latitude, longitude, place_name} = {}) => {
        if (error){
            return console.log(chalk.error(error));
        } 
        getForecast({latitude, longitude}, (error, {weather_descriptions, temperature, feelsLike}) => {
            if(error){
                return console.log(chalk.error(error));
            }
            console.log(chalk.success(place_name));
            console.log(chalk.success(`${weather_descriptions} .It is currently ${temperature} degree out, it feels ${feelsLike} degree out.`));
        })
    })
}

