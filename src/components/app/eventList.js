import {chessArrWhite, chessArrBlack, arraysAreEqual} from './chessObj.js';

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
      // console.log(gameSetting.colorChess)
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

// window.addEventListener('click', (e)=>{
//   // console.log(activeStep)
//   // 
//   if (activeStep === true) {
//     // console.log(activeStep)
    
//     if (e.target.className === 'chessImg') {
//       let idChess = e.target.id;
//       // console.log(idChess)
//       if (gameSetting.colorChess === 'white' && idChess.includes('white')) {
//         let targetChess;
//         chessArrWhite.forEach(item => {
//           if (item.name === idChess) {
//             targetChess = item
//           }
//         })
//         activeStepArr = targetChess.step();
//         activeChess = targetChess.name;
//         activeStepArr.forEach((i)=>{
//           console.log(i)
//           document.getElementById(i.join('')).style.opacity='0.5'
//           // activeStep = false;
//         })
//       }
  
  
//       if (gameSetting.colorChess === 'black' && idChess.includes('black')) {
//         let targetChess;
//         chessArrBlack.forEach(item => {
//           console.log(item.name === idChess)
//           if (item.name === idChess) {
//             targetChess = item
            
//           }
//         })
//         activeStepArr = targetChess.step();
//         activeChess = targetChess.name;
//         activeStepArr.forEach((i)=>{
//           console.log(i)
//           document.getElementById(i.join('')).style.opacity='0.5'
//         })
//       }
//       activeStep = false;
//     }
//   } else {
//     activeStep = true;
//     // activeStepArr
//     document.querySelectorAll('.Cell').forEach(item=>item.style.opacity = '0.0')
//     if (e.target.className === 'Cell') {
//         let arrId = e.target.id.split('')
//         arrId.forEach((item,index)=>{arrId[index] = Number(item)})
//         let stepTrue = false;
//         activeStepArr.forEach((item)=>{
//           if(arraysAreEqual(arrId, item)) {
//             stepTrue = true
//           }
//           console.log(activeStepArr)
//           console.log(arrId)
//         })
//         if(stepTrue) {
//           console.log(activeChess)
          
//           chessArrBlack.forEach((item) => {
//             console.log(item.name)
//             if (item.name === activeChess) {
//               item.xy = arrId

//             }
//           })
//           chessArrWhite.forEach((item) => {
//             // console.log(item.name)
//             if (item.name === activeChess) {
//               console.log(5)
//               item.xy = arrId
//             }
//           })
//         }
//       }

//   }

  
// })

// window.addEventListener('click', (e)=>{
//   if (activeStep) {
//     //клик по пустой клетке
//     activeStep = false;
//     document.querySelectorAll('.Cell').forEach(item=>item.style.opacity = '0.0')
//     if (e.target.className === 'Cell') {
//         let arrId = e.target.id.split('')
//         arrId.forEach((item,index)=>{arrId[index] = Number(item)})
//         let stepTrue = false;
//         activeStepArr.forEach((item)=>{
//           if(arraysAreEqual(arrId, item)) {
//             stepTrue = true
//           }

//         })
//         //ход на пустую клетку
//         if(stepTrue) {
//           chessArrBlack.forEach((item) => {
//             if (item.name === activeChess) {
//               item.xy = arrId
//             }
//           })
//           chessArrWhite.forEach((item) => {
//             if (item.name === activeChess) {
//               item.xy = arrId
//             }
//           })
//         }
//       }
//       //клик по занятой клетке при активном ходе(сЪесть)
//       if (e.target.className === 'chessImg') {
        
//         if (!e.target.id.includes(gameSetting.colorChess)) {
//           chessArrWhite.forEach((item) => {
//             if (item.name === e.target.id && item.life === true) {
//               item.life = false;

//               chessArrBlack.forEach((i) => {
//                 if (i.name === activeChess) {
//                   i.xy = item.xy
//                 }
//               })
              
//             }
//           })
//           chessArrBlack.forEach((item) => {
//             if (item.name === e.target.id && item.life === true) {
//               item.life = false;
//               // console.log(activeChess)
//               chessArrWhite.forEach((i) => {
//                 if (i.name === activeChess) {
//                   i.xy = item.xy
//                 }
//               })  
//             }
//           })
//         } else {
//           activeStepChess(e)
//         }
//       }
//   } else {
//     // if (e.target.className === 'chessImg') {
//     //   if (e.target.id.includes(gameSetting.colorChess)) {
//     //     chessArrWhite.forEach((item) => {
//     //       if (item.name === e.target.id && item.life === true) {
//     //         activeChess = e.target.id;
//     //         activeStepArr = item.step();
//     //         activeStepArr.forEach((i)=>{
//     //           document.getElementById(i.join('')).style.opacity='0.5'
//     //         })
//     //         activeStep = true
//     //       }
//     //     })
//     //     chessArrBlack.forEach((item) => {
//     //       if (item.name === e.target.id && item.life === true) {
//     //         activeChess = e.target.id;
//     //         activeStepArr = item.step();
//     //         activeStepArr.forEach((i)=>{
//     //           document.getElementById(i.join('')).style.opacity='0.5'
//     //         })
//     //         activeStep = true
//     //       }
//     //     })
//     //   }
//     // }
//     activeStepChess(e)

//   }
// })


window.addEventListener('click', function clickChess(event) {
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
          if(arraysAreEqual(arrId, item.xy)) {
            cellChess = true
          }
        })
        chessArrBlack.forEach((item)=>{
          if(arraysAreEqual(arrId, item.xy)) {
            cellChess = true
          }
        })
        if (cellChess !== true) {           /// клетка не занята
          let booleanCell = false;
          activeStepArr.forEach((item) => {
            if (arraysAreEqual(arrId, item)) booleanCell = true
          })
          if (gameSetting.colorChess === 'white') {
            chessArrWhite.forEach((item) => {
              if (booleanCell) {
                activeChess.xy = arrId
              }
            })
          } else {
            chessArrBlack.forEach((item) => {
              if (booleanCell) {
                activeChess.xy = arrId
              }
            })
          }
        }
    }
    if (classElemClick === 'chessImg') {   ///ход
      // let enemyXY;
      if (gameSetting.colorChess === 'white') {
        chessArrBlack.forEach((item) => {
          if (idElenClick === item.name && activeStepArr.find((i)=>arraysAreEqual(i, item.xy))) {
            activeChess.xy = item.xy;
            item.life = false
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
      } else {
        chessArrWhite.forEach((item) => {
          if (idElenClick === item.name) {
            activeChess.xy = item.xy;
            item.life = false
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
      }
      // if (activeStepArr.find((item)=>arraysAreEqual(item, enemyXY))) {

      // }

    } else {

    }
    // if (classElemClick === 'chessImg' && idElenClick.includes('King')) {  /// ход короля

    // }

  } else {
    if (classElemClick === 'chessImg' && idElenClick.includes(gameSetting.colorChess)) {
      if (gameSetting.colorChess === 'white') {  ///белые
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
})

function activeStepChess (event) {
  if (classElemClick === 'chessImg' && idElenClick.includes(gameSetting.colorChess)) {
      if (gameSetting.colorChess === 'white') {  ///белые
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

  window.addEventListener('keypress', (e) => {
    if(e.key===' ') {
      if (gameSetting.colorChess === 'white') {
        gameSetting.colorChess = 'black'
        
    } else {
      gameSetting.colorChess = 'white'
    }
  }
    // console.log(gameSetting.colorChess)
  })


  export {clientTafel, heightTafel}