import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const editorMode = atom<'view' | 'split' | 'edit'>({
  key: 'editor/mode',
  default: 'split',
  effects_UNSTABLE: [persistAtom],
})

export const useEditor = () => {
  const [mode, setMode] = useRecoilState(editorMode)

  const isActive = (key: string) => {
    return key == mode
  }

  return {
    mode,
    setMode,
    isActive,
  }
}
