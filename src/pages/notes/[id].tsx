import { MyCenter, MyEditor, MyTransition } from '@/components/ui'
import { useNote, useNotesEntries } from '@/recoil/notes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { isString } from 'lodash-es'
import { sleep } from '@/utils'
import { MySpinner } from '@/components/ui/MySpinner'

const NotesID = () => {
  const { setContent } = useNote()
  const { viewEntry } = useNotesEntries()
  const [ready, setReady] = useState(false)

  const router = useRouter()

  const resetContent = async () => {
    if (router && isString(router.query.id)) {
      setReady(false)
      setContent('')
      await sleep(500)
      const entry = viewEntry(router.query.id)
      setContent(entry.content)
      setReady(true)
    }
  }

  useEffect(() => {
    console.log('useEffect')
    resetContent()
  }, [router.query.id])

  return (
    <MyTransition>
      {ready ? (
        <MyEditor />
      ) : (
        <MyCenter>
          <MySpinner />
        </MyCenter>
      )}
    </MyTransition>
  )
}

export default NotesID
