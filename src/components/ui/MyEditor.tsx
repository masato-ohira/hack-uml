import dynamic from 'next/dynamic'
// import { css } from '@emotion/react'
import { useContent } from '@/recoil/posts'

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace')
    await import('ace-builds/src-noconflict/mode-python')
    await import('ace-builds/src-noconflict/theme-monokai')
    await import('ace-builds/src-noconflict/ext-language_tools')
    return ace
  },
  { ssr: false },
)

export const MyEditor = () => {
  const { setContent } = useContent()

  const onChange = (text: string) => {
    setContent(text)
  }

  return (
    <AceEditor
      mode='python'
      theme='monokai'
      onChange={onChange}
      name='UNIQUE_ID_OF_DIV'
      editorProps={{ $blockScrolling: true }}
      height={`calc(100vh - ${4 * 12}px)`}
      width={'100%'}
      fontSize={16}
      wrapEnabled={true}
    />
  )
}
