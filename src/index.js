import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./css/tachyons.css";
import "minireset.css"
import "./css/main.css";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();
