import React from 'react'
import NextLink from 'next/link'

import { umlTitle } from '@/recoil/notes'
import { MdPushPin, MdClose } from 'react-icons/md'
import { MyBox } from '@/components/ui'
import classNames from 'classnames'

import { useNotesEntries, NotesEntryType } from '@/recoil/notes'

export const MyArticleBox = ({
  id,
  date,
  content,
  favorite,
}: NotesEntryType) => {
  const { removeEntry, toggleFavorite } = useNotesEntries()

  const deleteFunc = () => {
    if (confirm('削除してよろしいですか？')) {
      removeEntry(id)
    }
  }

  return (
    <MyBox myClass='p-0 relative'>
      <a
        className={classNames(
          `block absolute top-2 text-2xl`,
          `left-2`,
          `cursor-pointer`,
          favorite ? `text-red-600` : `text-gray-400 hover:text-gray-900`,
        )}
        onClick={() => {
          toggleFavorite(id)
        }}
      >
        <MdPushPin />
      </a>
      <a
        className={classNames(
          `block absolute top-2 text-2xl`,
          `right-2`,
          `cursor-pointer`,
          `text-gray-400 hover:text-gray-900`,
        )}
        onClick={deleteFunc}
      >
        <MdClose />
      </a>
      <NextLink className='p-8 block' href={`/notes/${id}`}>
        <div>{umlTitle(content)}</div>
        <div>{date}</div>
      </NextLink>
    </MyBox>
  )
}
