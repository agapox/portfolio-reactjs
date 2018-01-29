import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Reboot>
      <App />
    </Reboot>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();