var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var submittedLocation = this.refs.location.value;
    if (submittedLocation.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(submittedLocation);
    }
  },
  render: function () {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter City" />
          <button className="button hollow expanded ">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
