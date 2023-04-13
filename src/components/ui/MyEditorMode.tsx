import classNames from 'classnames'
import { isString } from 'lodash-es'

import { useRouter } from 'next/router'
import { useEditor } from '@/recoil/editor'
import { BsLayoutSplit } from 'react-icons/bs'
import { MdRemoveRedEye, MdEdit } from 'react-icons/md'

export const MyEditorMode = () => {
  const router = useRouter()
  const { setMode, isActive } = useEditor()

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

  return (
    <>
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
    </>
  )
}
