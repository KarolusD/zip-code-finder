import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';

WebFont.load({
  google: {
    families: [
      'Montserrat:500:latin-ext',
      'Montserrat:700:latin-ext',
      'sans-serif'
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
