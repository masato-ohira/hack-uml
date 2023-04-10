import { ReactNode } from 'react'

type ContainerProps = {
  m?: string
  p?: string
  children: ReactNode
}

export const MyContainer = ({
  m = 'mx-auto',
  p = 'py-6 px-3 lg:px-0`',
  children,
}: ContainerProps) => {
  return <div className={`container ${m} ${p}`}>{children}</div>
}
