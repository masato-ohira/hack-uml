import { MyButton, MyHStack } from '@/components/ui'
import { MdRemoveRedEye, MdEdit, MdAdd } from 'react-icons/md'
import { BsLayoutSplit } from 'react-icons/bs'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useEditor } from '@/recoil/editor'
import classNames from 'classnames'

export const MyHeader = () => {
  const route = useRouter()
  const { mode, setMode, isActive } = useEditor()

  const setButtonClass = (key: string) => {
    const defaultClass = `bg-white border border-r-0 last:border border-gray-300 hover:bg-gray-100 text-gray-700 py-1.5 px-3 last:rounded-r-md first:rounded-l-md text-xl`
    const activeClass = `bg-gray-300 hover:bg-gray-300`

    if (isActive(key)) {
      return classNames(defaultClass, activeClass)
    } else {
      return defaultClass
    }
  }

  return (
    <>
      <div className='flex flex-wrap justify-between shadow-sm items-center h-12 px-4 bg-gray-50 fixed w-full l-0 t-0 z-50'>
        <MyHStack gap={'gap-6'} center>
          <NextLink href={'/'}>
            <h1 className={'font-bold text-lg'}>HackUML</h1>
          </NextLink>
          {route.query.id && (
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
        <MyButton padding={'px-3 py-1'}>
          <MdAdd size={18} />
          <span>新規登録</span>
        </MyButton>
      </div>
    </>
  )
}
