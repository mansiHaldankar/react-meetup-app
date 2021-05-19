import React from 'react';
import ReactDOM from 'react-dom';
import { BrowswerRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowswerRouter>
    <App />
  </BrowswerRouter>,
  document.getElementById('root')
);
