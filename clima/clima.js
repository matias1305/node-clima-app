const axios = require('axios');

const getClima = async(lat, lng) => {
   let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=501945466e7a763ce7583574bcef0234`);
   return resp.data.main.temp;
}

module.exports = {
   getClima
}
