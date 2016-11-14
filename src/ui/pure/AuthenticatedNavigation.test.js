import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticatedNavigation from './AuthenticatedNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthenticatedNavigation />, div);
});
