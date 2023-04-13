import { MyHeader } from '@/components/ui'
import { Global, css } from '@emotion/react'
import { ReactNode } from 'react'
// import { Noto_Sans_JP } from 'next/font/google'

// const notoSans = Noto_Sans_JP({
//   weight: ['400', '500', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
// })

type LyoutProps = {
  children: ReactNode
}

export const LayoutDefault = ({ children }: LyoutProps) => {
  return (
    <div className='font-sans'>
      <Global
        styles={css`
          html {
            background-color: #222;
          }
        `}
      />
      <MyHeader />
      <main className='pt-12'>{children}</main>
    </div>
  )
}
