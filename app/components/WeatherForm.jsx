const React = require('react');

const WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var newSearchData={};
        console.log('in Form-onFormSubmit, this.refs.location.value is:', this.refs.location.value);
        // do not act on click if no data have been typed in
        if (this.refs.location.value.length > 0) {
            newSearchData.location = this.refs.location.value;
        }
        // call onNewSearch with the newSearchData object argument
        this.props.onNewSearch(newSearchData);
        // clear form after input has been used
        this.refs.location.value = '';
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder="Enter location"/>
                    <input type="submit" className="button hollow expanded" value="Get Weather" />
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
