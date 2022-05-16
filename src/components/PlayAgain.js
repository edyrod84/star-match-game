import React from 'react';

const PlayAgain = ({ onClick, status }) => (
	<div className="game-done">
    <p 
    className='message'
    style={{ color: status==='lost'? 'red' : 'green'}}
    >
      { status === 'lost' ? 'Game Over' : 'Congrats'}
    </p>
	  <button onClick={onClick}>Play Again</button>
	</div>
);

export default PlayAgain;