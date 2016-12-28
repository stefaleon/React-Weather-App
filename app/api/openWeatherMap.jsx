var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b937724d4d3febfcc804ce1e1965fc68&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( function (res) {
      //debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return {
          apiTemp: res.data.main.temp,
          apiDesc: res.data.weather[0].description,
          apiCountry: res.data.sys.country,
          apiName: res.data.name
        };
      }
    }, function (res) {
      throw new Error(res.data.message);
    } );
  }
};
