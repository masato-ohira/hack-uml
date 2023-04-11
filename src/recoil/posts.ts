import { atom, useRecoilState } from 'recoil'
import { encode as umlEncode } from 'plantuml-encoder'

export const postContent = atom({
  key: 'postContent',
  default: '',
})

export const useContent = () => {
  const [content, setContent] = useRecoilState(postContent)

  const svgURL = () => {
    const encoded = umlEncode(content)
    return `https://www.plantuml.com/plantuml/svg/${encoded}`
  }

  const umlTitle = () => {
    // 改行コードで文字列を分割し、各行を配列の要素にする
    const lines = content.split('\n')
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

    return title
  }

  return {
    content,
    setContent,
    svgURL,
    umlTitle,
  }
}
