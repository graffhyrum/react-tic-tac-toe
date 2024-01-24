import React, {useState} from "react";

/**
 * @typedef {Object} Play
 * @property {number} move
 * @property {number} square
 * @property {string} player
 */

/**
 *
 * @param {Play[]}history
 * @param {(step: number) => void}jumpTo
 * @returns {JSX.Element}
 * @constructor
 */
export function GameInfo({history, jumpTo}) {
  const [descHist, setDescHist] = useState(true);
  return (<div className="game-info">
    <button onClick={() => {
      return setDescHist(!descHist);
    }}>{descHist ?
      "Show Ascending" :
      "Show Descending"}</button>
    <table>
      <thead>
      <tr>
        <th>Move {descHist ? (`🡫`) : (`🡡`)}</th>
        <th>Player</th>
        <th>Square</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {descHist ?
        history.map(getHistoryTable) :
        history
          .map(getHistoryTable)
          .reverse()}
      </tbody>
    </table>
  </div>);

  /**
   *
   * @param {Play}play
   * @param {number}_i
   * @param {Play[]}_arr
   * @returns {JSX.Element}
   */
  function getHistoryTable(play, _i, _arr) {
    const {move, player, square} = play;
    let actionText;
    if (move === 0) {
      actionText = 'Go to game start';
    } else {
      actionText = `Go to move #${move}`;
    }
    return (
      <tr key={move}>
        <td>{move}</td>
        <td>{player}</td>
        <td>{square}</td>
        <td>
          {move !== history.length ?
            <button onClick={() => jumpTo(move)}>{actionText}</button> :
            <button disabled>{`You are at Move ${move}`}</button>
          }
        </td>
      </tr>
    )
  }
}