import { atom, useRecoilState } from 'recoil'
import { encode as umlEncode } from 'plantuml-encoder'
import { filter, keyBy, get } from 'lodash-es'

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

export const notesContent = atom<string>({
  key: 'notes/content',
  default: '',
})

export type NotesEntryType = {
  id: string
  date: string
  content: string
}

export const notesEntries = atom<NotesEntryType[]>({
  key: 'notes/entries',
  default: [
    {
      id: 'e9c28ca8-900d-498d-b34d-6f54ba6d179d',
      date: '2023-04-12',
      content: `@startuml
title plantUMLの例
start
:商品選択;
if (在庫がある) then (yes)
  :購入処理;
else (no)
  :在庫なしメッセージ表示;
endif
:支払い処理;
:商品配送;
stop
@enduml`,
    },
  ],
})

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

  const viewEntry = (key: string) => {
    return get(keyBy(entries, 'id'), key)
  }

  return {
    entries,
    addEntry,
    editEntry,
    viewEntry,
    removeEntry,
  }
}