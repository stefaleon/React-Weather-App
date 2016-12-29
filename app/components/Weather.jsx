const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return ({
            isLoading: false
        });
    },
    handleNewSearch: function(data) {
        this.setState({isLoading: true});
        console.log('new location to search for:', data.location);
        var newLocation = data.location;
        openWeatherMap.getTemp(newLocation).then( function(obj) {
            this.setState({
                location: newLocation,
                temperature: obj.apiTemp,
                desc: obj.apiDesc,
                country: obj.apiCountry,
                name: obj.apiName,
                icon: obj.apiIcon,
                isLoading: false
              });
         }.bind(this), function(errorMessage) {
             this.setState({
                 location: newLocation,
                 temperature: 'not available',
                 desc: 'not available',
                 country: 'not available',
                 name: 'not available',
                 isLoading: false
               });
             console.log(errorMessage);
         }.bind(this));
    },
    render: function () {
        var {location, temperature, desc, country, name, icon, isLoading} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather Data...</h3>
            } else if (temperature && location) {
                return <WeatherMessage
                    msgLocation={location}
                    msgName={name}
                    msgCountry={country}
                    msgDesc={desc}
                    msgTemp={temperature}
                    msgIcon={icon} />
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onNewSearch={this.handleNewSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
