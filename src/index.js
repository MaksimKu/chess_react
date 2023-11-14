import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";

import chessArrWhite from './components/app/chessObj.js'; './components/app/chessObj.js'


import App from './components/app/app.js';
import {clientTafel, heightTafel} from './components/app/eventList.js'


ReactDOM.render(<App/>, document.getElementById('root'));
heightTafel()
window.addEventListener('keypress', (e) => {
    if(e.key==='k') {
      chessArrWhite[0].step()
    }})
