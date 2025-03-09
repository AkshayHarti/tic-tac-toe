import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('should check for tic-tac-toe text', () => {
    // Arrange
    const text = 'Tic Tac Toe'
    // Act
    render(<App />)
    // Assert
    screen.getByText(text)
  })

  it('should check for initial board heading text', () => {
    // Arrange
    const text = "X's turn"
    // Act
    render(<App />)
    // Assert
    screen.getByText(text)
  })

  it('should check for board existence', () => {
    // Arrange
    // Act
    render(<App />)
    // Assert
    const board = screen.getByTestId('board')
    const boardCells = board.childNodes
    expect(boardCells).toHaveLength(9)
  })

  it('should check for reset button', () => {
    // Arrange
    const text = 'Reset'
    // Act
    render(<App />)
    // Assert
    screen.getByRole('button', { name: text })
  })

  it.only('should play the game and assert correctness', async () => {
    // Arrange
    /* 
        0 1 2
        3 4 5
        6 7 8
    */
    // Act
    render(<App />)

    // Assert
    const board = screen.getByTestId('board')
    const boardCells = board.children
    console.log(boardCells)
    // X's turn
    expect(screen.getByText("X's turn"))
    await userEvent.click(boardCells[0])
    expect(screen.getByText("O's turn"))
    await userEvent.click(boardCells[1])
    expect(screen.getByText("X's turn"))
    await userEvent.click(boardCells[3])
    expect(screen.getByText("O's turn"))
    await userEvent.click(boardCells[4])
    expect(screen.getByText("X's turn"))
    await userEvent.click(boardCells[6])
    expect(screen.getByText('X wins!'))
  })
})
