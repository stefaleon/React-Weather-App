var React = require('react');
var {Link}= require('react-router');

var Examples = () => {

    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few locations examples:</p>
        <ol>
          <li>
            <Link to='/?location=florence it'>Firenze, IT</Link>
          </li>
          <li>
            <Link to='/?location=havana'>Havana, CU</Link>
          </li>
          <li>
            <Link to='/?location=antarctica'>Antarctica</Link>
          </li>
          <li>
            <Link to='/?location=siberia'>Novosibirsk, RU</Link>
          </li>
        </ol>
      </div>
    );

};

module.exports = Examples;
