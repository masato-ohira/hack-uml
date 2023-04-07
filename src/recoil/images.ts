import { atom, useRecoilValue } from 'recoil'
import imagesJson from './images.json'

export const imagesState = atom({
  key: 'imagesState',
  default: imagesJson,
})

export const useImages = () => {
  const images = useRecoilValue(imagesState)
  return {
    images,
  }
}
