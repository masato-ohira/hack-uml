import dynamic from 'next/dynamic'
import { useNote, useNotesEntries } from '@/recoil/notes'
import { css } from '@emotion/react'
import { useEditor } from '@/recoil/editor'
import { cloneDeep, isString } from 'lodash-es'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { MyEditorControl } from '@/components/ui'

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
  const { setContent, content, svgURL } = useNote()
  const { editEntry, viewEntry } = useNotesEntries()
  const { mode, zoom } = useEditor()
  const router = useRouter()

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
    const id = router.query.id

    if (isString(id)) {
      const entry = viewEntry(id)
      const date = dayjs().format('YYYY-MM-DDTHH:mm:ss')
      editEntry({
        id: entry.id,
        favorite: entry.favorite,
        date,
        content: text,
      })
    }
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
                style={{
                  // fontFamily: 'Noto Sans JP',
                  // fontFeatureSettings: `"palt" 1, "jp90"`,
                  letterSpacing: 0,
                }}
                wrapEnabled={true}
              />
            </div>
          </>
        )}

        {showPreview() && (
          <>
            <div
              className='p-4 overflow-y-auto bg-white relative'
              css={[computedHeight]}
            >
              {content && (
                <>
                  {/* <p className='text-center'>{umlTitle()}</p> */}
                  <img
                    className='h-fit mx-auto'
                    css={css`
                      transform: scale(${1 + 0.2 * zoom});
                      transform-origin: 50% 0 0;
                    `}
                    src={svgURL()}
                    alt=''
                  />
                </>
              )}
              <MyEditorControl />
            </div>
          </>
        )}
      </div>
    </>
  )
}
