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

function createChess() {
  return <img className='chessImg' id={'whiteFerz1'} src={ferzWhite}/>
}


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
          <img className='chessImg' id='whiteOfficerC' src={oficerWhite}/>
          <img className='chessImg' id='whiteOfficerF' src={oficerWhite}/>
          <img className='chessImg' id='whiteKing' src={korolWhite}/>
          <img className='chessImg' id='whiteFerz1' src={ferzWhite}/>
        </div>
        <div className='chessBlack'>
          <img className='chessImg' id='blackPawnA' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnB' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnC' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnD' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnE' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnF' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnG' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackPawnH' src={peshka_2_chyorn}/>
          <img className='chessImg' id='blackRockA' src={ladyaBlack}/>
          <img className='chessImg' id='blackRockH' src={ladyaBlack}/>
          <img className='chessImg' id='blackHorseB' src={horseBlack}/>
          <img className='chessImg' id='blackHorseG' src={horseBlack}/>
          <img className='chessImg' id='blackOfficerC' src={oficerBlack}/>
          <img className='chessImg' id='blackOfficerF' src={oficerBlack}/>
          <img className='chessImg' id='blackKing' src={korolBlack}/>
          <img className='chessImg' id='blackFerz1' src={ferzBlack}/>
        </div>
      </div>
    </div>
  );
  return i
}

export {App, createChess}