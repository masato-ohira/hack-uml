import { ReactNode, Children } from 'react'

type StackProps = {
  direction: string
  spacing: number
  children: ReactNode
}

const ChakraUIStack = ({ direction, spacing = 3, children }: StackProps) => {
  const flexDirection =
    direction === 'row' ? 'flex-row' : direction === 'column' ? 'flex-col' : ''

  return (
    <div className={`flex ${flexDirection}`}>
      {Children.map(children, (child, index) => {
        if (index === 0) {
          return child
        } else {
          return (
            <>
              <div className={`mx-${spacing}`}></div>
              {child}
            </>
          )
        }
      })}
    </div>
  )
}

export default ChakraUIStack
