import React from 'react';

const ButtonNumber = ({number, status, onClick}) => {
    return (
      <button 
      style={{backgroundColor: colors[status]}}
      className="number"
      onClick={()=> onClick(number, status)}
      >
        {number}
      </button>
    )
}
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  
  export default ButtonNumber