import {createChess} from './app'
import ferzWhite from '../../images/ferz_bel.png';
import ferzBlack from '../../images/ferz_chyorn.png';

function arraysAreEqual(a, b) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
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
        alert('mat')
      }
    }
    // for (let item of frend) {
  
    // }
  }
var ferzNumber = 2;
let stepHistory = []
class superChess {
    constructor(x,y,name,life,origin,history,price){
        this._xy = [x, y],
        this.name = name,
        this.firstStep = true,
        this._life = life,
        this.frend = [],
        this.enemy = [],
        this.origin = origin,
        this.history = history,
        this.price = price
    }
    get xy() {return this._xy}
    set xy([x,y]) {
        let step = [this.name,this.life,[x,y],this.xy];
        this.history.push(step);
        this._xy = [x,y]
        if (this.origin === true) {
        document.getElementById(`${this.name}`).style.left=`${(this.xy[1] * 10.7) - 10.7}vmin`;
        document.getElementById(`${this.name}`).style.top=`${(this.xy[0] * 10.7) - 8.7}vmin`;
        check(this.frend, this.enemy)
        }
        this.enemy.forEach((item)=> {
            if (arraysAreEqual(item.xy,[x,y])) {
                item.life = false
            }
        })
        if(this.name.includes('Pawn')) {
            if(this.name.includes('white')) {
                if (x === 8) {
                    if (this.origin === true) {
                    document.getElementById(`${this.name}`).src = ferzWhite;
                    }
                    this.step = chessArrWhite[14].step;
                    this.stepKill = chessArrWhite[14].stepKill

                }
            } else {
                // console.log(x)
                if (x === 1) { 
                    if (this.origin === true) {
                    document.getElementById(`${this.name}`).src = ferzBlack;
                    }
                    this.step = chessArrBlack[14].step;
                    this.stepKill = chessArrBlack[14].stepKill
                    // let id = this.name;
                    // document.getElementById(`${id}`).src = ferzBlack;
                    // this.step = chessArrBlack[14].step;
                    // this.stepKill = chessArrBlack[14].stepKill;
                    // document.getElementById(`${this.name}`).id = '1';
                    // this.name = '1';
                }
            }
        }
        if(this.name.includes('King')) {
                if (this.firstStep === true && y === 3) {
                    this.frend[8].xy = [x,y+1]
                }
                if (this.firstStep === true && y === 7) {
                    this.frend[9].xy = [x,y-1]
                }
        }
        this.firstStep = false;
    }
    get life() {return this._life}
    set life(i) {
        if (i) {
            this._life = i
        } else {
            this._life = i;
            if (this.origin === true)
            document.getElementById(`${this.name}`).style.display='none';
            // this.xy = [10,10]
        }
    }
};

function stepRock (frend, enemy, chess, kill) {
    let stepArr = [];
    for (let i = chess.xy[0] + 1; i <= 8; i++) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, [i, chess.xy[1]]))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, [i, chess.xy[1]]))) {
                stepArr.push([i, chess.xy[1]]);
                break
            } else {
                stepArr.push([i, chess.xy[1]])
            }
        } else {
            if (kill) {
                stepArr.push([i, chess.xy[1]]);
            }
            break
        }
    }
    for (let i = chess.xy[0] - 1; i >= 1; i--) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, [i, chess.xy[1]]))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, [i, chess.xy[1]]))) {
                stepArr.push([i, chess.xy[1]]);
                break
            } else {
                stepArr.push([i, chess.xy[1]])
            }
        } else {
            if (kill) {
                stepArr.push([i, chess.xy[1]]);
            }
            break
        }
    }
    for (let i = chess.xy[1] + 1; i <= 8; i++) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, [chess.xy[0], i]))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, [chess.xy[0], i]))) {
                stepArr.push([chess.xy[0], i]);
                break
            } else {
                stepArr.push([chess.xy[0], i])
            }
        } else {
            if (kill) {
                stepArr.push([chess.xy[0], i]);
            }
            break
        }
    }
    for (let i = chess.xy[1] - 1; i >= 1; i--) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, [chess.xy[0], i]))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, [chess.xy[0], i]))) {
                stepArr.push([chess.xy[0], i]);
                break
            } else {
                stepArr.push([chess.xy[0], i])
            }
        } else {
            if (kill) {
                stepArr.push([chess.xy[0], i]);
            }
            break
        }
    }
    return stepArr
}
function stepOfficer (frend, enemy, chess, kill) {
    let stepArr =[];
    for (let i = [chess.xy[0]+1, chess.xy[1]+1]; i[0] <= 8 && i[1] <= 8; i = [i[0]+1, i[1]+1]) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
                stepArr.push(i);
                break
            } else {
                stepArr.push(i)
            }
        } else {
            if (kill) {
                stepArr.push(i);
            }
            break
        }
    }
    for (let i = [chess.xy[0]-1, chess.xy[1]+1]; i[0] >= 1 && i[1] <= 8; i = [i[0]-1, i[1]+1]) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
                stepArr.push(i);
                break
            } else {
                stepArr.push(i)
            }
        } else {
            if (kill) {
                stepArr.push(i);
            }
            break
        }
    }
    for (let i = [chess.xy[0]+1, chess.xy[1]-1]; i[0] <= 8 && i[1] >= 1; i = [i[0]+1, i[1]-1]) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
                stepArr.push(i);
                break
            } else {
                stepArr.push(i)
            }
        } else {
            if (kill) {
                stepArr.push(i);
            }
            break
        }
    }
    for (let i = [chess.xy[0]-1, chess.xy[1]-1]; i[0] >= 1 && i[1] >= 1; i = [i[0]-1, i[1]-1]) {
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
            if (enemy.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
                stepArr.push(i);
                break
            } else {
                stepArr.push(i)
            }
        } else {
            if (kill) {
                stepArr.push(i);
            }
            break
        }
    }
    return stepArr
}
function stepHorse (frend, chess, kill) {
    let stepArr = [];
    function arr() {
       if (1 <= i[0] && i[0] <= 8 && 1 <= i[1] && i[1] <= 8)
        if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, i))) {
            stepArr.push(i);    
        } else {
            if (kill) stepArr.push(i);
        }
    };
    let i = [chess.xy[0] + 2,chess.xy[1] + 1];
    arr()
    i = [chess.xy[0] + 2,chess.xy[1] - 1];
    arr()
    i = [chess.xy[0] - 2,chess.xy[1] + 1];
    arr()
    i = [chess.xy[0] - 2,chess.xy[1] - 1];
    arr()
    i = [chess.xy[0] + 1,chess.xy[1] + 2];
    arr()
    i = [chess.xy[0] + 1,chess.xy[1] - 2];
    arr()
    i = [chess.xy[0] - 1,chess.xy[1] + 2];
    arr()
    i = [chess.xy[0] - 1,chess.xy[1] - 2];
    arr()
    return stepArr
}
function stepKing (frend, enemy, chess, kill) {
    let stepArr = []
    let arrEnemyStep = new Set()
    if (!kill) {
        enemy.forEach((item) => {
            if (item.life)
            item.stepKill().forEach(i=>arrEnemyStep.add(i.toString()))
        })
    }       
    let step = [chess.xy[0] + 1, chess.xy[1]];
    function arr () {
        if (1 <= step[0] && step[0] <= 8 && 1 <= step[1] && step[1] <= 8 && !arrEnemyStep.has(step.toString())) {
            if (!frend.find((item)=>item.life && arraysAreEqual(item.xy, step))) {
                stepArr.push(step)
                } else {
                    if (kill) stepArr.push(step)
                }
            }
    }
    arr()
    step = [chess.xy[0] + 1, chess.xy[1] + 1];
    arr()
    step = [chess.xy[0] + 1, chess.xy[1] - 1];
    arr()
    step = [chess.xy[0] - 1, chess.xy[1] + 1];
    arr()
    step = [chess.xy[0] - 1, chess.xy[1] - 1];
    arr()
    step = [chess.xy[0] - 1, chess.xy[1]];
    arr()
    step = [chess.xy[0], chess.xy[1] + 1];
    arr()
    step = [chess.xy[0], chess.xy[1] - 1];
    arr()
    if (chess.firstStep === true && !kill) {
        
            if (frend[8].firstStep === true) {
                let chessBool = true;
                let cellArr = [[chess.xy[0], chess.xy[1] - 1],[chess.xy[0], chess.xy[1] - 2],[chess.xy[0], chess.xy[1] - 3],
                [chess.xy[0], chess.xy[1] + 1],[chess.xy[0], chess.xy[1] + 2]];
                frend.forEach((item) => {
                    if (item.life === true) {
                        if(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2])) {
                            chessBool = false;
                        }
                    }
                })
                enemy.forEach((item) => {
                    if (item.life === true) {
                        if(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2])) {
                            chessBool = false;
                        }
                    }
                })
                
                if (chessBool === true) {

                    step = [chess.xy[0], chess.xy[1] - 2];

                    arr()
                }
                chessBool = true;
                frend.forEach((item) => {
                    if (item.life === true) {
                        // console.log(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4]))
                        if(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4])) {
                            chessBool = false;

                        }
                    }
                })
                enemy.forEach((item) => {
                    if (item.life === true) {
                      
                        if(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4])) {
                            chessBool = false;

                        }
                    }
                })
                if (chessBool === true) {
   
                    step = [chess.xy[0], chess.xy[1] + 2];

                    arr()
                }
            }
        
    }
   return stepArr

}
class whitePawn extends superChess {
    step() {
        let step = [];
        let oneStep = [this.xy[0] + 1, this.xy[1]];
        if (oneStep[0] <= 8) {
            if (!this.frend.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                if (!this.enemy.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                    step.push(oneStep)
                    oneStep = [this.xy[0] + 2, this.xy[1]];
                    if (this.firstStep === true) {
                        if (!this.frend.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                            if (!this.enemy.find(item=>item.life && arraysAreEqual(item.xy, oneStep)))
                            step.push(oneStep)
                        }
                    }
                }
            }
        }
        oneStep = [this.xy[0] + 1, this.xy[1] + 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8) {
            if (this.enemy.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }

        }
        oneStep = [this.xy[0] + 1, this.xy[1] - 1];
        if (oneStep[0] <= 8 && oneStep[1] >= 1) {
            if (this.enemy.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        return (step)
    }
    stepKill() {
        let step = [];
        let oneStep = [this.xy[0] + 1, this.xy[1] + 1];
        if(oneStep[0] <= 8 && oneStep[1] <= 8) {
            step.push(oneStep)
        }
        oneStep = [this.xy[0] + 1, this.xy[1] - 1]
        if(oneStep[0] <= 8 && oneStep[1] >= 1) {
            step.push(oneStep)
        }

        return step;
    }
}
class whiteRock extends superChess {
    step() {
        return stepRock(this.frend,this.enemy,this,false);
    }
    stepKill() {
        return stepRock(this.frend,this.enemy,this, true);
    }
}
class whiteHorse extends superChess {
    step() {
        return stepHorse(this.frend,this, false);
    }
    stepKill() {
        return stepHorse(this.frend,this, true);
    }
}
class whiteOfficer extends superChess{
    step() {
        return stepOfficer(this.frend,this.enemy,this,false);
    }
    stepKill() {
        return stepOfficer(this.frend,this.enemy,this,true);
    }
}
class whiteFerz extends superChess {
    step() {
        let stepArr = [];
        stepRock(this.frend,this.enemy,this, false).forEach((i)=>stepArr.push(i))
        stepOfficer(this.frend,this.enemy,this, false).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
    stepKill() {
        let stepArr = [];
        stepRock(this.frend,this.enemy,this, true).forEach((i)=>stepArr.push(i))
        stepOfficer(this.frend,this.enemy,this, true).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
}
class whiteKing extends superChess {
    step() {
        return stepKing(this.frend,this.enemy,this,false)
    }
    stepKill() {
        return stepKing(this.frend,this.enemy,this,true)
    }
}

class blackPawn extends superChess {
    step() {
        let step = [];
        let oneStep = [this.xy[0] - 1, this.xy[1]];
        if (oneStep[0] >= 1) {
            if (!this.frend.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!this.enemy.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)

                oneStep = [this.xy[0] - 2, this.xy[1]];
                if (this.firstStep === true && oneStep[0] >= 1) {
                    if (!this.frend.find(item=> arraysAreEqual(item.xy, oneStep))) {
                        if (!this.enemy.find(item=> arraysAreEqual(item.xy, oneStep)))
                        step.push(oneStep)
                    }
                }
                }
            }
        }
        oneStep = [this.xy[0] - 1, this.xy[1] + 1];
        if (oneStep[0] >= 1 && oneStep[1] <= 8) {
            if (this.enemy.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] - 1, this.xy[1] - 1];
        if (oneStep[0] >= 1 && oneStep[1] >= 1) {
            if (this.enemy.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        return (step)
    }
    stepKill() {
        let step = [];
        let oneStep = [this.xy[0] - 1, this.xy[1] + 1];
        if(oneStep[0] >= 1 && oneStep[1] <= 8) {
            step.push(oneStep)
        }
        oneStep = [this.xy[0] - 1, this.xy[1] - 1]
        if(oneStep[0] >= 1 && oneStep[1] >= 1) {
            step.push(oneStep)
        }
        return step;
    }
}
class blackRock extends superChess {
    step() {
        return stepRock(this.frend,this.enemy,this,false);
    }
    stepKill() {
        return stepRock(this.frend,this.enemy,this,true);
    }
}
class blackHorse extends superChess {
    step() {
        return stepHorse(this.frend,this, false);
    }
    stepKill() {
        return stepHorse(this.frend,this, true);
    }
}
class blackOfficer extends superChess{
    step() {
        return stepOfficer(this.frend,this.enemy,this,false);
    }
    stepKill() {
        return stepOfficer(this.frend,this.enemy,this,false);
    }
}
class blackFerz extends superChess {
    step() {
        let stepArr = [];
        stepRock(this.frend,this.enemy,this, false).forEach((i)=>stepArr.push(i))
        stepOfficer(this.frend,this.enemy,this, false).forEach((i)=>stepArr.push(i))
        return stepArr;
        
    }
    stepKill() {
        let stepArr = [];
        stepRock(this.frend,this.enemy,this, true).forEach((i)=>stepArr.push(i))
        stepOfficer(this.frend,this.enemy,this, true).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
}
class blackKing extends superChess {
    step() {
        return stepKing(this.frend,this.enemy,this,false)
    }
    stepKill() {
        return stepKing(this.frend,this.enemy,this,true)
    }
}

let chessArrWhite = [
    new whitePawn(2,1,'whitePawnA', true, true, stepHistory,2),
    new whitePawn(2,2,'whitePawnB', true, true, stepHistory,2),
    new whitePawn(2,3,'whitePawnC', true, true, stepHistory,2),
    new whitePawn(2,4,'whitePawnD', true, true, stepHistory,2),
    new whitePawn(2,5,'whitePawnE', true, true, stepHistory,2),
    new whitePawn(2,6,'whitePawnF', true, true, stepHistory,2),
    new whitePawn(2,7,'whitePawnG', true, true, stepHistory,2),
    new whitePawn(2,8,'whitePawnH', true, true, stepHistory,2),
    new whiteRock(1,1,'whiteRockA', true, true, stepHistory,10),
    new whiteRock(1,8,'whiteRockH', true, true, stepHistory,10),
    new whiteHorse(1,2,'whiteHorseB', true, true, stepHistory,6),
    new whiteHorse(1,7,'whiteHorseG', true, true, stepHistory,6),
    new whiteOfficer(1,3,'whiteOfficerC', true, true, stepHistory,6),
    new whiteOfficer(1,6,'whiteOfficerF', true, true, stepHistory,6),
    new whiteFerz(1,4,'whiteFerz1', true, true, stepHistory,18),
    new whiteKing(1,5,'whiteKing', true, true, stepHistory,100)
];
let chessArrBlack = [
    new blackPawn(7,1,'blackPawnA', true, true, stepHistory,2),
    new blackPawn(7,2,'blackPawnB', true, true, stepHistory,2),
    new blackPawn(7,3,'blackPawnC', true, true, stepHistory,2),
    new blackPawn(7,4,'blackPawnD', true, true, stepHistory,2),
    new blackPawn(7,5,'blackPawnE', true, true, stepHistory,2),
    new blackPawn(7,6,'blackPawnF', true, true, stepHistory,2),
    new blackPawn(7,7,'blackPawnG', true, true, stepHistory,2),
    new blackPawn(7,8,'blackPawnH', true, true, stepHistory,2),
    new blackRock(8,1,'blackRockA', true, true, stepHistory,10),
    new blackRock(8,8,'blackRockH', true, true, stepHistory,10),
    new blackHorse(8,2,'blackHorseB', true, true, stepHistory,6),
    new blackHorse(8,7,'blackHorseG', true, true, stepHistory,6),
    new blackOfficer(8,3,'blackOfficerC', true, true, stepHistory,6),
    new blackOfficer(8,6,'blackOfficerF', true, true, stepHistory,6),
    new blackFerz(8,4,'blackFerz1', true, true, stepHistory,18),
    new blackKing(8,5,'blackKing', true, true, stepHistory,100)
]

function createFrendEnemy (arrFrend, arrEnemy) {
    arrFrend.forEach((item) => {
        item.frend = arrFrend;
        item.enemy = arrEnemy;
    })
}
createFrendEnemy(chessArrWhite, chessArrBlack)
createFrendEnemy(chessArrBlack,chessArrWhite)

function createPsevdoChess (psevdoWhite, psevdoBlack, white, black, psevdoHistory) {
    let w = [
        new whitePawn(white[0].xy[0],white[0].xy[1],white[0].name, white[0].life, false, psevdoHistory,2),
        new whitePawn(white[1].xy[0],white[1].xy[1],white[1].name, white[1].life, false, psevdoHistory,2),
        new whitePawn(white[2].xy[0],white[2].xy[1],white[2].name, white[2].life, false, psevdoHistory,2),
        new whitePawn(white[3].xy[0],white[3].xy[1],white[3].name, white[3].life, false, psevdoHistory,2),
        new whitePawn(white[4].xy[0],white[4].xy[1],white[4].name, white[4].life, false, psevdoHistory,2),
        new whitePawn(white[5].xy[0],white[5].xy[1],white[5].name, white[5].life, false, psevdoHistory,2),
        new whitePawn(white[6].xy[0],white[6].xy[1],white[6].name, white[6].life, false, psevdoHistory,2),
        new whitePawn(white[7].xy[0],white[7].xy[1],white[7].name, white[7].life, false, psevdoHistory,2),
        new whiteRock(white[8].xy[0],white[8].xy[1],white[8].name, white[8].life, false, psevdoHistory,10),
        new whiteRock(white[9].xy[0],white[9].xy[1],white[9].name, white[9].life, false, psevdoHistory,10),
        new whiteHorse(white[10].xy[0],white[10].xy[1],white[10].name, white[10].life, false, psevdoHistory,6),
        new whiteHorse(white[11].xy[0],white[11].xy[1],white[11].name, white[11].life, false, psevdoHistory,6),
        new whiteOfficer(white[12].xy[0],white[12].xy[1],white[12].name, white[12].life, false, psevdoHistory,6),
        new whiteOfficer(white[13].xy[0],white[13].xy[1],white[13].name, white[13].life, false, psevdoHistory,6),
        new whiteFerz(white[14].xy[0],white[14].xy[1],white[14].name, white[14].life, false, psevdoHistory,18),
        new whiteKing(white[15].xy[0],white[15].xy[1],white[15].name, white[15].life, false, psevdoHistory,100)
    ];
    
    let b = [
        new blackPawn(black[0].xy[0],black[0].xy[1],black[0].name, black[0].life, false, psevdoHistory,2),
        new blackPawn(black[1].xy[0],black[1].xy[1],black[1].name, black[1].life, false, psevdoHistory,2),
        new blackPawn(black[2].xy[0],black[2].xy[1],black[2].name, black[2].life, false, psevdoHistory,2),
        new blackPawn(black[3].xy[0],black[3].xy[1],black[3].name, black[3].life, false, psevdoHistory,2),
        new blackPawn(black[4].xy[0],black[4].xy[1],black[4].name, black[4].life, false, psevdoHistory,2),
        new blackPawn(black[5].xy[0],black[5].xy[1],black[5].name, black[5].life, false, psevdoHistory,2),
        new blackPawn(black[6].xy[0],black[6].xy[1],black[6].name, black[6].life, false, psevdoHistory,2),
        new blackPawn(black[7].xy[0],black[7].xy[1],black[7].name, black[7].life, false, psevdoHistory,2),
        new blackRock(black[8].xy[0],black[8].xy[1],black[8].name, black[8].life, false, psevdoHistory,10),
        new blackRock(black[9].xy[0],black[9].xy[1],black[9].name, black[9].life, false, psevdoHistory,10),
        new blackHorse(black[10].xy[0],black[10].xy[1],black[10].name, black[10].life, false, psevdoHistory,6),
        new blackHorse(black[11].xy[0],black[11].xy[1],black[11].name, black[11].life, false, psevdoHistory,6),
        new blackOfficer(black[12].xy[0],black[12].xy[1],black[12].name, black[12].life, false, psevdoHistory,6),
        new blackOfficer(black[13].xy[0],black[13].xy[1],black[13].name, black[13].life, false, psevdoHistory,6),
        new blackFerz(black[14].xy[0],black[14].xy[1],black[14].name, black[14].life, false, psevdoHistory,18),
        new blackKing(black[15].xy[0],black[15].xy[1],black[15].name, black[15].life, false, psevdoHistory,100)
    ];
    
    for (let i = 0; i < 8; i++) {
        if(!w[i].name.includes('Pawn')) {
            w[i].step = w[14].step;
            w[i].stepKill = w[14].stepKill
        }
        if(!b[i].name.includes('Pawn')) {
            b[i].step = b[14].step;
            b[i].stepKill = b[14].stepKill
        }
    }
    w.forEach((item)=> psevdoWhite.push(item))
    b.forEach((item)=> psevdoBlack.push(item))
    createFrendEnemy(psevdoBlack,psevdoWhite);
    createFrendEnemy(psevdoWhite,psevdoBlack);
    
}

function foo(freend, enemy) {
let stepArr = [];
    freend.forEach((item, index) => {
        if(item.life === true)
        item.step().forEach((itemStep) => {
            let step = [item.xy,itemStep,0]
            let bestEnemyStep = 0
            enemy.forEach(itemEnemy=>{
                if (arraysAreEqual(itemEnemy.xy, itemStep) && itemEnemy.life === true) {
                    step[2] = step[2] + itemEnemy.price
                }
            })
            let psevdoFrend = [];
            let psevdoEnemy = [];
            let psevdoHistory = [];
            createPsevdoChess(psevdoFrend,psevdoEnemy,freend,enemy,psevdoHistory);
            psevdoFrend[index].xy = itemStep;
// console.log(psevdoFrend[0].step())

            psevdoEnemy.forEach((itemPsevdoEnemy)=>{
                if(itemPsevdoEnemy.life === true)
                itemPsevdoEnemy.step().forEach((itemPsevdoEnemyStep)=>{
                    psevdoFrend.forEach((itemPsevdoFrend)=> {
                        if (arraysAreEqual(itemPsevdoFrend.xy, itemPsevdoEnemyStep) && bestEnemyStep < itemPsevdoFrend.price && itemPsevdoFrend.life ===true) {
                            bestEnemyStep = itemPsevdoFrend.price
                        }
                        // console.log(itemPsevdoEnemyStep,itemPsevdoFrend)
                    })
                })
            })
            step[2] = step[2] - bestEnemyStep;


            stepArr.push(step)
        })
    })

    stepArr.sort((a,b) => {
        if (a[2] > b[2]) return -1;
        if (a[2] == b[2]) return 0;
        if (a[2] < b[2]) return 1;
    })
    // console.log(stepArr)
    return stepArr[0]
}
// let obj = {
//     _i: true,
//     set i(a) {
//         if (a === true) {
//             let step = foo(chessArrBlack,chessArrWhite)
//             console.log(step)
//             chessArrBlack.forEach((item) => {
//                 if (arraysAreEqual(step[0], item.xy)) {
//                     item.xy = step[1]
//                 }
//             })
//         } else {
//             let step = foo(chessArrWhite,chessArrBlack)
//             console.log(step)
//             chessArrWhite.forEach((item) => {
//                 if (arraysAreEqual(step[0], item.xy)) {
//                     item.xy = step[1]
//                 }
//             })
//         }
//         this._i = a
//     },
//     get i() {return this._i}
// }

function checkStep (frend, enemy) {
    let arrFrendStep = new Set()
    enemy.forEach((item) => {
        if (item.life)
        item.stepKill().forEach(i=>arrFrendStep.add(i.toString()))
    })
    
}


window.addEventListener('keypress', (e) => {
    if(e.key==='q') {
        console.log(ferzBlack)
    }
})




export {chessArrWhite, chessArrBlack, arraysAreEqual, createPsevdoChess, foo}