var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

 var Weather = React.createClass({
   getInitialState: function() {
     return(
       { isLoading: false }
     );
   },
   handleSearch: function(receivedLocation) {
     var that = this;

     this.setState( { isLoading: true });

     openWeatherMap.getTemp(receivedLocation).then( function(obj) {
        that.setState(
          {
            location: receivedLocation,
            temp: obj.apiTemp,
            desc: obj.apiDesc,
            country: obj.apiCountry,
            name: obj.apiName,
            isLoading: false
          }
        );
     }, function(errorMessage) {

       that.setState({isLoading: false});
       console.log(errorMessage);
     }  );
   },
   render: function () {
     var { location, temp, desc, country, name, isLoading } = this.state;
     function renderMessage () {
       if (isLoading){
         return (
           <h3 className="text-center">Fetching weather...</h3>
           );
       } else if (temp && location) {
         return (
           <WeatherMessage msgLocation={location} msgName={name} msgCountry={country} msgDesc={desc} msgTemp={temp}/>
           );
       }
     }
     return(
       <div>
         <h1 className="text-center">Get Weather</h1>
         <WeatherForm onSearch={this.handleSearch} />
         {renderMessage()}
        </div>
     );
   }
 });

 module.exports = Weather;
