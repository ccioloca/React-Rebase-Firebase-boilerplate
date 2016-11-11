import React from 'react';
import ReactDOM from 'react-dom';
import NewChat from './NewChat';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewChat />, div);
});
