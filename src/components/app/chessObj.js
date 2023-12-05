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
var ferzNumber = 2;
let stepHistory = []
class superChess {
    constructor(x,y,name,life,origin){
        this._xy = [x, y],
        this.name = name,
        this.firstStep = true,
        this._life = life,
        this.frend = [],
        this.enemy = [],
        this.origin = origin
    }
    get xy() {return this._xy}
    set xy([x,y]) {
        let step = [this.name,this.life,[x,y],this.xy];
        stepHistory.push(step);
        this._xy = [x,y]
        document.getElementById(`${this.name}`).style.left=`${(this.xy[1] * 10.7) - 10.7}vmin`;
        document.getElementById(`${this.name}`).style.top=`${(this.xy[0] * 10.7) - 8.7}vmin`;
        if(this.name.includes('Pawn')) {
            if(this.name.includes('white')) {
                if (x === 8) {
                    console.log(document.getElementById(`${this.name}`))
                    document.getElementById(`${this.name}`).src = ferzWhite;
                    document.getElementById(`${this.name}`).id = 'whiteFerz' + ferzNumber;
                    this.name = `${'whiteFerz' + ferzNumber}`;
                    ferzNumber++
                    this.step = chessArrWhite[14].step;
                    this.stepKill = chessArrWhite[14].stepKill

                }
            } else {
                if (x === 1) {
                    document.getElementById(`${this.name}`).src = ferzBlack;
                    document.getElementById(`${this.name}`).id = 'blackFerz' + ferzNumber;
                    this.name = `${'blackFerz' + ferzNumber}`;
                    ferzNumber++
                    this.step = chessArrBlack[14].step;
                    this.stepKill = chessArrBlack[14].stepKill
                }
            }
        }
        if(this.name.includes('King')) {
            if(this.name.includes('white')) {
                if (this.firstStep === true && y === 3) {
                    console.log()
                    chessArrWhite[8].xy = [x,y+1]
                }
                if (this.firstStep === true && y === 7) {
                    console.log()
                    chessArrWhite[9].xy = [x,y-1]
                }
            } else {
                if (this.firstStep === true && y === 3) {
                    console.log()
                    chessArrBlack[8].xy = [x,y+1]
                }
                if (this.firstStep === true && y === 7) {
                    console.log()
                    chessArrBlack[9].xy = [x,y-1]
                }
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
                        console.log(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2]))
                        if(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2])) {
                            chessBool = false;
                            console.log('gg')
                        }
                    }
                })
                enemy.forEach((item) => {
                    if (item.life === true) {
                        console.log(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2]))
                        if(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2])) {
                            chessBool = false;
                            console.log('gg')
                        }
                    }
                })
                
                if (chessBool === true) {
                    console.log(chess.xy)
                    step = [chess.xy[0], chess.xy[1] - 2];
                    console.log(step)
                    arr()
                }
                chessBool = true;
                frend.forEach((item) => {
                    if (item.life === true) {
                        // console.log(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4]))
                        if(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4])) {
                            chessBool = false;
                            console.log('gg')
                        }
                    }
                })
                enemy.forEach((item) => {
                    if (item.life === true) {
                        console.log(arraysAreEqual(item.xy, cellArr[0]) || arraysAreEqual(item.xy, cellArr[1]) || 
                        arraysAreEqual(item.xy, cellArr[2]))
                        if(arraysAreEqual(item.xy, cellArr[3]) || arraysAreEqual(item.xy, cellArr[4])) {
                            chessBool = false;
                            console.log('gg')
                        }
                    }
                })
                if (chessBool === true) {
                    console.log(chess.xy)
                    step = [chess.xy[0], chess.xy[1] + 2];
                    console.log(step)
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
            if (!chessArrWhite.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrBlack.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                    step.push(oneStep)
                    oneStep = [this.xy[0] + 2, this.xy[1]];
                    if (this.firstStep === true) {
                        if (!chessArrWhite.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                            if (!chessArrBlack.find(item=>item.life && arraysAreEqual(item.xy, oneStep)))
                            step.push(oneStep)
                        }
                    }
                }
            }
        }
        // oneStep = [this.xy[0] + 2, this.xy[1]];
        // if (this.firstStep === true) {
        //     if (!chessArrWhite.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
        //         if (!chessArrBlack.find(item=>item.life && arraysAreEqual(item.xy, oneStep)))
        //         step.push(oneStep)
        //     }
        // }
        oneStep = [this.xy[0] + 1, this.xy[1] + 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8) {
            if (chessArrBlack.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }

        }
        oneStep = [this.xy[0] + 1, this.xy[1] - 1];
        if (oneStep[0] <= 8 && oneStep[1] >= 1) {
            if (chessArrBlack.find(item=>item.life && arraysAreEqual(item.xy, oneStep))) {
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
        return stepRock(chessArrWhite,chessArrBlack,this,false);
    }
    stepKill() {
        return stepRock(chessArrWhite,chessArrBlack,this, true);
    }
}
class whiteHorse extends superChess {
    step() {
        return stepHorse(chessArrWhite,this, false);
    }
    stepKill() {
        return stepHorse(chessArrWhite,this, true);
    }
}
class whiteOfficer extends superChess{
    step() {
        return stepOfficer(chessArrWhite,chessArrBlack,this,false);
    }
    stepKill() {
        return stepOfficer(chessArrWhite,chessArrBlack,this,true);
    }
}
class whiteFerz extends superChess {
    step() {
        let stepArr = [];
        stepRock(chessArrWhite,chessArrBlack,this, false).forEach((i)=>stepArr.push(i))
        stepOfficer(chessArrWhite,chessArrBlack,this, false).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
    stepKill() {
        let stepArr = [];
        stepRock(chessArrWhite,chessArrBlack,this, true).forEach((i)=>stepArr.push(i))
        stepOfficer(chessArrWhite,chessArrBlack,this, true).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
}
class whiteKing extends superChess {
    step() {
        return stepKing(chessArrWhite,chessArrBlack,this,false)
    }
    stepKill() {
        return stepKing(chessArrWhite,chessArrBlack,this,true)
    }
}

class blackPawn extends superChess {
    step() {
        let step = [];
        let oneStep = [this.xy[0] - 1, this.xy[1]];
        if (oneStep[0] >= 1) {
            if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
                console.log(oneStep)
                oneStep = [this.xy[0] - 2, this.xy[1]];
                if (this.firstStep === true && oneStep[0] >= 1) {
                    if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep))) {
                        if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep)))
                        step.push(oneStep)
                    }
                }
                }
            }
        }
        // oneStep = [this.xy[0] - 2, this.xy[1]];
        // if (this.firstStep === true) {
        //     if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep))) {
        //         if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep)))
        //         step.push(oneStep)
        //     }
        // }
        oneStep = [this.xy[0] - 1, this.xy[1] + 1];
        if (oneStep[0] >= 1 && oneStep[1] <= 8) {
            if (chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] - 1, this.xy[1] - 1];
        if (oneStep[0] >= 1 && oneStep[1] >= 1) {
            if (chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
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
        return stepRock(chessArrBlack,chessArrWhite,this,false);
    }
    stepKill() {
        return stepRock(chessArrBlack,chessArrWhite,this,true);
    }
}
class blackHorse extends superChess {
    step() {
        return stepHorse(chessArrBlack,this, false);
    }
    stepKill() {
        return stepHorse(chessArrBlack,this, true);
    }
}
class blackOfficer extends superChess{
    step() {
        return stepOfficer(chessArrBlack,chessArrWhite,this,false);
    }
    stepKill() {
        return stepOfficer(chessArrBlack,chessArrWhite,this,false);
    }
}
class blackFerz extends superChess {
    step() {
        let stepArr = [];
        stepRock(chessArrBlack,chessArrWhite,this, false).forEach((i)=>stepArr.push(i))
        stepOfficer(chessArrBlack,chessArrWhite,this, false).forEach((i)=>stepArr.push(i))
        return stepArr;
        
    }
    stepKill() {
        let stepArr = [];
        stepRock(chessArrBlack,chessArrWhite,this, true).forEach((i)=>stepArr.push(i))
        stepOfficer(chessArrBlack,chessArrWhite,this, true).forEach((i)=>stepArr.push(i))
        return stepArr;
    }
}
class blackKing extends superChess {
    step() {
        return stepKing(chessArrBlack,chessArrWhite,this,false)
    }
    stepKill() {
        return stepKing(chessArrBlack,chessArrWhite,this,true)
    }
}

let chessArrWhite = [
    new whitePawn(2,1,'whitePawnA', true, true),
    new whitePawn(2,2,'whitePawnB', true, true),
    new whitePawn(2,3,'whitePawnC', true, true),
    new whitePawn(2,4,'whitePawnD', true, true),
    new whitePawn(2,5,'whitePawnE', true, true),
    new whitePawn(2,6,'whitePawnF', true, true),
    new whitePawn(2,7,'whitePawnG', true, true),
    new whitePawn(2,8,'whitePawnH', true, true),
    new whiteRock(1,1,'whiteRockA', true, true),
    new whiteRock(1,8,'whiteRockH', true, true),
    new whiteHorse(1,2,'whiteHorseB', true, true),
    new whiteHorse(1,7,'whiteHorseG', true, true),
    new whiteOfficer(1,3,'whiteOfficerC', true, true),
    new whiteOfficer(1,6,'whiteOfficerF', true, true),
    new whiteFerz(1,4,'whiteFerz1', true, true),
    new whiteKing(1,5,'whiteKing', true, true)
];
let chessArrBlack = [
    new blackPawn(7,1,'blackPawnA', true, true),
    new blackPawn(7,2,'blackPawnB', true, true),
    new blackPawn(7,3,'blackPawnC', true, true),
    new blackPawn(7,4,'blackPawnD', true, true),
    new blackPawn(7,5,'blackPawnE', true, true),
    new blackPawn(7,6,'blackPawnF', true, true),
    new blackPawn(7,7,'blackPawnG', true, true),
    new blackPawn(7,8,'blackPawnH', true, true),
    new blackRock(8,1,'blackRockA', true, true),
    new blackRock(8,8,'blackRockH', true, true),
    new blackHorse(8,2,'blackHorseB', true, true),
    new blackHorse(8,7,'blackHorseG', true, true),
    new blackOfficer(8,3,'blackOfficerC', true, true),
    new blackOfficer(8,6,'blackOfficerF', true, true),
    new blackFerz(8,4,'blackFerz1', true, true),
    new blackKing(8,5,'blackKing', true, true)
]

function createFrendEnemy (arrFrend, arrEnemy) {
    arrFrend.forEach((item) => {
        item.frend = arrFrend;
        item.enemy = arrEnemy;
    })
}
createFrendEnemy(chessArrWhite, chessArrBlack)
createFrendEnemy(chessArrBlack,chessArrWhite)

function createPsevdoChess (psevdoWhite, psevdoBlack, white, black) {
    psevdoWhite = [
        new whitePawn(white[0].xy[0],white[0].xy[1],white[0].name, white[0].life, false),
        new whitePawn(white[1].xy[0],white[1].xy[1],white[1].name, white[1].life, false),
        new whitePawn(white[2].xy[0],white[2].xy[1],white[2].name, white[2].life, false),
        new whitePawn(white[3].xy[0],white[3].xy[1],white[3].name, white[3].life, false),
        new whitePawn(white[4].xy[0],white[4].xy[1],white[4].name, white[4].life, false),
        new whitePawn(white[5].xy[0],white[5].xy[1],white[5].name, white[5].life, false),
        new whitePawn(white[6].xy[0],white[6].xy[1],white[6].name, white[6].life, false),
        new whitePawn(white[7].xy[0],white[7].xy[1],white[7].name, white[7].life, false),
        new whiteRock(white[8].xy[0],white[8].xy[1],white[8].name, white[8].life, false),
        new whiteRock(white[9].xy[0],white[9].xy[1],white[9].name, white[9].life, false),
        new whiteHorse(white[10].xy[0],white[10].xy[1],white[10].name, white[10].life, false),
        new whiteHorse(white[11].xy[0],white[11].xy[1],white[11].name, white[11].life, false),
        new whiteOfficer(white[12].xy[0],white[12].xy[1],white[12].name, white[12].life, false),
        new whiteOfficer(white[13].xy[0],white[13].xy[1],white[13].name, white[13].life, false),
        new whiteFerz(white[14].xy[0],white[14].xy[1],white[14].name, white[14].life, false),
        new whiteKing(white[15].xy[0],white[15].xy[1],white[15].name, white[15].life, false)
    ];
    
    psevdoBlack = [
        new blackPawn(black[0].xy[0],black[0].xy[1],black[0].name, black[0].life, false),
        new blackPawn(black[1].xy[0],black[1].xy[1],black[1].name, black[1].life, false),
        new blackPawn(black[2].xy[0],black[2].xy[1],black[2].name, black[2].life, false),
        new blackPawn(black[3].xy[0],black[3].xy[1],black[3].name, black[3].life, false),
        new blackPawn(black[4].xy[0],black[4].xy[1],black[4].name, black[4].life, false),
        new blackPawn(black[5].xy[0],black[5].xy[1],black[5].name, black[5].life, false),
        new blackPawn(black[6].xy[0],black[6].xy[1],black[6].name, black[6].life, false),
        new blackPawn(black[7].xy[0],black[7].xy[1],black[7].name, black[7].life, false),
        new blackRock(black[8].xy[0],black[8].xy[1],black[8].name, black[8].life, false),
        new blackRock(black[9].xy[0],black[9].xy[1],black[9].name, black[9].life, false),
        new blackHorse(black[10].xy[0],black[10].xy[1],black[10].name, black[10].life, false),
        new blackHorse(black[11].xy[0],black[11].xy[1],black[11].name, black[11].life, false),
        new blackOfficer(black[12].xy[0],black[12].xy[1],black[12].name, black[12].life, false),
        new blackOfficer(black[13].xy[0],black[13].xy[1],black[13].name, black[13].life, false),
        new blackFerz(black[14].xy[0],black[14].xy[1],black[14].name, black[14].life, false),
        new blackKing(black[15].xy[0],black[15].xy[1],black[15].name, black[15].life, false)
    ];
    createFrendEnemy(psevdoBlack,psevdoWhite);
    createFrendEnemy(psevdoWhite,psevdoBlack);
    for (let i = 0; i < 8; i++) {
        if(!psevdoWhite[i].name.includes('Pawn')) {
            psevdoWhite[i].step = psevdoWhite[14].step;
            psevdoWhite[i].stepKill = psevdoWhite[14].stepKill
        }
        if(!psevdoBlack[i].name.includes('Pawn')) {
            psevdoBlack[i].step = psevdoBlack[14].step;
            psevdoBlack[i].stepKill = psevdoBlack[14].stepKill
        }
    }
    psevdoWhite = 5
    console.log(psevdoWhite)
}



chessArrWhite[0].frend = chessArrWhite;
chessArrWhite[0].frend[1].tuo = 99
console.log(chessArrWhite[0].frend)
export {chessArrWhite, chessArrBlack, arraysAreEqual, createPsevdoChess}