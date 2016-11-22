import React from 'react';
import ReactDOM from 'react-dom';
import UserDropdownPure from './UserDropdownPure';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDropdownPure />, div);
});
