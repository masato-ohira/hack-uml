import dayjs from 'dayjs'
import { v4 as uuidV4 } from 'uuid'
import { isString } from 'lodash-es'

import { useRouter } from 'next/router'
import { useNotesEntries } from '@/recoil/notes'
import { MdAdd } from 'react-icons/md'
import classNames from 'classnames'

export const MyAddButton = () => {
  const router = useRouter()
  const { addEntry } = useNotesEntries()

  const addNewEntry = async () => {
    const noteID = uuidV4()
    router.push(`/notes/${noteID}`)
    addEntry({
      id: noteID,
      favorite: false,
      date: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
      content: `@startuml
title タイトルを入力してください
start

stop
@enduml
      `,
    })
  }

  return (
    <>
      {!isString(router.query.id) && (
        <button
          className={classNames(
            `flex flex-wrap items-center rounded-lg`,
            `space-x-1 px-3 py-1`,
            `focus:outline-none`,
            `text-white font-medium`,
            `bg-blue-500 hover:bg-blue-600`,
          )}
          onClick={() => {
            addNewEntry()
          }}
        >
          <MdAdd size={18} />
          <span>新規登録</span>
        </button>
      )}
    </>
  )
}
