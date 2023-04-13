import NextLink from 'next/link'

import { MdFactory } from 'react-icons/md'
import { MyEditorMode, MyHStack } from '@/components/ui'
import { MyAddButton } from '@/components/views/MyAddButton'

export const MyHeader = () => {
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
          <MyEditorMode />
        </MyHStack>

        <MyAddButton />
      </div>
    </>
  )
}
