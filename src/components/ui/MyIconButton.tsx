import { ReactNode } from 'react'
import { FaSearch } from 'react-icons/fa'

type IconButtonProps = {
  shadow?: string
  rounded?: string
  bg?: string
  children: ReactNode
}

export const MyIconButton = ({
  shadow = '',
  rounded = 'rounded-md',
  bg = 'bg-gray-200 hover:bg-gray-300',
  children,
}: IconButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center w-10 h-10 p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ${bg} ${shadow} ${rounded}`}
    >
      {children}
    </button>
  )
}
