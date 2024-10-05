import Player from'./components/Player.jsx'
import GameBoard from './components/Gameboard.jsx';
import { useState } from 'react';

function App() {
  const [activePlayer,setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X'?'O':'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Benz" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName="Ant" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSqure={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
