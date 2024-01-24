import React, { useState} from 'react';
import './styles.css';
import {Board} from "./components/Board";
import {GameInfo} from "./components/GameInfo";



/**
 * @typedef {Object} Play
 * @property {number} move
 * @property {number} square
 * @property {string} player
 */

function App() {
  const [history, setHistory] = useState([]);

  /**
   *
   * @param {Play} newPlay
   */
  function handlePlay(newPlay) {
    const newHistory = history.filter((play) => play.move <= newPlay.move);
    newHistory.push(newPlay);
    setHistory(newHistory);
  }

  /**
   * @param {number} step
   */
  function jumpTo(step) {
    console.log(`jumpTo(${step})`);
    setHistory(history.slice(0, step));
  }

  return (
    <div className="App">
      <Board history={history} onPlay={handlePlay}/>
      {/*{GameInfo(setShowHistoryDescending, desc, showHistoryDescending, history, getHistoryTable)}*/}
      <GameInfo history={history} jumpTo={jumpTo}/>
      <ResetButton onResetClick={() => jumpTo(0)}/>
    </div>
  );
}

/**
 * The ResetButton component.
 * @param {Object} props - The props for the component.
 * @param {function} props.onResetClick - The function to call when the button is clicked.
 * @returns {JSX.Element}
 */
function ResetButton({onResetClick}) {
  return (
    <button onClick={onResetClick}>Reset</button>
  );
}

export default App;
