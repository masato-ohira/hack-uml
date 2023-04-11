import React from 'react'
import { MyButton, MyHStack } from '@/components/ui'
import { MdRemoveRedEye, MdEdit, MdAdd } from 'react-icons/md'
import { BsLayoutSplit } from 'react-icons/bs'

export const MyHeader = () => {
  const className: string = `bg-white border border-r-0 last:border border-gray-300 hover:bg-gray-100 text-gray-700 py-1.5 px-3 last:rounded-r-md first:rounded-l-md text-xl`

  return (
    <>
      <div className='flex flex-wrap justify-between shadow-sm items-center h-12 px-4 bg-gray-50'>
        <MyHStack spacing={6} center>
          <p>LOGO</p>
          <div className='flex'>
            <button className={className}>
              <MdRemoveRedEye />
            </button>
            <button className={className}>
              <BsLayoutSplit />
            </button>
            <button className={className}>
              <MdEdit />
            </button>
          </div>
        </MyHStack>
        <MyButton padding={'px-3 py-1'}>
          <MdAdd size={18} />
          <span>新規登録</span>
        </MyButton>
      </div>
    </>
  )
}
