import { atom, useRecoilState } from 'recoil'

export const postContent = atom({
  key: 'postContent',
  default: '',
})

export const useContent = () => {
  const [content, setContent] = useRecoilState(postContent)
  return {
    content,
    setContent,
  }
}
