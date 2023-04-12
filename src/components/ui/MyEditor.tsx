import dynamic from 'next/dynamic'
import { useNote } from '@/recoil/notes'
import { css } from '@emotion/react'
import { useEditor } from '@/recoil/editor'
import { cloneDeep } from 'lodash-es'

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
  const { setContent, content, umlTitle, svgURL } = useNote()
  const { mode } = useEditor()
  const showEditor = () => {
    return mode == 'split' || mode == 'edit'
  }
  const showPreview = () => {
    return mode == 'split' || mode == 'view'
  }

  const gridClassName = () => {
    return mode == 'split' ? 'grid grid-cols-2' : 'grid grid-cols-1'
  }

  const computedHeight = css`
    height: calc(100vh - ${12 * 4}px);
  `

  const onChange = (text: string) => {
    setContent(text)
  }

  return (
    <>
      <div className={gridClassName()}>
        {showEditor() && (
          <>
            <div css={computedHeight}>
              <AceEditor
                mode='python'
                theme='monokai'
                onChange={onChange}
                name='UNIQUE_ID_OF_DIV'
                editorProps={{ $blockScrolling: true }}
                height={'100%'}
                width={'100%'}
                fontSize={16}
                defaultValue={cloneDeep(content)}
                wrapEnabled={true}
              />
            </div>
          </>
        )}

        {showPreview() && (
          <>
            <div className='p-4 overflow-y-auto bg-white' css={computedHeight}>
              {content && (
                <>
                  {/* <p className='text-center'>{umlTitle()}</p> */}
                  <img className='h-fit mx-auto' src={svgURL()} alt='' />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}
