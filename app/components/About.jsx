var React = require('react');

var About = () => {
    return(
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a weather application build on React for <br />
            <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">
            The Complete React Web App Developer Course </a> <br />
            by <a href="http://www.mead.io/" target="_blank">Andrew Mead.</a>
        </p>
        <p>
          It was developed mainly on:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - The
              JavaScript library used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - The API used to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
};

module.exports = About;
