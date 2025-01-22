import React, { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({onToggleActivePlayer, activeSymbol}) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const isEmpty = (string) => string === '';

  const getCoordinates = (element) => ({
    col: element.getAttribute('col'),
    row: element.getAttribute('row'),
  });

  const gameValidate = () => {
    console.log("VALIDAR!!!", activeSymbol)
    
    // Row validation
    // Iterates gameBoard which has the 3 rows using .some, so for every row we iterates and check if
    // .every symbol is equal to the first iteration on row[0]
    const hasWiningRow = gameBoard.some((row) =>
      row.every((symbol) => symbol === row[0] && symbol !== null)
    );

    // Column validation
    // Iterates gameBoard first row using gameBoard[0].some so we are going to have the index of iteration
    // available. Then iterates gameBoard with .every so for each row we'll compare if first item of every row
    // row[colIndex]  -being colIndex the index we got from gameBoard[0].some iteration- matches the first symbol from
    // first gameBoard row gameBoard[0][colIndex]

    const hasWiningColumn = gameBoard[0].some((_, colIndex) =>
      gameBoard.every((row) => row[colIndex] === gameBoard[0][colIndex] && row[colIndex] !== null)
    );

    // Diagonal validation
    const hasWiningDiagonal = gameBoard.every((row, index) => row[index] === gameBoard[0][0] && row[index] !== null)

    console.log('hasWiningRow', hasWiningRow);
    console.log('hasWiningColumn', hasWiningColumn);
    console.log('hasWiningDiagonal', hasWiningDiagonal);

    if(hasWiningColumn || hasWiningRow || hasWiningDiagonal) {
        setGameBoard(initialGameBoard);
        alert(`${activeSymbol} WINS`);
    }
  };

  const nextTurn = (clicked) => {
    const coordinates = getCoordinates(clicked);
    console.log('clicked: ', coordinates);

    const gameBoardCopy = [...gameBoard];
    console.log('gameBoardCopy: ', gameBoardCopy);

    gameBoardCopy[coordinates.row].splice(coordinates.col, 1, activeSymbol);
    console.log('changedARRAY: ', gameBoardCopy);

    setGameBoard(gameBoardCopy);
    onToggleActivePlayer();
    gameValidate();
  }

  const handleSelectSquare = (event) => {
    const clicked = event.target;
    const symbol = clicked.innerHTML;

    if (!isEmpty(symbol)) return;
    nextTurn(clicked);
  };

  return (
    <ol id='game-board'>
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button col={colIndex} row={index} onClick={handleSelectSquare}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
