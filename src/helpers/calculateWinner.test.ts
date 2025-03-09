import { calculateWinner } from './calculateWinner'

describe('calculateWinner', () => {
  it('should return X as the winner for a horizontal line', () => {
    const board = ['X', 'X', 'X', '', '', '', '', '', ''] as Array<
      'X' | 'O' | ''
    >
    expect(calculateWinner(board)).toBe('X')
  })

  it('should return O as the winner for a vertical line', () => {
    const board = ['O', '', '', 'O', '', '', 'O', '', ''] as Array<
      'X' | 'O' | ''
    >
    expect(calculateWinner(board)).toBe('O')
  })

  it('should return X as the winner for a diagonal line', () => {
    const board = ['X', '', '', '', 'X', '', '', '', 'X'] as Array<
      'X' | 'O' | ''
    >
    expect(calculateWinner(board)).toBe('X')
  })

  it('should return null if there is no winner', () => {
    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'] as Array<
      'X' | 'O' | ''
    >
    expect(calculateWinner(board)).toBeNull()
  })

  it('should return null for an empty board', () => {
    const board = ['', '', '', '', '', '', '', '', ''] as Array<'X' | 'O' | ''>
    expect(calculateWinner(board)).toBeNull()
  })
})
