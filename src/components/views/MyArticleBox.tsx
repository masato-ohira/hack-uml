import classNames from 'classnames'
import NextLink from 'next/link'
import dayjs from 'dayjs'
import localeJa from 'dayjs/locale/ja'

import { umlTitle } from '@/recoil/notes'
import { useNotesEntries, NotesEntryType } from '@/recoil/notes'

import { MyBox } from '@/components/ui'
import { MdPushPin, MdClose } from 'react-icons/md'

export const MyArticleBox = ({
  id,
  date,
  content,
  favorite,
}: NotesEntryType) => {
  const { removeEntry, toggleFavorite } = useNotesEntries()
  dayjs.locale(localeJa)

  const deleteFunc = () => {
    if (confirm('削除してよろしいですか？')) {
      removeEntry(id)
    }
  }

  return (
    <MyBox myClass='p-0 relative'>
      <button
        className={classNames(
          `block absolute top-2 text-2xl`,
          `left-2`,
          favorite ? `text-red-600` : `text-gray-400 hover:text-gray-900`,
        )}
        onClick={() => {
          toggleFavorite(id)
        }}
      >
        <MdPushPin />
      </button>
      <button
        className={classNames(
          `block absolute top-2 text-2xl`,
          `right-2`,
          `text-gray-400 hover:text-gray-900`,
        )}
        onClick={deleteFunc}
      >
        <MdClose />
      </button>
      <NextLink className='p-8 block' href={`/notes/${id}`}>
        <div className='text-center mb-2'>{umlTitle(content)}</div>
        <div className='text-center text-gray-400'>
          {dayjs(date).format('YYYY/MM/DD（dd） HH:mm')}
        </div>
      </NextLink>
    </MyBox>
  )
}
