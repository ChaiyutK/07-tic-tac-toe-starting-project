import Player from'./components/Player.jsx'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Benz" symbol="X"/>
          <Player initialName="Ant" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
