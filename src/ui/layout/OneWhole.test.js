import React from 'react';
import ReactDOM from 'react-dom';
import OneWhole from './OneWhole';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OneWhole />, div);
});
