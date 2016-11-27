import React from 'react';
import ReactDOM from 'react-dom';
import SelectLanguage from '../SelectLanguage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectLanguage />, div);
});
