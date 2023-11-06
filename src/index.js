import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";

// import App from './components/app/app';


let ji = {
    first: "max",
    tu: "mix"
}


function fun (i){
    return i.first + i.tu
}
let i = <div className='tafel'></div>

ReactDOM.render(i, document.getElementById('root'));
