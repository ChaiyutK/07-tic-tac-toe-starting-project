import Player from'./components/Player.jsx'
import GameBoard from './components/Gameboard.jsx';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Benz" symbol="X"/>
          <Player initialName="Ant" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
