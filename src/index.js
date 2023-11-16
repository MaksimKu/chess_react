import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";

import {chessArrWhite, chessArrBlack} from './components/app/chessObj.js';



import App from './components/app/app.js';
import {clientTafel, heightTafel} from './components/app/eventList.js'


let game = true;

ReactDOM.render(<App/>, document.getElementById('root'));
heightTafel()



window.addEventListener('keydown', (e) => {
  if(e.key==='k') {
    game = false
      let chess = document.querySelector('.chess');
      let chessImg = document.querySelectorAll('.chessImg');
      chessImg.forEach(item=>{
        item.style.position='absolute'
        item.style.left='0vmin';
        item.style.top='0vmin'});
      // document.getElementById('whitePawnA').style.left='5vw'
      chess.setAttribute('style', 
      `display:flex; height:auto; width:auto; justify-content:left;
       min-width:0; margin-top:6vmin; margin-left:-83vmin`);
      //  setTimeout(chessTafel(chessArrWhite),10000)
    // console.log(document.getElementById(`${chessArrWhite[0].name}`))
  }})
  window.addEventListener('keyup', (e) => {
    if(e.key==='k') {chessTafel(chessArrWhite)
      chessTafel(chessArrBlack)}})


  function chessTafel(arr) {
    for (let chessItem of arr) {
      console.log(chessItem)
      document.getElementById(`${chessItem.name}`).style.left=`${(chessItem.xy[1] * 10.7) - 10.7}vmin`;
      document.getElementById(`${chessItem.name}`).style.top=`${(chessItem.xy[0] * 10.7) - 8.7}vmin`;
      // document.getElementById(`${chessItem.name}`).style.position='absolute';
      console.log(chessItem.xy[1])
    }
  }
  // chessTafel(chessArrWhite);
  // chessTafel(chessArrBlack)


  window.addEventListener('keypress', (e) => {
    if(e.key==='j') {
      chessTafel(chessArrWhite)
      chessTafel(chessArrBlack)
    }})