# gitpod-obniz-airtable-sample

## GitPod Launch URL

https://gitpod.io/#https://github.com/1ft-seabass/gitpod-obniz-airtable-sample

こちらで GitPod で本リポジトリを起動します。

## 準備

- AirTable
  - 自分の ApiKey を準備
  - 今回つなぎたい Base の Base ID を準備
  - Base の実際にデータを操作する Table 名を準備
- obniz
  - 自分の使う obniz の ID を準備

## 使い方

```
npm i
```

パッケージのインストールをします。 obniz と airtable の npm ライブラリがインストールされます。


```js
  // <AIRTABLE_API_KEY> に、自分の ApiKey に置き換える
  // <AIRTABLE_BASE_ID> に、今回つなぎたい Base の Base ID に置き換える
  const base = new Airtable({ apiKey: "<AIRTABLE_API_KEY>" }).base("<AIRTABLE_BASE_ID>");
  // <AIRTABLE_TABLE_NAME> に、操作する Table 名に置き換える
  const table = base("<AIRTABLE_TABLE_NAME>");

  // obniz の接続
  // <OBNIZ_ID> に、自分の使う obniz の ID を入力
  var obniz = new Obniz("<OBNIZ_ID>");
```

あたりに、

- `<AIRTABLE_API_KEY>`
    - AirTable の自分の ApiKey に置き換える
- `<AIRTABLE_BASE_ID>`
    - AirTable の今回つなぎたい Base の Base ID に置き換える
- `<AIRTABLE_TABLE_NAME>`
    -  操作する Table 名に置き換える。今回でいえば `Table 1` 。
- `<OBNIZ_ID>`
    - 自分の使う obniz の ID に置き換える

それぞれ、`app.js` に設定を行います。

## 動かしてみる

```
node app.js
```

で起動して、スイッチを押したり左右に操作してみましょう。