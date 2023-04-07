import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant: string
}

const MyButton = (props: ButtonProps) => {
  let bgColor, textColor, hoverBgColor

  switch (props.variant) {
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
      className={`px-4 py-2 rounded-lg font-medium focus:outline-none ${bgColor} ${textColor} ${hoverBgColor}`}
    >
      {props.children}
    </button>
  )
}

export default MyButton
