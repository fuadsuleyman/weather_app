const getGeoCode = require('./utils/geocode');
const getForecast = require('./utils/forecast');
const chalk = require('./chalk');

// test data for getGeoCode function
const address = 'Baku';

getGeoCode(address, (error, data) => {
    if (error){
        console.log(chalk.error(error));
    } else {
        console.log(data)
        return data;
        // console.log(chalk.success(`${data.place_name} latut is ${data.latitude}, longtut is ${data.longitude}`));
    }
})

// test data for getForecast function
const geoCode = {
    latitude: 40.36666,
    longitude: 49.83518
}

getForecast(geoCode, (error, data) => {
    if(error){
        console.log(chalk.error(error));
    } else {
        console.log(data);
    }
})




