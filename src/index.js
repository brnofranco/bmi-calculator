import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';

import { Home } from './page/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);