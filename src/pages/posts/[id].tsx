import { MyEditor } from '@/components/ui'
import { Global, css } from '@emotion/react'
import { MyHeader } from '@/components/ui'
import { useContent } from '@/recoil/posts'

const PostDetail = () => {
  const { content, umlTitle, svgURL } = useContent()

  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #fff;
          }
        `}
      />
      <div>
        <MyHeader />
        <div className='grid grid-cols-2'>
          <div>
            <MyEditor />
          </div>
          <div
            className='p-4 overflow-y-auto'
            css={css`
              height: calc(100vh - ${4 * 12}px);
            `}
          >
            {content && (
              <>
                <p className='text-center'>{umlTitle()}</p>
                <img className='w-5/12 h-fit mx-auto' src={svgURL()} alt='' />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
