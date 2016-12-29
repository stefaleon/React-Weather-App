const React = require('react');

const WeatherMessage = ({msgLocation, msgDesc, msgTemp, msgName, msgCountry, msgIcon}) => {
    var imgSource = "http://openweathermap.org/img/w/" + msgIcon + ".png";
    var tempDisplayed = Math.round(msgTemp) + "°C";
    return(
        <div className="text-center">
            <h3> {msgName}, {msgCountry} </h3>
            <img src={imgSource} width="100"/>
            <h3> {msgDesc} </h3>
            <h3> {tempDisplayed} </h3>
        </div>
    );
};

module.exports = WeatherMessage;
