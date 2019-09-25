import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "minireset.css";
import "./css/main.scss";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();
