import dayjs from 'dayjs'
import { times } from 'lodash-es'
import { useMemo } from 'react'

import { useNotesEntries, NotesEntryType } from '@/recoil/notes'
import { MyContainer, MyGrid, MyTransition } from '@/components/ui'
import { MyArticleBox } from '@/components/views/MyArticleBox'

// import { useImages } from '@/recoil/images'

const Index = () => {
  const { entries, recentEntries } = useNotesEntries()

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
    <MyTransition>
      <MyContainer>
        <MyGrid gap={'gap-3 lg:gap-6'}>
          {recentEntries.map((i: NotesEntryType, key) => {
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
    </MyTransition>
  )
}

export default Index
