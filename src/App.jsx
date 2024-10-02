import Player from'./components/Player.jsx'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Benz" symbol="X"/>
          <Player name="Ant" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
