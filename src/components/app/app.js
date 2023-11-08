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

let clientHeight = document.documentElement.clientHeight - 8;
let clientWidth = document.documentElement.clientWidth;

function heightTafel () {
  clientHeight = document.documentElement.clientHeight - 8;
  clientWidth = document.documentElement.clientWidth;
  if (clientHeight < clientWidth) {
    document.querySelector('.tafel').style.width=`${clientHeight}px`;
    document.querySelector('.tafel').style.height=`${clientHeight}px`;
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
  return arr
}

function App() {
  let i =
   (
    <div className='tafel' style={{width: `${clientHeight}px`, height:`${clientHeight}px`}}>
      <CellTafel/>
      <div className='chess'>
        <div className='chessWhite'>
          <img className='chessWhiteImg' id='whitePawnA' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnB' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnC' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnD' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnE' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnF' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnG' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whitePawnH' src={peshka_2_bel}/>
          <img className='chessWhiteImg' id='whiteRockA' src={ladyaWhite}/>
          <img className='chessWhiteImg' id='whiteRockH' src={ladyaWhite}/>
          <img className='chessWhiteImg' id='whiteHorseB' src={horseWhite}/>
          <img className='chessWhiteImg' id='whiteHorseG' src={horseWhite}/>
          <img className='chessWhiteImg' id='whiteOficerC' src={oficerWhite}/>
          <img className='chessWhiteImg' id='whiteOficerF' src={oficerWhite}/>
          <img className='chessWhiteImg' id='whiteKorol' src={korolWhite}/>
          <img className='chessWhiteImg' id='whiteFerz' src={ferzWhite}/>
        </div>
        <div className='chessBlack'>
          <img className='chessBlackImg' id='BlackPawnA' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnB' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnC' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnD' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnE' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnF' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnG' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackPawnH' src={peshka_2_chyorn}/>
          <img className='chessBlackImg' id='BlackRockA' src={ladyaBlack}/>
          <img className='chessBlackImg' id='BlackRockH' src={ladyaBlack}/>
          <img className='chessBlackImg' id='BlackHorseB' src={horseBlack}/>
          <img className='chessBlackImg' id='BlackHorseG' src={horseBlack}/>
          <img className='chessBlackImg' id='BlackOficerC' src={oficerBlack}/>
          <img className='chessBlackImg' id='BlackOficerF' src={oficerBlack}/>
          <img className='chessBlackImg' id='BlackKorol' src={korolBlack}/>
          <img className='chessBlackImg' id='BlackFerz' src={ferzBlack}/>
        </div>
      </div>
    </div>
  );
  console.log(i)
  return i
}

export default App