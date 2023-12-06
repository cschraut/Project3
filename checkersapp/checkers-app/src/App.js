
import './App.css';

import React from 'react';
import {useState} from 'react';
export default function Board() {
  const [squares, setSquares] = useState(Array(64).fill(null));


  return (
    <div>
      <div className = "status"></div>
      <div className="board-row">
        <SquareWhite value = {squares[0]} />
        <SquareBlack value = {squares[1]} />
        <SquareWhite value = {squares[2]} />
        <SquareBlack value = {squares[3]} />
        <SquareWhite value = {squares[4]} />
        <SquareBlack value = {squares[5]} />
        <SquareWhite value = {squares[6]} />
        <SquareBlack value = {squares[7]} />
      </div>
      <div className="board-row">
        <SquareBlack value = {squares[8]} />
        <SquareWhite value = {squares[9]} />
        <SquareBlack value = {squares[10]} />
        <SquareWhite value = {squares[11]} />
        <SquareBlack value = {squares[12]} />
        <SquareWhite value = {squares[13]} />
        <SquareBlack value = {squares[14]} />
        <SquareWhite value = {squares[15]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[16]} />
        <SquareBlack value = {squares[17]} />
        <SquareWhite value = {squares[18]} />
        <SquareBlack value = {squares[19]} />
        <SquareWhite value = {squares[20]} />
        <SquareBlack value = {squares[21]} />
        <SquareWhite value = {squares[22]} />
        <SquareBlack value = {squares[23]} />
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
        <SquareBlack value = {squares[40]} />
        <SquareWhite value = {squares[41]} />
        <SquareBlack value = {squares[42]} />
        <SquareWhite value = {squares[43]} />
        <SquareBlack value = {squares[44]} />
        <SquareWhite value = {squares[45]} />
        <SquareBlack value = {squares[46]} />
        <SquareWhite value = {squares[47]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[48]} />
        <SquareBlack value = {squares[49]} />
        <SquareWhite value = {squares[50]} />
        <SquareBlack value = {squares[51]} />
        <SquareWhite value = {squares[52]} />
        <SquareBlack value = {squares[53]} />
        <SquareWhite value = {squares[54]} />
        <SquareBlack value = {squares[55]} />
      </div>
      <div className="board-row">
        <SquareBlack value = {squares[56]} />
        <SquareWhite value = {squares[57]} />
        <SquareBlack value = {squares[58]} />
        <SquareWhite value = {squares[59]} />
        <SquareBlack value = {squares[60]} />
        <SquareWhite value = {squares[61]} />
        <SquareBlack value = {squares[62]} />
        <SquareWhite value = {squares[63]} />
      </div>
    </div>
    );
}
function Square({value}) {
  return (
  <button 
    className="square">
    {value}
  </button>
  );
}
function SquareBlack({value}) {
  return (
  <button 
    className="square1">
    {value}
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