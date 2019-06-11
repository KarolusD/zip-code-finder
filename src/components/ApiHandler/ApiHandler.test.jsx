import React from 'react';
import ReactDOM from 'react-dom';
import ApiHandler from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApiHandler />, div);
  ReactDOM.unmountComponentAtNode(div);
});
