import {chessArrWhite, chessArrBlack, arraysAreEqual, foo, createPsevdoChess} from './chessObj.js';

let clientTafel = {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    heightWrap: '',
    widthWrap: '',
    sizeImgChess: ''
  };
  let game = true;
  let activeStep = false;
  let activeStepArr = [];
  let activeChess;


  class gameSet {
    constructor(color) {
      this._color = color,
      this._colorStep = 'white'
    }
    get color() {
      return this._color
    }
    set color(item) {
      if (item === 'white') {
        document.querySelector('.wrapper').style.rotate = '180deg';
        document.querySelectorAll('.chessImg').forEach((item) => item.style.rotate = '180deg')
      } else {
        document.querySelector('.wrapper').style.rotate = '0deg';
        document.querySelectorAll('.chessImg').forEach((item) => item.style.rotate = '0deg')
        // let ion = [];
        // let j;
        // createPsevdoChess(ion,j,chessArrWhite,chessArrBlack);
        // console.log(ion)
        
      }
      this._color = item
    }
    get colorStep() {
      return this._colorStep
    }
    set colorStep(item) {
      if (this.color === item) {
        window.addEventListener('click',clickChess)
      } else {
        if (this.color === 'white') {
        let step = foo(chessArrBlack,chessArrWhite)
        console.log(step)
        chessArrBlack.forEach((item) => {
            if (arraysAreEqual(step[0], item.xy)) {
                item.xy = step[1]
            }
        })
      } else {
      let step = foo(chessArrWhite,chessArrBlack)
        console.log(step)
        chessArrWhite.forEach((item) => {
            if (arraysAreEqual(step[0], item.xy)) {
                item.xy = step[1]
            }
        })
      }
    }
      this._colorStep = item
    }
  }
  var gameSetting = new gameSet('white')
  

  
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
      // console.log(gameSetting.colorStep)
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


function clickChess(event) {
  // console.log(activeStep)
  let classElemClick = event.target.className;
  let idElenClick = event.target.id;
  if (activeStep) {
    activeStep = false;
    document.querySelectorAll('.Cell').forEach(item=>item.style.opacity = '0.0')

    if (classElemClick === 'Cell') {  //клик по пустой клетке
      let arrId = idElenClick.split('')
        arrId.forEach((item,index)=>{arrId[index] = Number(item)})
        let cellChess = false;              ///клетка занята?
        chessArrWhite.forEach((item)=>{
          if(arraysAreEqual(arrId, item.xy) && item.life === true) {
            cellChess = true
          }
        })
        chessArrBlack.forEach((item)=>{
          if(arraysAreEqual(arrId, item.xy) && item.life === true) {
            cellChess = true
          }
        })
        if (cellChess !== true) {           /// клетка не занята
          let booleanCell = false;
          activeStepArr.forEach((item) => {
            if (arraysAreEqual(arrId, item)) booleanCell = true
          })
          if (booleanCell) {
            activeChess.xy = arrId
            if (activeChess.name.includes('white')) {
              gameSetting.colorStep = 'black'
            } else {
              gameSetting.colorStep = 'white'
            }
            check(chessArrBlack,chessArrWhite)
            check(chessArrWhite,chessArrBlack)
          }
         
        }
    }
    if (classElemClick === 'chessImg') {   ///ход
      // let enemyXY;
      if (gameSetting.color === 'white') {
        chessArrBlack.forEach((item) => {
          if (idElenClick === item.name && activeStepArr.find((i)=>arraysAreEqual(i, item.xy))) {
            activeChess.xy = item.xy;
            item.life = false
            gameSetting.colorStep = 'black'
            
          }
        })
        chessArrWhite.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = item;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
        check(chessArrWhite,chessArrBlack)
      } else {
        chessArrWhite.forEach((item) => {
          if (idElenClick === item.name && activeStepArr.find((i)=>arraysAreEqual(i, item.xy))) {
            activeChess.xy = item.xy;
            item.life = false
            gameSetting.colorStep = 'white'
          }
        })
        chessArrBlack.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = item;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
        check(chessArrBlack,chessArrWhite)
      }
     

    }

  } else {
    console.log(classElemClick === 'chessImg' && idElenClick.includes(gameSetting.color))
    if (classElemClick === 'chessImg' && idElenClick.includes(gameSetting.color)) {
      if (gameSetting.color === 'white') {  ///белые
        chessArrWhite.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = item;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
      } else {                      //// черные
        chessArrBlack.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = item;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
      }
    }
  }
 
  // check(chessArrBlack,chessArrWhite)
  // check(chessArrWhite,chessArrBlack)

}


function activeStepChess (event) {
  if (classElemClick === 'chessImg' && idElenClick.includes(gameSetting.color)) {
      if (gameSetting.color === 'white') {  ///белые
        chessArrWhite.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = idElenClick;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
      } else {                      //// черные
        chessArrBlack.forEach((item) => {
          if (item.name === idElenClick && item.life === true) {
            activeChess = idElenClick;
            activeStepArr = item.step();
            activeStepArr.forEach((i)=>{
              document.getElementById(i.join('')).style.opacity='0.5'
            })
            activeStep = true
          }
        })
      }
    }
}

function check (frend, enemy) {
  let arrFrendStep = new Set()
        frend.forEach((item) => {
            if (item.life)
            item.stepKill().forEach(i=>arrFrendStep.add(i.toString()))
        })
  if (arrFrendStep.has(enemy[15].xy.toString())) {
    console.log('chach')
    
    let mat = false
    for (let i=0; i<enemy.length; i++) {
      let stepAr = enemy[i].step()
      for (let j=0; j<stepAr.length; j++) {
        let psevdoFrend = []
        let psevdoEnemy = []
        let psevdoHistory = []
        createPsevdoChess(psevdoFrend,psevdoEnemy,frend,enemy,psevdoHistory)
        psevdoEnemy[i].xy = stepAr[j]
        let psevdoFrendStep = new Set()
        psevdoFrend.forEach((item) => {
            if (item.life)
            item.stepKill().forEach(i=>psevdoFrendStep.add(i.toString()))
        })
        if (psevdoFrendStep.has(psevdoEnemy[15].xy.toString())) {
          if(mat === false) {
            mat = true
          }
          // console.log(chessArrBlack[0])
        }
        // console.log(psevdoFrend)
      }
    }
    if (mat === true) {
      console.log('mat')
      console.log(chessArrBlack)
    }
  }
  // for (let item of frend) {

  // }
}

window.addEventListener('keypress', (e) => {
  if(e.key===' ') {
    if (gameSetting.color === 'white') {
      gameSetting.color = 'black'
      
  } else {
    gameSetting.color = 'white'
  }
}
  // console.log(gameSetting.colorStep)
})


  export {clientTafel, heightTafel, gameSetting}