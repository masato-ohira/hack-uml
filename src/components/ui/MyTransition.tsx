import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export const MyTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      {children}
    </motion.div>
  )
}
