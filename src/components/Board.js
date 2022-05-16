import React from 'react'
import LeftSideBoard from './LeftSideBoard';
import RightSideBoard from './RightSideBoard';

const Board = (props) => {
    const {stars, startNewGame, gameStatus, numberStatus, onNumberClick} = props;
  return (
    <div className="body">
        <LeftSideBoard startNewGame={startNewGame} gameStatus={gameStatus} stars={stars}/>
        <RightSideBoard numberStatus={numberStatus} onNumberClick={onNumberClick} />
    </div>
  )
}
export default Board;