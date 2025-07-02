import logo from './logo.svg';
import './App.css';
import Board from './TicTacToeGame/Board.jsx';

function App() {
  return (
    <div className="App">
        <h1 style={{ textAlign: 'center'}}>Tic Tac Toe Game</h1>
        <Board/> 
    </div>
  );
}

export default App;
