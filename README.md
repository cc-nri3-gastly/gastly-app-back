# gastly-app-back

イベント開催に伴う各種連絡を自動で行ってくれるサービスです。

## API 概要

| No. | 種別 | エンドポイント | 機能概要                         |
| --- | ---- | -------------- | -------------------------------- |
| 1   | GET  | /shops         | 条件を指定してお店候補を取得する |
| 2   | POST |                | 利用したお店の評価などを登録する |
| 3   | POST |                | 良かったお店を新たに登録する     |

---

## API 各機能説明

### 1. 条件を指定してお店候補を取得する

エンドポイント：
POST `/shops`

リクエスト

-   クエリパラメータ

```
なし
```

-   リクエスト body

```
{
  areaId     : 場所ID(int)(新橋:1、品川:2、横浜:3、...)
  purposeId  : 目的ID(int)(歓迎会:1、送迎会:2、...)
  personNum: 人数(int)
  participantsId:[ id01,id02,... ](参加者ID)
}

```

-   クエリパラメータ例

```
http://bizakaya.com/shops
```

レスポンス

-   ボディ

```json
[
  {
    "shopId": "お店id",
    "shopName": "店名",
    "areaId": "場所ID",
    "url": "(食べログとかの)URL",
    "ratingAverage": "評価(平均)",
    "comments": [
      "comment1",
      "comment2",
      "...",
    ],
    "matchedTags":[
      "リクエストにマッチしたタグ情報",
      "例）喫煙",
      "..."
    ]
  },
  {
    "ここに2軒目のデータ"
  },
  {
    "ここに3軒目のデータ"
  }
]
```

### 2. 参加者の趣味・嗜好を登録する

エンドポイント：
POST `/users`

リクエスト

-   クエリパラメータ

```
なし
```

-   リクエスト body

```
{
  name     : 氏名（文字列）
  tags  : ['文字列の配列',...]
  allergy: アレルギー（文字列）
}

```

-   クエリパラメータ例

```
http://bizakaya.com/users
```

レスポンス

-   ボディ

```
なし
```

### 3. 利用したお店の評価などを登録する

### 4. 良かったお店を新たに登録する

---

## DB 設計

### shop

| 項目         | 型      | 制約                     | 備考        |
| ------------ | ------- | ------------------------ | ----------- |
| id           | integer | not null, unique         |             |
| name         | string  | not null                 |             |
| area_id      | integer | ref: > area.id, not null |             |
| url          | string  |                          |             |
| small_party  | boolean | not null                 | 人数：0~10  |
| medium_party | boolean | not null                 | 人数：10~20 |
| large_party  | boolean | not null                 | 人数：20~   |
| tags         | text[]  |                          |             |

### area

| 項目 | 型      | 制約             |
| ---- | ------- | ---------------- |
| id   | integer | not null, unique |
| name | string  | not null         |

### review

| 項目    | 型      | 制約                     |
| ------- | ------- | ------------------------ |
| id      | integer | not null, unique         |
| shop_id | integer | ref: > shop.id, not null |
| rating  | integer |                          |
| comment | string  |                          |

### participant

| 項目 | 型      | 制約             |
| ---- | ------- | ---------------- |
| id   | integer | not null, unique |
| name | string  | not null         |
| tags | text[]  |                  |
| allergy | string  |                  |

