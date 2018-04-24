import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import Reboot from 'material-ui/Reboot';
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <CssBaseline>
      <App />
    </CssBaseline>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

// <Reboot>
// </Reboot>