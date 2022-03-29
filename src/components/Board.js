import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Board.css';

const Board = ({ squares, onClick, winner }) => {
  return (
    <div className={`board ${winner && 'winning-board'}`}>
      {squares.map((square, i) => (
        <button className='squares' key={uuidv4()} onClick={() => onClick(i)}>
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
