import { useState } from 'react'
import { Cell, DisabledCell } from './Cell'
import { calculateWinner } from '../helpers/calculateWinner'

const INITIAL_BOARD = Array(9).fill('')

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
    <main className='grid gap-2 grid-cols-3 grid-rows-3'>
      <section className='col-span-3 text-3xl font-bold text-center'>
        {winner ? `${winner} wins!` : `${currentPlayer}'s turn`}
      </section>
      {board.map((value, index) => {
        return winner && value === '' ? (
          <DisabledCell />
        ) : (
          <Cell key={index} value={value} onClick={() => handleClick(index)} />
        )
      })}
      <button
        className='col-span-3 text-3xl font-bold text-center'
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
