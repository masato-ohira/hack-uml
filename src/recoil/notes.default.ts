export const defaultUmls = [
  {
    id: 'e9c28ca8-900d-498d-b34d-6f54ba6d179d',
    date: '2023-04-03T00:00:00',
    favorite: false,
    content: `@startuml
title アクティビティ図の例
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
  {
    id: 'dcb887d9-51b5-40a1-b95b-0bdf92a2a316',
    date: '2023-04-02T11:46:00',
    favorite: false,
    content: `@startuml
title シーケンス図の例
ユーザー -> システム: データ要求
システム -> データベース: データ取得
データベース --> システム: データ返却
システム --> ユーザー: データ表示
@enduml
`,
  },
  {
    id: '2fc6d024-20de-4383-a17a-6d58d9ee5651',
    date: '2023-04-01T11:52:00',
    favorite: false,
    content: `@startuml
title クラス図の例
class Fruit {
  - 名称 : 文字列
  - 価格 : 整数
  + get_name() : 文字列
  + get_price() : 整数
}

class Apple {
  + get_color() : 文字列
}

class Orange {
  + get_size() : 文字列
}

Fruit <|-- Apple
Fruit <|-- Orange

@enduml`,
  },
]
