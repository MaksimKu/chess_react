import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";

import {chessArrWhite, chessArrBlack} from './components/app/chessObj.js';



import {App} from './components/app/app.js';
import {clientTafel, heightTafel, gameSetting} from './components/app/eventList.js'


let game = true;

ReactDOM.render(<App/>, document.getElementById('root'));
heightTafel()
gameSetting.color = 'white';
gameSetting.colorStep = 'white';

// console.log(chessArrBlack[0])