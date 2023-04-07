import { ReactNode } from 'react'

export const MyContainer = ({ children }: { children: ReactNode }) => {
  return <div className='container mx-auto py-6 px-3 lg:px-0'>{children}</div>
}
