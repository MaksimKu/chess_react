import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";


import App from './components/app/app.js';
import {clientTafel, heightTafel} from './components/app/eventList.js'


ReactDOM.render(<App/>, document.getElementById('root'));
heightTafel()
