import { MyHeader } from '@/components/ui'
import { Global, css } from '@emotion/react'
import { ReactNode } from 'react'

type LyoutProps = {
  children: ReactNode
}

export const LayoutDefault = ({ children }: LyoutProps) => {
  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #222;
          }
        `}
      />
      <MyHeader />
      <main className='pt-12'>{children}</main>
    </>
  )
}
