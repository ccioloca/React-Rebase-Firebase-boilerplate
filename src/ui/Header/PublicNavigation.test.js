import React from 'react'
import ReactDOM from 'react-dom'
import PublicNavigation from './PublicNavigation'

const Text = {}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PublicNavigation />, div);
});
