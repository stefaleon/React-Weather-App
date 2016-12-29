const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    console.log(this.refs.searchLocation.value);
    var encodedLocation = encodeURIComponent(this.refs.searchLocation.value);
    if (this.refs.searchLocation.value.length > 0) {
        console.log('fi',this.refs.searchLocation.value);
        window.location.hash = '#/?location=' + encodedLocation;
        this.refs.searchLocation.value = '';
    }
  },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref='searchLocation' placeholder="Search Weather"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
