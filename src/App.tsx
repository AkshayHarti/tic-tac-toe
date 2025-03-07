import './App.css'
import { Board } from './components/Board'

function App() {
    return (
        <header>
            {/* 
        1. Create a cell component with a value and an onClick handler
        2. Create a board component with 9 cells
        3. Create a game component with a board and a cell component
      */}
            <h1 className="text-3xl font-bold underline">Tic Tac Toe</h1>
            <br /> <br />
            <Board />
        </header>
    )
}

export default App
