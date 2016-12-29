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
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temperature: undefined,
            desc: undefined,
            country: undefined,
            name: undefined,
            icon: undefined
        });
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
    componentDidMount: function () {
        var locationQuery = this.props.location.query;
        console.log('locationQuery is:',locationQuery);

        if (locationQuery.location && locationQuery.location.length > 0) {
            this.handleNewSearch(locationQuery);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        var locationQuery = newProps.location.query;
        console.log('locationQuery is:',locationQuery);

        if (locationQuery.location && locationQuery.location.length > 0) {
            this.handleNewSearch(locationQuery);
            window.location.hash = '#/';
        }

    },
    render: function () {
        var {location, temperature, desc, country, name, icon, isLoading} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather Data...</h3>
            } else if (temperature && location) {
                if (temperature === 'not available') {
                    return <div className="text-center">
                        <h3>There are no available weather data
                            for the location "{location}".</h3>
                    </div>
                } else {
                    return <WeatherMessage
                        msgLocation={location}
                        msgName={name}
                        msgCountry={country}
                        msgDesc={desc}
                        msgTemp={temperature}
                        msgIcon={icon} />
                }
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onNewSearch={this.handleNewSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
