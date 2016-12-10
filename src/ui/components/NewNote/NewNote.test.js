import React from 'react';
import ReactDOM from 'react-dom';
import NewNote from '../NewNote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewNote newNote={Function} />, div);
});
