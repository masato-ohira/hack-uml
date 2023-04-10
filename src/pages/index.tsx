import { MyContainer, MyGrid } from '@/components/ui'
import { MyArticleBox } from '@/components/views/MyArticleBox'
import { css, Global } from '@emotion/react'
import dayjs from 'dayjs'
import { times } from 'lodash-es'
import { useMemo } from 'react'

// import { useImages } from '@/recoil/images'

const Index = () => {
  const posts = useMemo(() => {
    return times(16, (n) => {
      const date = dayjs().add(-1 * n, 'hour')
      return {
        id: `id-${n}`,
        date: `${date.format('YYYY-MM-DD HH:mm')}`,
        content: `${n}のコンテンツ`,
      }
    })
  }, [])

  return (
    <>
      <Global
        styles={css`
          html {
            background-color: #222;
          }
        `}
      />
      <MyContainer>
        <MyGrid gap={'gap-3 lg:gap-6'}>
          {posts.map((i, key) => {
            return (
              <MyArticleBox
                key={key}
                id={i.id}
                content={i.content}
                date={i.date}
              />
            )
          })}
        </MyGrid>
      </MyContainer>
    </>
  )
}

export default Index
