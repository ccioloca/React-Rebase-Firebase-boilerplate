import React from 'react';
import ReactDOM from 'react-dom';
import EmailLogin from './EmailLogin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmailLogin />, div);
});
