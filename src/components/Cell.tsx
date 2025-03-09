type CellProps = {
  value: string
  onClick: () => void
}

export const DisabledCell = () => {
  return <span className='bg-gray-700 cursor-not-allowed'></span>
}

export const Cell = ({ value = '', onClick }: CellProps) => {
  return (
    <span
      onClick={onClick}
      className='min-w-[5rem] min-h-[5rem] border-2 text-align-center flex items-center justify-center cursor-pointer text-4xl'
    >
      {value}
    </span>
  )
}
