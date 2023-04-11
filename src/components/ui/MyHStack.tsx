import { ReactNode } from 'react'
import classNames from 'classnames'

type StackProps = {
  gap?: string
  center?: boolean
  children: ReactNode
}

export const MyHStack = ({
  gap = 'gap-3',
  center = false,
  children,
}: StackProps) => {
  return (
    <div
      className={classNames([
        'flex',
        'flex-wrap',
        gap,
        center ? 'items-center' : '',
      ])}
    >
      {children}
    </div>
  )
}
