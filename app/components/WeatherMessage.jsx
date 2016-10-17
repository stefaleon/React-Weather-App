var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {msgLocation, msgDesc, msgTemp, msgName, msgCountry } = this.props;
    return(
      <div>
        <h3> We have {msgDesc} in {msgName}, {msgCountry} </h3>
        <h3> The temperature is {msgTemp}. </h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
