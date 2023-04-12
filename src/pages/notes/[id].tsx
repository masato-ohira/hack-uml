import { MyEditor } from '@/components/ui'
import { useNote, useNotesEntries } from '@/recoil/notes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isString } from 'lodash-es'

const NotesID = () => {
  const { setContent } = useNote()
  const { viewEntry } = useNotesEntries()
  const router = useRouter()
  useEffect(() => {
    if (router && router.isReady && isString(router.query.id)) {
      const entry = viewEntry(router.query.id)
      setContent(entry.content)
    }
  }, [router.isReady])

  return (
    <>
      <MyEditor />
    </>
  )
}

export default NotesID
