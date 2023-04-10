import { ReactNode } from 'react'

type GridProps = {
  cols?: string
  gap?: string
  children: ReactNode
}
export const MyGrid = ({
  children,
  cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-3 lg:gap-6',
}: GridProps) => {
  return <div className={['grid', cols, gap].join(' ')}>{children}</div>
}
