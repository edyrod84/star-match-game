import React from 'react'
import ButtonNumber from './ButtonNumber';
import utils from './utils';

const RightSideBoard = ({numberStatus, onNumberClick }) => {
  return (
    <div className="right">
        {utils.range(1, 9).map(number =>
            <ButtonNumber
            key={number} 
            number={number}
            status={numberStatus(number)}
            onClick={onNumberClick}
            />
        )}
    </div>
  )
}

export default RightSideBoard;