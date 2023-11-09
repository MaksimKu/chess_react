import React, { useState, useEffect } from 'react';
import peshka_2_bel from '../../images/peshka_2_bel.png';
import peshka_2_chyorn from '../../images/peshka_2_chyorn.png';
import oficerWhite from '../../images/peshka_bel.png';
import oficerBlack from '../../images/peshka_chyorn.png';
import ladyaWhite from '../../images/ladya_bel.png';
import ladyaBlack from '../../images/ladya_chyorn.png';
import horseWhite from '../../images/kon_bel.png';
import horseBlack from '../../images/kon_chyorny.png';
import korolWhite from '../../images/korol_bel.png';
import korolBlack from '../../images/korol_chyorn.png';
import ferzWhite from '../../images/ferz_bel.png';
import ferzBlack from '../../images/ferz_chyorn.png';

let clientTafel = {
  height: document.documentElement.clientHeight,
  width: document.documentElement.clientWidth
};


function heightTafel () {
  clientTafel.height = document.documentElement.clientHeight;
  clientTafel.width = document.documentElement.clientWidth;
  if (clientTafel.height < clientTafel.width) {
    document.querySelector('.wrapTafel').style.width=`${clientTafel.height}px`;
    document.querySelector('.wrapTafel').style.height=`${clientTafel.height}px`;
    // console.log(clientTafel.height * 2)
    document.querySelectorAll('.chessImg').forEach(item => item.style.width=`${clientTafel.height * 0.09}px`)
    document.querySelectorAll('.chessImg').forEach(item => item.style.height=`${clientTafel.height * 0.09}px`)
  } else {
    document.querySelector('.wrapTafel').style.width=`${clientTafel.width}px`;
    document.querySelector('.wrapTafel').style.height=`${clientTafel.width}px`;
    // console.log(clientTafel.height * 2)
    document.querySelectorAll('.chessImg').forEach(item => item.style.width=`${clientTafel.width * 0.09}px`)
    document.querySelectorAll('.chessImg').forEach(item => item.style.height=`${clientTafel.width * 0.09}px`)
  }
}
window.addEventListener('resize', ()=>{
  heightTafel()
})
// heightTafel()

function CellTafel() {
  let arr = []
  for (let i = 1; i <= 64; i++) {
    let x = String(Math.ceil(i / 8));
    let y = String(i % 8);
    if (y==='0') {
      y = '8'
    }
    arr.push(
      <div className='Cell' 
    id={x + y}></div>
    )
  }
  return (<div className='tafel'>{arr}</div>)
}

function App() {
  let i =
   (
    <div className='wrapper'>
      <div className='wrapTafel'>
        <CellTafel/>
      </div>
      
      <div className='chess'>
        <div className='chessWhite'>
          <img className='chessImg' id='whitePawnA' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnB' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnC' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnD' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnE' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnF' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnG' src={peshka_2_bel}/>
          <img className='chessImg' id='whitePawnH' src={peshka_2_bel}/>
          <img className='chessImg' id='whiteRockA' src={ladyaWhite}/>
          <img className='chessImg' id='whiteRockH' src={ladyaWhite}/>
          <img className='chessImg' id='whiteHorseB' src={horseWhite}/>
          <img className='chessImg' id='whiteHorseG' src={horseWhite}/>
          <img className='chessImg' id='whiteOficerC' src={oficerWhite}/>
          <img className='chessImg' id='whiteOficerF' src={oficerWhite}/>
          <img className='chessImg' id='whiteKorol' src={korolWhite}/>
          <img className='chessImg' id='whiteFerz' src={ferzWhite}/>
        </div>
        <div className='chessBlack'>
          <img className='chessImg' id='BlackPawnA' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnB' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnC' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnD' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnE' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnF' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnG' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackPawnH' src={peshka_2_chyorn}/>
          <img className='chessImg' id='BlackRockA' src={ladyaBlack}/>
          <img className='chessImg' id='BlackRockH' src={ladyaBlack}/>
          <img className='chessImg' id='BlackHorseB' src={horseBlack}/>
          <img className='chessImg' id='BlackHorseG' src={horseBlack}/>
          <img className='chessImg' id='BlackOficerC' src={oficerBlack}/>
          <img className='chessImg' id='BlackOficerF' src={oficerBlack}/>
          <img className='chessImg' id='BlackKorol' src={korolBlack}/>
          <img className='chessImg' id='BlackFerz' src={ferzBlack}/>
        </div>
      </div>
    </div>
  );
  console.log(i)
  return i
}

export default App