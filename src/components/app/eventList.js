let clientTafel = {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    heightWrap: '',
    widthWrap: '',
    sizeImgChess: ''
  };
  let game = true;
  
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
  window.addEventListener('keypress', (e) => {
    if(e.key===' ') {
        game = false
        let chess = document.querySelector('.chess');
        let chessImg = document.querySelectorAll('.chessImg');
        chessImg.forEach(item=>item.style.position='absolute');
        document.getElementById('whitePawnA').style.left='5vw'
        chess.setAttribute('style', 
        `display:flex; height:auto; width:auto; justify-content:left;
         min-width:0; margin-top:6vmin; margin-left:-83vmin`)
    }
  })
  

  export {clientTafel, heightTafel}