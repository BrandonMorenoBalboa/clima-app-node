// api.openweathermap.org/data/2.5/weather?lat=-34.18162&lon=-70.65223&appid=f87c0e2aa7b8830f790ffb0dc1b2be14&units=metric


const axios = require('axios');



const getClima = async( lat, lng ) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f87c0e2aa7b8830f790ffb0dc1b2be14&units=metric`;
    const resp = await axios.get( url );

    return resp.data.main.temp
    
}

module.exports = {
    getClima
}