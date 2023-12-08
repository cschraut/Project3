import './App.css';
import React from 'react';
import {useState} from 'react';
import red from './red-check.png';
import white from './white-check.png';
import blank from './empty-check.png';


export default function Board() {
  const [squares, setBoard] = useState(
    [null,red,null,red,null,red,null,red,
    red,null,red,null,red,null,red,null,
    null,red,null,red,null,red,null,red,
    blank,null,blank,null,blank,null,blank,null,
    null,blank,null,blank,null,blank,null,blank,
    white,null,white,null,white,null,white,null,
    null,white,null,white,null,white,null,white,
    white,null,white,null,white,null,white,null
  ]);
  const [count, setCount] = useState(0);
  const [fromMove, setFromMove] = useState(-1);
  const [toMove, setToMove] = useState(-1);
  
  function handleClick(i){
    const nextSquares = squares.slice()
    if(count === 0){
      nextSquares[i] = blank;
      setBoard(nextSquares);
      setFromMove(i);
      setCount(1);
    }
    
    if(count === 1){
      nextSquares[i] = red
      setBoard(nextSquares);
      setToMove(i);
      setCount(2);
      if((fromMove === 1) && (i === 19)){ //
        nextSquares[10] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 3) && (i === 17)){ //
        nextSquares[10] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 3) && (i === 21)){ //
        nextSquares[12] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 5) && (i === 19)){ //
        nextSquares[12] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 5) && (i === 23)){ //
        nextSquares[14] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 7) && (i === 21)){ //
        nextSquares[14] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 8) && (i === 26)){ //
        nextSquares[17] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 10) && (i === 24)){ //
        nextSquares[17] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 10) && (i === 28)){ //
        nextSquares[19] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 12) && (i === 26)){ //
        nextSquares[19] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 12) && (i === 30)){ //
        nextSquares[21] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 14) && (i === 28)){ //
        nextSquares[21] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 17) && (i === 35)){ //
        nextSquares[26] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 19) && (i === 33)){ //
        nextSquares[26] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 19) && (i === 37)){ //
        nextSquares[28] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 21) && (i === 35)){ //
        nextSquares[26] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 21) && (i === 39)){ //
        nextSquares[30] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 23) && (i === 37)){ //
        nextSquares[30] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 24) && (i === 42)){ //
        nextSquares[33] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 26) && (i === 40)){ //
        nextSquares[33] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 26) && (i === 44)){ //
        nextSquares[35] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 28) && (i === 42)){ //
        nextSquares[35] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 28) && (i === 46)){ //
        nextSquares[37] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 30) && (i === 44)){ //
        nextSquares[37] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 33) && (i === 51)){ //
        nextSquares[42] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 35) && (i === 49)){ //
        nextSquares[42] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 35) && (i === 53)){ //
        nextSquares[44] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 37) && (i === 51)){ //
        nextSquares[44] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 37) && (i === 55)){ //
        nextSquares[46] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 39) && (i === 53)){ //
        nextSquares[46] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 40) && (i === 58)){ //
        nextSquares[49] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 42) && (i === 56)){ //
        nextSquares[49] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 42) && (i === 60)){ //
        nextSquares[51] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 44) && (i === 58)){ //
        nextSquares[51] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 44) && (i === 62)){ //
        nextSquares[53] = blank;
        setBoard(nextSquares);
      }
      if((fromMove === 46) && (i === 60)){ //
        nextSquares[53] = blank;
        setBoard(nextSquares);
      }
      
     
      
    }
    if(count === 2){
      nextSquares[i] = blank;
      setBoard(nextSquares);
      setFromMove(i)
      setCount(3);
      
    }
    if(count === 3){
      nextSquares[i] = white;
      setBoard(nextSquares);
      setToMove(i)
      setCount(0);
      if((fromMove === 17) && (i === 35)){ //
        nextSquares[26] = blank;
        setBoard(nextSquares);
      }  
    }
}
  return (
    <div>
      <div className = "status"></div>
      <div className="board-row">
        <SquareWhite value = {squares[0]} />
        <SquareBlack image = {squares[1]} onSquareClick = {() => handleClick(1)}/>
        <SquareWhite value = {squares[2]} />
        <SquareBlack image = {squares[3]} onSquareClick = {() => handleClick(3)}/>
        <SquareWhite value = {squares[4]} />
        <SquareBlack image = {squares[5]} onSquareClick = {() => handleClick(5)}/>
        <SquareWhite value = {squares[6]} />
        <SquareBlack image = {squares[7]} onSquareClick = {() => handleClick(7)}/>
      </div>
      <div className="board-row">
        <SquareBlack image = {squares[8]}  onSquareClick = {() => handleClick(8)}/>
        <SquareWhite value = {squares[9]}  />
        <SquareBlack image = {squares[10]} onSquareClick = {() => handleClick(10)}/>
        <SquareWhite value = {squares[11]} />
        <SquareBlack image = {squares[12]} onSquareClick = {() => handleClick(12)}/>
        <SquareWhite value = {squares[13]} />
        <SquareBlack image = {squares[14]} onSquareClick = {() => handleClick(14)}/>
        <SquareWhite value = {squares[15]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[16]} />
        <SquareBlack image = {squares[17]} onSquareClick = {() => handleClick(17)}/>
        <SquareWhite value = {squares[18]} />
        <SquareBlack image = {squares[19]} onSquareClick = {() => handleClick(19)}/>
        <SquareWhite value = {squares[20]} />
        <SquareBlack image = {squares[21]} onSquareClick = {() => handleClick(21)}/>
        <SquareWhite value = {squares[22]} />
        <SquareBlack image = {squares[23]} onSquareClick = {() => handleClick(23)}/>
      </div>
      <div className="board-row">
        <SquareBlack image = {squares[24]} onSquareClick = {() => handleClick(24)}/>
        <SquareWhite value = {squares[25]} />
        <SquareBlack image = {squares[26]} onSquareClick = {() => handleClick(26)}/>
        <SquareWhite value = {squares[27]} />
        <SquareBlack image = {squares[28]} onSquareClick = {() => handleClick(28)}/>
        <SquareWhite value = {squares[29]} />
        <SquareBlack image = {squares[30]} onSquareClick = {() => handleClick(30)}/>
        <SquareWhite value = {squares[31]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[32]} />
        <SquareBlack image = {squares[33]} onSquareClick = {() => handleClick(33)}/>
        <SquareWhite value = {squares[34]} />
        <SquareBlack image = {squares[35]} onSquareClick = {() => handleClick(35)}/>
        <SquareWhite value = {squares[36]} />
        <SquareBlack image = {squares[37]} onSquareClick = {() => handleClick(37)}/>
        <SquareWhite value = {squares[38]} />
        <SquareBlack image = {squares[39]} onSquareClick = {() => handleClick(39)}/>
      </div>
      <div className="board-row">
        <SquareBlack image = {squares[40]} onSquareClick = {() => handleClick(40)}/>
        <SquareWhite value = {squares[41]} />
        <SquareBlack image = {squares[42]} onSquareClick = {() => handleClick(42)}/>
        <SquareWhite value = {squares[43]} />
        <SquareBlack image = {squares[44]} onSquareClick = {() => handleClick(44)}/>
        <SquareWhite value = {squares[45]} />
        <SquareBlack image = {squares[46]} onSquareClick = {() => handleClick(46)}/>
        <SquareWhite value = {squares[47]} />
      </div>
      <div className="board-row">
        <SquareWhite value = {squares[48]} />
        <SquareBlack image = {squares[49]} onSquareClick = {() => handleClick(49)}/>
        <SquareWhite value = {squares[50]} />
        <SquareBlack image = {squares[51]} onSquareClick = {() => handleClick(51)}/>
        <SquareWhite value = {squares[52]} />
        <SquareBlack image = {squares[53]} onSquareClick = {() => handleClick(53)}/>
        <SquareWhite value = {squares[54]} />
        <SquareBlack image = {squares[55]} onSquareClick = {() => handleClick(55)}/>
      </div>
      <div className="board-row">
        <SquareBlack image = {squares[56]} onSquareClick = {() => handleClick(56)}/>
        <SquareWhite value = {squares[57]} />
        <SquareBlack image = {squares[58]} onSquareClick = {() => handleClick(58)}/>
        <SquareWhite value = {squares[59]} />
        <SquareBlack image = {squares[60]} onSquareClick = {() => handleClick(60)}/>
        <SquareWhite value = {squares[61]} />
        <SquareBlack image = {squares[62]} onSquareClick = {() => handleClick(62)}/>
        <SquareWhite value = {squares[63]} />
      </div>
    </div>
    );
}

function SquareBlack({image, onSquareClick}) {
  return (
  <button 
    className="square1">
      <img src= {image} alt="piece" onClick = {onSquareClick}></img>
      
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