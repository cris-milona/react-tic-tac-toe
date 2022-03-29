import React, { useState } from 'react';
import { calculateWinner } from '../utils/helper';
import Board from './Board';
import './Game.css';

const Game = () => {
  const [player, setPlayer] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
  const [step, setStep] = useState(9);

  const handleClick = (num) => {
    if (squares[num] !== '') {
      return;
    }

    let clickedSquares = [...squares];

    if (player === 'X') {
      clickedSquares[num] = 'Χ';
      setPlayer('O');
      setStep(step - 1);
    } else {
      clickedSquares[num] = 'Ο';
      setPlayer('X');
      setStep(step - 1);
    }

    setSquares(clickedSquares);
    setWinner(calculateWinner(clickedSquares));
  };

  const restartGame = () => {
    setWinner(null);
    setSquares(Array(9).fill(''));
    setStep(9);
  };

  let text = winner
    ? `${winner} won!`
    : step === 0
    ? 'No more moves. This is a tie'
    : null;

  return (
    <div>
      <h1 className='heading'>Tic-Tac-Toe</h1>
      <Board squares={squares} onClick={handleClick} winner={winner} />
      <h3 className={`turn ${winner || step === 0 ? 'turn-off' : null}`}>
        It's {player}'s turn
      </h3>
      {winner || step === 0 ? (
        <div>
          <h2 className='text'>{text}</h2>
          <button className='restart-btn' onClick={restartGame}>
            Restart Game
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Game;
