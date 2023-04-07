import { ReactNode } from 'react'

export const MyBox = ({ children }: { children: ReactNode }) => {
  return <div className='bg-white shadow-md rounded-md p-6'>{children}</div>
}
