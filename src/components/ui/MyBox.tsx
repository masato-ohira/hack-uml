import { ReactNode } from 'react'

type BoxProps = {
  myClass?: string
  children: ReactNode
}

// myClassの方が取り回し良さそう
// Tailwind CSS IntelliSenseに設定を追加すれば補完も効く

// roundedやpadding等で
// オプションを絞ったほうが何をするかは分かりやすい

export const MyBox = ({ myClass = '', children }: BoxProps) => {
  return (
    <div className={[`bg-white shadow-md rounded-md p-6`, myClass].join(' ')}>
      {children}
    </div>
  )
}
