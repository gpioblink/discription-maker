# 英文解析の仕様

## 概要

- 解析システムは主に2本立てで、「単語パーサ」と「文法パーサ」からなる

- 入力「srtまたはvtt字幕」、出力「フォーマットに則ったJSON」 今後は汎用化も検討したいがとりあえずこれで

### 単語パーサ

- 「英辞郎」から単語・群単語の意味データと品詞データを取得
  - データが200万語近くあるので、SQLで管理

### 文法パーサ

- 「Next Stage」の文法からマッチしたものを表示
  - 正規表現ちゃんとやりたい

## 出力フォーマット

```JSON
{
    startTime: "0.33",
    endTime: "3.22",
    text: "Hello! My name is Ai Ueo!!",
    details: [
        {
            startIdx: "0",
            endIdx: "4",
            text: "こんにちは"
        }
    ]
}
```

## 解析のサンプル

### "Lazy And Cowardly Princess"

`[KRENDITT] HONESTLY, I DON'T THINK YOU'RE`

`TAKING INTO ACCOUNT THE EFFECTS OF THEIR APOCALYPSE AT ALL.`

- `taking into account`が１語のときに取る形や、続く品詞の形がわかるようにする

### "Two Requests"

`If they understand and believe that all they have to do`

`to make you fall for them is follow my directions,`

- 「If + 現在形」の形であり、どんな用法かいう

`I'll be able to control their actions to some extent.`

- `to some extent`が、「ある程度」を示す群動詞だという

### "The Night And The Fury"

`That's right! You heard that - boss man!`

`Head honcho! The big... boss honcho guy.`

- `honcho`が日本語の「班長」から作られたことをいう