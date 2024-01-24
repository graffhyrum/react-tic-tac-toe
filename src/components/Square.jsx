import React from "react";

/**
 *
 * @param {boolean}highlight
 * @param {string|null}value
 * @param onSquareClick
 * @returns {JSX.Element}
 */
export function Square({highlight,value, onSquareClick}) {
  return (
    <button className={`square ${highlight ? 'highlight' : ''}`}
            onClick={onSquareClick}>
      {value}
    </button>
  );
}