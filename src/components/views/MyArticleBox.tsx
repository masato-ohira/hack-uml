import React from 'react'
import { MdPushPin, MdClose } from 'react-icons/md'
import { MyBox } from '@/components/ui'
import NextLink from 'next/link'

type ArticleProps = {
  id: string
  date: string
  content: string
}

export const MyArticleBox = ({ id, date, content = '' }: ArticleProps) => {
  const className =
    'block absolute top-2 text-2xl text-gray-400 hover:text-gray-900'
  return (
    <MyBox myClass='p-0 relative'>
      <a className={`${className} left-2`}>
        <MdPushPin />
      </a>
      <a className={`${className} right-2`}>
        <MdClose />
      </a>
      <NextLink className='p-8 block' href={`/posts/${id}`}>
        <div>{id}</div>
        <div>{content}</div>
        <div>{date}</div>
      </NextLink>
    </MyBox>
  )
}
