import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'hack-uml-recoil',
  storage: typeof window === 'undefined' ? undefined : sessionStorage,
})

export const editorMode = atom<'view' | 'split' | 'edit'>({
  key: 'editor/mode',
  default: 'split',
  effects_UNSTABLE: [persistAtom],
})

export const editorZoom = atom<number>({
  key: 'editor/zoom',
  default: 1,
  effects_UNSTABLE: [persistAtom],
})

export const useEditor = () => {
  const [mode, setMode] = useRecoilState(editorMode)
  const [zoom, setZoom] = useRecoilState(editorZoom)

  const isActive = (key: string) => {
    return key == mode
  }

  return {
    mode,
    zoom,
    setMode,
    setZoom,
    isActive,
  }
}
