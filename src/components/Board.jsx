import {Square} from "./Square";
import React from "react";

/**
 * @typedef {Object} Play
 * @property {number} move
 * @property {number} square
 * @property {string} player
 */

/**
 *
 * @param {Play[]}history
 * @param {(newPlay: Play) => void}onPlay
 * @returns {JSX.Element}
 * @constructor
 */
export function Board({history, onPlay}
) {
  const lastPlay = history[history.length - 1] || null;
  const squares = getCurrentSquares();
  const maybeWinner = calculateWinner(squares);
  /**
   *
   * @type {number[] | null }
   */
  let winningLine= null;
  
  let status;
  if (maybeWinner) {
    status = `Winner: ${maybeWinner.winner}`;
    winningLine = maybeWinner.winningLine;
  } else if (history.length === 9) {
    status = `Draw`;
  } else {
    status = `Next player: ${lastPlay ? (lastPlay.player === 'X' ? 'O' : 'X') : 'X'}`;
  }
  
  // Generate squares
  const boardSquares = squares.map((square, i) => (
    <Square key={i} highlight={!!(winningLine && winningLine.some(a => a === i))} value={square} onSquareClick={() => handleClick(i)}/>
  ));
  
  // Split the squares into rows
  const rows = [];
  for (let i = 0; i < boardSquares.length; i += 3) {
    rows.push(
      <div key={i} className="board-row">
        {boardSquares.slice(i, i + 3)}
      </div>
    );
  }
  
  return (
    <div className="App">
      <div className="status">{status}</div>
      {rows}
    </div>
  );

  /**
   *
   * @param {number}i
   */
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    onPlay({
      move: lastPlay ? lastPlay.move + 1 : 1,
      square: i,
      player: lastPlay && lastPlay.player === 'X' ? 'O' : 'X'
    });
  }
  
  function getCurrentSquares() {
    const currentSquares = getInitialState();
    if (history.length > 0) {
      // add history
      for (let play of history) {
        currentSquares[play.square] = play.player;
      }
    }
    return currentSquares;
  }

  /**
   *
   * @returns {Array<string | null>}
   */
  function getInitialState() {
    return Array(9)
      .fill(null);
  }
}

/**
 *
 * @param {Array<string | null>}squares
 * @returns {null|{winner: *, winningLine: number[]}}
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: lines[i]
      };
    }
  }
  return null;
}

