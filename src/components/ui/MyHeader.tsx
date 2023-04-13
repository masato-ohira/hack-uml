import { MyButton, MyHStack } from '@/components/ui'
import { MdRemoveRedEye, MdEdit, MdAdd, MdFactory } from 'react-icons/md'
import { BsLayoutSplit } from 'react-icons/bs'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useEditor } from '@/recoil/editor'
import { useNotesEntries } from '@/recoil/notes'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { v4 as uuidV4 } from 'uuid'
import { isString } from 'lodash-es'

export const MyHeader = () => {
  const router = useRouter()
  const { mode, setMode, isActive } = useEditor()
  const { addEntry } = useNotesEntries()

  const setButtonClass = (key: string) => {
    const defaultClass = `border border-r-0 last:border border-gray-300 text-gray-700 py-1.5 px-3 last:rounded-r-md first:rounded-l-md text-xl`
    const bgClass = `bg-white hover:bg-gray-100`
    const bgClassActive = `bg-gray-300 hover:bg-gray-300`

    if (isActive(key)) {
      return classNames(defaultClass, bgClassActive)
    } else {
      return classNames(defaultClass, bgClass)
    }
  }

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
      <div className='flex flex-wrap justify-between shadow-sm items-center h-12 px-4 bg-gray-50 fixed w-full l-0 t-0 z-50'>
        <MyHStack gap={'gap-6'} center>
          <NextLink href={'/'}>
            <MyHStack center gap='gap-2'>
              <MdFactory size={24} className='-mt-1' />
              <h1 className={'font-bold text-lg'}>HackUML</h1>
            </MyHStack>
          </NextLink>
          {isString(router.query.id) && (
            <>
              <div className='flex'>
                <button
                  className={setButtonClass('view')}
                  onClick={() => {
                    setMode('view')
                  }}
                >
                  <MdRemoveRedEye />
                </button>
                <button
                  className={setButtonClass('split')}
                  onClick={() => {
                    setMode('split')
                  }}
                >
                  <BsLayoutSplit />
                </button>
                <button
                  className={setButtonClass('edit')}
                  onClick={() => {
                    setMode('edit')
                  }}
                >
                  <MdEdit />
                </button>
              </div>
            </>
          )}
        </MyHStack>

        {!isString(router.query.id) && (
          <a
            className='block'
            onClick={() => {
              addNewEntry()
            }}
          >
            <MyButton padding={'px-3 py-1'}>
              <MdAdd size={18} />
              <span>新規登録</span>
            </MyButton>
          </a>
        )}
      </div>
    </>
  )
}
