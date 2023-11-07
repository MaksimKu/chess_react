import React, { useState, useEffect } from 'react';

let clientHeight = document.documentElement.clientHeight - 8;
window.addEventListener('resize', ()=>{
  clientHeight = document.documentElement.clientHeight - 8;
  document.querySelector('.tafel').style.width=`${clientHeight}px`;
  document.querySelector('.tafel').style.height=`${clientHeight}px`;
  console.log(clientHeight)
})

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
  return (
    <div className='tafel' style={{width: `${clientHeight}px`, height:`${clientHeight}px`}}>
      <CellTafel/>
    </div>
  );
}

export default App