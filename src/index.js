import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Routes />,
  rootEl
);

//Enables Hot Reloading for all compoents
if (module.hot) {
  module.hot.accept('./routes.js', () => {
    const NextApp = require('./routes.js').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
