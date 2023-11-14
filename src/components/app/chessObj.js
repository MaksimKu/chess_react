function arraysAreEqual(a, b) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

class whitePawn {
    constructor(x,y,name){
        this._xy = [x, y],
        // this._y = y,
        this.name = name,
        this.firstStep = true
    }
    get xy() {return this._xy}
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

let chessArrWhite = [
    new whitePawn(2,1,'whitePawnA'),
    new whitePawn(2,2,'whitePawnB'),
    new whitePawn(2,3,'whitePawnC')
];
let chessArrBlack = [
    new whitePawn(3,0,'BLACKPawnA')
]

export default chessArrWhite