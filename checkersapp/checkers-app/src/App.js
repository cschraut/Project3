import './App.css';
import React from 'react';
import {useState} from 'react';
import red from './red-check.png';
import white from './white-check.png';


export default function Board() {
  const [squares, setBoard] = useState(Array(64).fill(null));
  
  return (
    <div>
      <div className = "status"></div>
      <div className="board-row">
        <SquareWhite value = {squares[0]} />
        <SquareBlack image = {red}/>
        <SquareWhite value = {squares[2]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[4]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[6]} />
        <SquareBlack image = {red} />
      </div>
      <div className="board-row">
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[9]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[11]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[13]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[15]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[16]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[18]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[20]} />
        <SquareBlack image = {red} />
        <SquareWhite value = {squares[22]} />
        <SquareBlack image = {red} />
      </div>
      <div className="board-row">
        <SquareBlack value = {squares[24]} />
        <SquareWhite value = {squares[25]} />
        <SquareBlack value = {squares[26]} />
        <SquareWhite value = {squares[27]} />
        <SquareBlack value = {squares[28]} />
        <SquareWhite value = {squares[29]} />
        <SquareBlack value = {squares[30]} />
        <SquareWhite value = {squares[31]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[32]} />
        <SquareBlack value = {squares[33]} />
        <SquareWhite value = {squares[34]} />
        <SquareBlack value = {squares[35]} />
        <SquareWhite value = {squares[36]} />
        <SquareBlack value = {squares[37]} />
        <SquareWhite value = {squares[38]} />
        <SquareBlack value = {squares[39]} />
      </div>
      <div className="board-row">
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[41]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[43]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[45]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[47]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[48]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[50]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[52]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[54]} />
        <SquareBlack image = {white} />
      </div>
      <div className="board-row">
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[57]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[59]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[61]} />
        <SquareBlack image = {white} />
        <SquareWhite value = {squares[63]} />
      </div>
    </div>
    );
}

function SquareBlack({image}) {
  return (
  <button 
    className="square1">
      <img src={image}></img>
  </button>
  );
}

function SquareWhite({value}) {
  return (
  <button 
    className="square2"> 
    {value}
  </button>
  );
}