import React from 'react';
import ReactDOM from 'react-dom';
import AppNavigation from './AppNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppNavigation />, div);
});
