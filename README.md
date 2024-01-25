# Tic Tac Toe Game

This is a simple Tic Tac Toe game built with React.

## Project Structure

The project mainly consists of two components:

1. [GameInfo.jsx](src/components/GameInfo.jsx): This component displays the game history and allows the user to jump to a specific move in the game.

2. [Board.jsx](src/components/Board.jsx): This component handles the game logic and displays the game board.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the application

## Usage

The game starts with an empty board. Players take turns clicking on the board to place their mark (either 'X' or 'O'). The game ends when one player has three of their marks in a row (horizontally, vertically, or diagonally) or when all squares are filled, resulting in a draw.
This is React's official tutorial for building a Tic Tac Toe game: [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)

I elected to implement the suggested improvements to the game, which are listed below:
- Indicate the current move in the game's history
- Build the board with loops instead of a hardcoded grid 
- Add a toggle button that lets you sort the moves in either ascending or descending order
- When someone wins, highlight the three squares that caused the win
- When no one wins, display a message about the result being a draw

Additionally, I added a reset button, and implemented the history as a html table instead of a list.

