import React from 'react';
import ButtonNumber from "./ButtonNumber";
import { useState, useEffect } from 'react';
import utils from "./utils";
import DisplayStars from "./DisplayStars";
import PlayAgain from "./PlayAgain";
import LeftSideBoard from './LeftSideBoard';
import RightSideBoard from './RightSideBoard';
import Board from './Board';

const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setsSecondsLeft] = useState(10);
  
    useEffect(() => {
      if(secondsLeft > 0 && availableNums.length > 0){
        const timerId = setTimeout(()=>{
          setsSecondsLeft(secondsLeft -1);
        }, 1000)
        return () => clearTimeout(timerId);
      }   
     });
  
     const setGameState = (newCandidates) => {
       if(utils.sum(newCandidates)!== stars){
        setCandidateNums(newCandidates);
      } else {
        const newAvailableNums = availableNums.filter(
          num => !newCandidates.includes(num)
        );
        setStars(utils.randomSumIn(newAvailableNums, 9))
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
      }
     }
    return [{stars, availableNums, candidateNums, secondsLeft}, setGameState];
  }
  
const Game = ({ startNewGame }) => {
    const [
      {
        stars, 
        availableNums, 
        candidateNums, 
        secondsLeft
      }, setGameState] = useGameState();
    const wrongCandidates = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length === 0 
      ? 'won' : secondsLeft === 0 ? 'lost' 
      : 'in progress';
    const numberStatus = (number) => {
      if(!availableNums.includes(number)){
        return 'used';
      }
      if(candidateNums.includes(number)){
        return wrongCandidates ? 'wrong' : 'candidate'
      }
      return 'available'
    }
  
    const onNumberClick = (number, currentStatus) => {
      if(currentStatus === 'used' || gameStatus !== 'in progress') return;
  
      const newCandidates = currentStatus === 'available' 
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);
  
      setGameState(newCandidates);
    }
    const childrenProps = { stars, startNewGame, gameStatus, numberStatus, onNumberClick}
    return (
      <div className="game">
        <h3 className="help">
          Pick 1 or more numbers that sum to the number of stars
        </h3>
        <Board {...childrenProps}/>
        <p className="timer">Time Remaining: {secondsLeft}</p>
      </div>
    );
  };
  export default Game;