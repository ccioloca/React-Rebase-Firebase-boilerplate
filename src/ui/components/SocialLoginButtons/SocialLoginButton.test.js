import React from 'react';
import ReactDOM from 'react-dom';
import SocialLoginButton from '../SocialLoginButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialLoginButton />, div);
});
