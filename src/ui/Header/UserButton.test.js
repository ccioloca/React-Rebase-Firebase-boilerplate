import React from 'react';
import ReactDOM from 'react-dom';
import UserButton from './UserButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserButton onClick={Function} displayName={'string'} photoURL={'string'}/>, div);
});
