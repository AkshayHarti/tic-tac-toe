import { useState } from 'react'
import { Cell, DisabledCell } from './Cell'

const INITIAL_BOARD = Array(9).fill('')

const calculateWinner = (board: Array<'X' | 'O' | ''>) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }

    return null
}

export const Board = () => {
    const [board, setBoard] = useState<Array<'X' | 'O' | ''>>(INITIAL_BOARD)
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
    const [winner, setWinner] = useState<'X' | 'O' | null>(null)

    const handleClick = (cellIndex: number) => {
        const newBoard = [...board]
        newBoard[cellIndex] = currentPlayer
        setBoard(newBoard)
        const winner = calculateWinner(newBoard)
        if (winner) {
            setWinner(winner)
        }
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    return (
        <main className="grid gap-2 grid-cols-3 grid-rows-3">
            <section className="col-span-3 text-3xl font-bold text-center">
                {winner ? `${winner} wins!` : `${currentPlayer}'s turn`}
            </section>
            {board.map((value, index) => {
                return winner && value === '' ? (
                    <DisabledCell />
                ) : (
                    <Cell
                        key={index}
                        value={value}
                        onClick={() => handleClick(index)}
                    />
                )
            })}
            <button
                className="col-span-3 text-3xl font-bold text-center"
                onClick={() => {
                    setBoard(INITIAL_BOARD)
                    setCurrentPlayer('X')
                    setWinner(null)
                }}
            >
                Reset
            </button>
        </main>
    )
}
