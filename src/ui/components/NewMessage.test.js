import React from 'react';
import ReactDOM from 'react-dom';
import NewMessage from './NewMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewMessage newMessage={Function} />, div);
});
