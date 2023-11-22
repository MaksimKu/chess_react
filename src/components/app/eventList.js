import {chessArrWhite, chessArrBlack, arraysAreEqual} from './chessObj.js';

let clientTafel = {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    heightWrap: '',
    widthWrap: '',
    sizeImgChess: ''
  };
  let game = true;
  let activeStep = true;
  let activeStepArr = [];
  let activeChess = ''
  let gameSetting = {
    colorChess: 'white'
  }

  
  function heightTafel () {
    clientTafel.height = document.documentElement.clientHeight;
    clientTafel.width = document.documentElement.clientWidth;
    
    if (clientTafel.height < clientTafel.width) {
      document.querySelector('body').setAttribute('style', `margin-top: 0px`)
        clientTafel.heightWrap = `${clientTafel.height}px`;
        clientTafel.widthWrap = `${clientTafel.height}px`;
        clientTafel.sizeImgChess = `${0.09 * clientTafel.height}px`;
        document.querySelector('.wrapTafel').style.width=clientTafel.heightWrap;
        document.querySelector('.wrapTafel').style.height=clientTafel.widthWrap;;
        document.querySelectorAll('.chessImg').forEach(item => item.style.width=clientTafel.sizeImgChess)
        document.querySelectorAll('.chessImg').forEach(item => item.style.height=clientTafel.sizeImgChess)
        if (game){document.querySelector('.chess').style.height = `${clientTafel.height}px`;
        document.querySelector('.chess').style.width = `${clientTafel.height * 1.6}px`;}
    } else {
        document.querySelector('body').setAttribute('style', `margin-top: ${(clientTafel.height - clientTafel.width)/2}px`)
        clientTafel.heightWrap = `${clientTafel.width}px`;
        clientTafel.widthWrap = `${clientTafel.width}px`;
        clientTafel.sizeImgChess = `${0.09 * clientTafel.width}px`;
        document.querySelector('.wrapTafel').style.width=clientTafel.heightWrap;
        document.querySelector('.wrapTafel').style.height=clientTafel.widthWrap;;
        document.querySelectorAll('.chessImg').forEach(item => item.style.width=clientTafel.sizeImgChess)
        document.querySelectorAll('.chessImg').forEach(item => item.style.height=clientTafel.sizeImgChess)
    }
    if (1.6 * clientTafel.height > clientTafel.width) {
        if(game)
        document.querySelector('.chess').style.display='none'
    } else {
        if(game)
        document.querySelector('.chess').style.display='flex'
    }
  }
  window.addEventListener('resize', ()=>{
    heightTafel()
  })

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
      console.log(gameSetting.colorChess)
  }})
  window.addEventListener('keyup', (e) => {
    if(e.key==='k') {chessTafel(chessArrWhite)
      chessTafel(chessArrBlack)}})
  
  
function chessTafel(arr) {
  function k(chessItem){
    let item = document.getElementById(`${chessItem.name}`)
    item.style.opacity = '1';
    item.style.left=`${(chessItem.xy[1] * 10.7) - 10.7}vmin`;
    item.style.top=`${(chessItem.xy[0] * 10.7) - 8.7}vmin`;
    
  }
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
      k(arr[i]);
      }, 100 * i);
  }
}

window.addEventListener('click', (e)=>{
  // console.log(activeStep)
  // 
  if (activeStep === true) {
    // console.log(activeStep)
    
    if (e.target.className === 'chessImg') {
      let idChess = e.target.id;
      // console.log(idChess)
      if (gameSetting.colorChess === 'white' && idChess.includes('white')) {
        let targetChess;
        chessArrWhite.forEach(item => {
          if (item.name === idChess) {
            targetChess = item
          }
        })
        activeStepArr = targetChess.step();
        activeChess = targetChess.name;
        activeStepArr.forEach((i)=>{
          console.log(i)
          document.getElementById(i.join('')).style.opacity='0.5'
          // activeStep = false;
        })
      }
  
  
      if (gameSetting.colorChess === 'black' && idChess.includes('black')) {
        let targetChess;
        chessArrBlack.forEach(item => {
          if (item.name === idChess) {
            targetChess = item
          }
        })
        // console.log(targetChess.step())
        let j = targetChess.step()
        // console.log(j)
        j.forEach((i)=>{
          // console.log(7)
          document.getElementById(`${i.join()}`).style.opacity='0.5'
        })
      }
      activeStep = false;
    }
  } else {
    activeStep = true;
    // activeStepArr
    document.querySelectorAll('.Cell').forEach(item=>item.style.opacity = '0.0')
    if (e.target.className === 'Cell') {
        let arrId = e.target.id.split('')
        arrId.forEach((item,index)=>{arrId[index] = Number(item)})
        let stepTrue = false;
        activeStepArr.forEach((item)=>{
          if(arraysAreEqual(arrId, item)) {
            stepTrue = true
          }
          console.log(activeStepArr)
          console.log(arrId)
        })
        if(stepTrue) {
          console.log(activeChess)
          
          chessArrBlack.forEach((item) => {
            console.log(item.name)
            if (item.name === activeChess) {
              item.xy = arrId
            }
          })
          chessArrWhite.forEach((item) => {
            // console.log(item.name)
            if (item.name === activeChess) {
              console.log(5)
              item.xy = arrId
            }
          })
        }
      }

  }

  
})

  // window.addEventListener('keypress', (e) => {
  //   if(e.key===' ') {
  //       game = false
  //       let chess = document.querySelector('.chess');
  //       let chessImg = document.querySelectorAll('.chessImg');
  //       chessImg.forEach(item=>item.style.position='absolute');
  //       document.getElementById('whitePawnA').style.left='5vw'
  //       chess.setAttribute('style', 
  //       `display:flex; height:auto; width:auto; justify-content:left;
  //        min-width:0; margin-top:6vmin; margin-left:-83vmin`)
  //   }
  // })


  export {clientTafel, heightTafel}