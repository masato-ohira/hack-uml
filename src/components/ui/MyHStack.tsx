import { ReactNode } from 'react'

type StackProps = {
  spacing?: number | string
  center?: boolean
  children: ReactNode
}

export const MyHStack = ({
  spacing = 3,
  center = false,
  children,
}: StackProps) => {
  return (
    <div
      className={[
        `flex flex-wrap`,
        `space-x-${spacing}`,
        center ? 'items-center' : '',
      ].join(' ')}
    >
      {children}
    </div>
  )
}
