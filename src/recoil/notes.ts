import { atom, useRecoilState } from 'recoil'
import { encode as umlEncode } from 'plantuml-encoder'
import { filter, keyBy, get, cloneDeep, chain, orderBy } from 'lodash-es'
import { recoilPersist } from 'recoil-persist'
import { defaultUmls } from './notes.default'

const { persistAtom } = recoilPersist({
  key: 'hack-uml-recoil',
  storage: typeof window === 'undefined' ? undefined : localStorage,
})

export const notesContent = atom<string>({
  key: 'notes/content',
  default: '',
})

export type NotesEntryType = {
  id: string
  date: string
  favorite: boolean
  content: string
}

export const notesEntries = atom<NotesEntryType[]>({
  key: 'notes/entries',
  default: defaultUmls,
  effects_UNSTABLE: [persistAtom],
})

export const umlTitle = (str: string) => {
  // 改行コードで文字列を分割し、各行を配列の要素にする
  const lines = str.split('\n')
  // タイトルを保持する変数を初期化する
  let title = ''
  // 各行についてループし、タイトル行を探す
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    // タイトル行を見つけた場合、行からタイトルを取り出してループを抜ける
    if (line.startsWith('title')) {
      title = line.substring(6).trim()
      break
    }
  }

  return title ? title : 'UNTITLED'
}

export const useNote = () => {
  const [content, setContent] = useRecoilState(notesContent)

  const svgURL = () => {
    const encoded = umlEncode(content)
    return `https://www.plantuml.com/plantuml/svg/${encoded}`
  }

  return {
    content,
    setContent,
    svgURL,
    umlTitle,
  }
}

export const useNotesEntries = () => {
  const [entries, setEntries] = useRecoilState(notesEntries)

  const addEntry = (data: NotesEntryType) => {
    setEntries([...entries, data])
  }

  const editEntry = (data: NotesEntryType) => {
    const filtered = filter(entries, (i) => i.id !== data.id)
    filtered.push(data)
    setEntries(filtered)
  }

  const removeEntry = (id: string) => {
    const filtered = filter(entries, (i) => i.id !== id)
    setEntries(filtered)
  }

  const viewEntry = (id: string) => {
    return get(keyBy(entries, 'id'), id)
  }

  const toggleFavorite = (id: string) => {
    const entry = cloneDeep(viewEntry(id))
    entry.favorite = !entry.favorite
    editEntry(entry)
  }

  const recentEntries = () => {
    try {
      let output = cloneDeep(entries)
      output = orderBy(output, 'date', 'desc')
      output = orderBy(output, 'favorite', 'desc')
      return output
    } catch (error) {
      return []
    }
  }

  return {
    entries,
    recentEntries,
    addEntry,
    editEntry,
    viewEntry,
    removeEntry,
    toggleFavorite,
  }
}
