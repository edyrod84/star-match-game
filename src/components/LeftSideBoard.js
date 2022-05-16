import React from 'react'
import DisplayStars from './DisplayStars';
import PlayAgain from './PlayAgain';

const LeftSideBoard = ({startNewGame, gameStatus, stars}) => {
  return (
    <div className="left">
        {gameStatus !== 'in progress' ? ( 
            <PlayAgain onClick={startNewGame} status={gameStatus}/>
        ):(
            <DisplayStars stars={stars}/>
        )}
    </div>
  )
}

export default LeftSideBoard;