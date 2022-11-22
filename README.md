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
`/shops`

リクエスト

- クエリパラメータ

```
areaId   : 場所ID(int)(新橋:1、品川:2、横浜:3、...)
personNum: 人数(int)
```

- クエリパラメータ例

```
http://bizakaya.com/shops?areaId=1&personNum=10
```

レスポンス

- ボディ

```json
[
  {
    "id": "id",
    "name": "店名",
    "areaId": "場所ID",
    "url": "(食べログとかの)URL",
    "smallParty":"小規模利用実績",
    "mediumParty":"中規模利用実績",
    "largeParty":"大規模利用実績",
    "ratingAverage": "評価(平均)",
    "comments": [
      "comment1",
      "comment2",
      "...",
    ],
  },
  {
    "ここに2軒目のデータ"
  },
  {
    "ここに3軒目のデータ"
  }
]
```

### 2. 利用したお店の評価などを登録する

### 3. 良かったお店を新たに登録する

---

## DB 設計

### shop

| 項目           | 型      | 制約                     |
| -------------- | ------- | ------------------------ |
| id             | integer | not null, unique         |
| name           | string  | not null                 |
| area_id        | integer | ref: > area.id, not null |
| url            | string  |                          |
| small_party    | boolean | not null                 |
| medium_party   | boolean | not null                 |
| large_party    | boolean | not null                 |
| rating_average | float   |                          |

### area

| 項目 | 型      | 制約             |
| ---- | ------- | ---------------- |
| id   | integer | not null, unique |
| name | string  | not null         |

### review

| 項目          | 型      | 制約                           |
| ------------- | ------- | ------------------------------ |
| id            | integer | not null, unique               |
| restaurant_id | integer | ref: > restaurant.id, not null |
| rating        | integer |                                |
| comment       | string  |                                |
