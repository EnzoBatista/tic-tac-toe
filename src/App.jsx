import { useState } from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [activePlayer, setActivePlayer] = useState(false);
  const activeSymbol = activePlayer ? 'X' : 'O';

  const toggleActivePlayer = () => setActivePlayer((prevState) => !prevState);

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name={'Player 1'} symbol={'X'} isActive={!!(activeSymbol === 'X')} />
          <Player name={'Player 2'} symbol={'O'} isActive={!!(activeSymbol === 'O')} />
        </ol>
        {/* <PLAYERS> */}
        {/* GAME BOARD */}
        <GameBoard
          activeSymbol={activeSymbol}
          onToggleActivePlayer={toggleActivePlayer}
        />
      </div>
      {/* LOG */}
    </main>
  );
}

export default App;
