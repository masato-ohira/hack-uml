import { atom, useRecoilState } from 'recoil'

export const editorMode = atom<'view' | 'split' | 'edit'>({
  key: 'editor/mode',
  default: 'split',
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
