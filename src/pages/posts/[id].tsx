import { MyEditor } from '@/components/ui'
import { Global, css } from '@emotion/react'
import { MyHeader } from '@/components/ui'
import { useContent } from '@/recoil/posts'

const PostDetail = () => {
  const { content, setContent } = useContent()
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
          <div className='p-4'>{content}</div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
