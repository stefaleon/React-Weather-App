const React = require('react');

const WeatherMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h2>WeatherMessage Component</h2>
                Current temperature in {this.props.location} is {this.props.temperature}.
            </div>
        );
    }
});

module.exports = WeatherMessage;
