import { ReactNode } from 'react'

type ButtonProps = {
  padding?: string
  variant?: string
  children: ReactNode
}

export const MyButton = ({
  variant = 'primary',
  padding = 'px-4 py-2',
  children,
}: ButtonProps) => {
  let bgColor, textColor, hoverBgColor

  switch (variant) {
    case 'primary':
      bgColor = 'bg-blue-500'
      textColor = 'text-white'
      hoverBgColor = 'hover:bg-blue-600'
      break
    case 'secondary':
      bgColor = 'bg-gray-200'
      textColor = 'text-gray-700'
      hoverBgColor = 'hover:bg-gray-300'
      break
    case 'outline':
      bgColor = 'bg-transparent'
      textColor = 'text-gray-700'
      hoverBgColor = 'hover:bg-gray-100'
      break
    default:
      bgColor = 'bg-blue-500'
      textColor = 'text-white'
      hoverBgColor = 'hover:bg-blue-600'
  }

  return (
    <button
      className={`flex flex-wrap items-center space-x-1 ${padding} rounded-lg font-medium focus:outline-none ${bgColor} ${textColor} ${hoverBgColor}`}
    >
      {children}
    </button>
  )
}
