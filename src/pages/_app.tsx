import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { LayoutDefault } from '@/layouts/default'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </RecoilRoot>
  )
}
