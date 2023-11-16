function arraysAreEqual(a, b) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

class superChess {
    constructor(x,y,name){
        this._xy = [x, y],
        this.name = name,
        this.firstStep = true
    }
    get xy() {return this._xy}
};
class whitePawn extends superChess {
    step() {
        let step = [];
        let oneStep = [this.xy[0] + 1, this.xy[1]];
        if (oneStep[0] <= 8) {
            if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep)))
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 2, this.xy[1]];
        if (oneStep[0] <= 8) {
            if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep)))
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 1, this.xy[1] + 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8 && oneStep[1] >= 1) {
            if (chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 1, this.xy[1] - 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8 && oneStep[1] >= 1) {
            if (chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        console.log(step)
    }
}
class whiteRock extends superChess {}
class whiteHorse extends superChess {}
class whiteOfficer extends superChess{}
class whiteFerz extends superChess {}
class whiteKing extends superChess {}

class blackPawn extends superChess {
    step() {
        let step = [];
        let oneStep = [this.xy[0] + 1, this.xy[1]];
        if (oneStep[0] <= 8) {
            if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep)))
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 2, this.xy[1]];
        if (oneStep[0] <= 8) {
            if (!chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                if (!chessArrBlack.find(item=> arraysAreEqual(item.xy, oneStep)))
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 1, this.xy[1] + 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8 && oneStep[1] >= 1) {
            if (chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        oneStep = [this.xy[0] + 1, this.xy[1] - 1];
        if (oneStep[0] <= 8 && oneStep[1] <= 8 && oneStep[1] >= 1) {
            if (chessArrWhite.find(item=> arraysAreEqual(item.xy, oneStep))) {
                step.push(oneStep)
            }
        }
        console.log(step)
    }
}
class blackRock extends superChess {}
class blackHorse extends superChess {}
class blackOfficer extends superChess{}
class blackFerz extends superChess {}
class blackKing extends superChess {}

let chessArrWhite = [
    new whitePawn(2,1,'whitePawnA'),
    new whitePawn(2,2,'whitePawnB'),
    new whitePawn(2,3,'whitePawnC'),
    new whitePawn(2,4,'whitePawnD'),
    new whitePawn(2,5,'whitePawnE'),
    new whitePawn(2,6,'whitePawnF'),
    new whitePawn(2,7,'whitePawnG'),
    new whitePawn(2,8,'whitePawnH'),
    new whiteRock(1,1,'whiteRockA'),
    new whiteRock(1,8,'whiteRockH'),
    new whiteHorse(1,2,'whiteHorseB'),
    new whiteHorse(1,7,'whiteHorseG'),
    new whiteOfficer(1,3,'whiteOfficerC'),
    new whiteOfficer(1,6,'whiteOfficerF'),
    new whiteFerz(1,4,'whiteFerz1'),
    new whiteKing(1,5,'whiteKing')
];
let chessArrBlack = [
    new blackPawn(7,1,'blackPawnA'),
    new blackPawn(7,2,'blackPawnB'),
    new blackPawn(7,3,'blackPawnC'),
    new blackPawn(7,4,'blackPawnD'),
    new blackPawn(7,5,'blackPawnE'),
    new blackPawn(7,6,'blackPawnF'),
    new blackPawn(7,7,'blackPawnG'),
    new blackPawn(7,8,'blackPawnH'),
    new blackRock(8,1,'blackRockA'),
    new blackRock(8,8,'blackRockH'),
    new blackHorse(8,2,'blackHorseB'),
    new blackHorse(8,7,'blackHorseG'),
    new blackOfficer(8,3,'blackOfficerC'),
    new blackOfficer(8,6,'blackOfficerF'),
    new blackFerz(8,4,'blackFerz1'),
    new blackKing(8,5,'blackKing')
]

export {chessArrWhite, chessArrBlack}