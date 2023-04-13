import { ReactNode } from 'react'

export const MyCenter = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex justify-center items-center h-screen'>{children}</div>
  )
}
