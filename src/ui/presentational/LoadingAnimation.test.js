import React from 'react';
import ReactDOM from 'react-dom';
import LoadingAnimation from './LoadingAnimation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingAnimation />, div);
});
