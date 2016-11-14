import React from 'react';
import ReactDOM from 'react-dom';
import OAuthLogin from './OAuthLogin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OAuthLogin switchLoadingState={[Function]} />, div);
});
