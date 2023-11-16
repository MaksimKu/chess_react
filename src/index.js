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
        item.style.opacity = '0.0';
        item.style.position='absolute';
        item.style.left='0vmin';
        item.style.top='2vmin'});
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
    // let j = 0;
    function k(chessItem){
      let item = document.getElementById(`${chessItem.name}`)
      item.style.opacity = '1';
      item.style.left=`${(chessItem.xy[1] * 10.7) - 10.7}vmin`;
      item.style.top=`${(chessItem.xy[0] * 10.7) - 8.7}vmin`;
      
    }
    // console.log(55)
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function () {
        k(arr[i]);
        }, 100 * i);
      // console.log(i)
    }
  }
  // chessTafel(chessArrWhite);
  // chessTafel(chessArrBlack)


  // window.addEventListener('keypress', (e) => {
  //   if(e.key==='j') {
  //     chessTafel(chessArrWhite)
  //     chessTafel(chessArrBlack)
  //   }})