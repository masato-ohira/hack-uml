import { MyHStack } from '@/components/ui'
import { MdAdd, MdRemove } from 'react-icons/md'
import classNames from 'classnames'
import { useEditor } from '@/recoil/editor'

export const MyEditorControl = () => {
  const { zoom, setZoom } = useEditor()
  const buttonClass = classNames(
    `text-gray-700 text-xl`,
    `p-2`,
    `border border-r-0 last:border border-gray-400`,
    `last:rounded-r-md first:rounded-l-md`,
    `bg-white hover:bg-gray-200`,
    `cursor-pointer`,
  )
  const disabledClass = `pointer-events-none opacity-50 bg-gray-200`

  return (
    <div className='absolute right-3 bottom-3'>
      <MyHStack gap={'gap-0'}>
        <button
          className={classNames(buttonClass, zoom <= -5 ? disabledClass : '')}
          onClick={() => {
            setZoom(zoom - 1)
          }}
        >
          <MdRemove size={20} />
        </button>
        <button
          className={classNames(buttonClass, zoom >= 20 ? disabledClass : '')}
          onClick={() => {
            setZoom(zoom + 1)
          }}
        >
          <MdAdd size={20} />
        </button>
      </MyHStack>
    </div>
  )
}
