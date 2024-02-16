---
title: "すごい！Dropbox Paper"
date: 2020-07-10
---

この資料は JDD 社内 LT 会向けに書かれたものですが、同じフォーマットでそのままブログにできてすごいのでブログにもなっています。

---

Dropbox Paper とは？

- Dropbox 上にファイル保存される、共同作業可能なテキスト編集機能
- ブラウザ上でリッチテキスト画面で編集できる
- 擬似的な Markdown 互換で、 export 機能あり(現状ブラウザのみ 😭 )
- 無料

---

類似サービス

- Evernote
- Notion
- Google Drive
- HackMD
- Boost Note

---

比較優位点

- 何デバイスでも無料 (↔ Evernote)
- Markdown 互換 (↔ Google Drive)
- ディレクトリ管理可能 (↔ HackMD)
- Dropbox 上にファイルとして存在し、 export できる (↔ Boost Note)
- モバイルアプリが使いやすい

---

リッチエディタ機能

- バッククォートで `コードブロック`ができる(インライン/複数行)
- コードブロックのハイライトは言語を指定できる
- `:pray:` で絵文字が打てる
- `->` を → にできる
- Dropbox のファイルをそのまま添付できる
- スライドになる
- これらがモバイルアプリでも遜色なく使える

---

Notion との比較

- 上述するリッチエディタ機能をモバイルアプリで使える
- 無料の場合の制限がほとんどない
  - Dropbox の 2GB 制限のみ
- 共同編集に必要なアカウントが Dropbox アカウントである
  - 30 前後以上の人は Dropbox アカウント持ってる人多そう
  - 最近の若い人はどうなんだろう……
- 複数のノート形式がない
  - 機能不足はシンプルの裏返し
- お互い痒いところがあるものの、基本的には好みで良さそう

---

難点

- タグやメタ情報が付与できない
  - ディレクトリで表現しろということでもありそう
- Paper の一覧画面がない
  - ディレクトリ構造であることの裏返し
- ログインしていないとモバイルから見ることができない
  - Dropbox Paper を生でブログにしようと思ったが断念した

---

開発者向け

- API での export が html のみ
  - 通常のファイルとの互換のため？
  - API v1 では markdown export があったが、 v2 化で消えてしまった……
    - v1 は v1 で制限が厳しかった(100 回/day)
- 複数枚の画像を入れると export で 2 枚目以降が見えなくなる
  - 報告済。バグとのことだが修正されず……
- SDK の品質は概ね Good
  - 基本的にほぼ型がついている
  - File Export の meta 以下の型定義が any なのはファイル形式ごとに異なるからかも

---

総評

- ディレクトリ構造により、乱雑にならないテキスト管理が可能
- Markdown export により markdown としての取り回しが可能
- モバイルアプリからストレスない編集が可能
- 無料でほぼ無制限に使用可能
- 「Markdown 互換、共同編集可能、ディレクトリ管理」を求めるならこれ一択

---

応用: Dropbox Paper をブログとして使う

---

ブログ要件

- Dropbox アカウントでのログイン不要で見れる
- 独自ドメインを当てることができる
- 現実的な速度で見れる(毎回 Dropbox に問い合わせてパースしない)
- ビルド過程において HTML に脆弱性が混入しない

---

採用スタック

- Next.js (お前大丈夫なんか！？)
  - Static Site Generator を使い、ビルド時に解決する
  - Now を使えば SSR + キャッシュでデプロイ不要にできる、が、昨今の Vercel……
- Netlify
  - 独自ドメインを簡単に当てれる
  - GitHub 連携で簡単にデプロイできる
  - Dropbox 更新時に Webhook から簡単にビルド&デプロイできる
    - Dropbox 更新を hook する機能がないので手動
  - Tokyo Region がないので遠い……
    - GitHub Actions の手動デプロイがリリースされたので、 firebase hosting に移行したい

---

コード

[euxn23/next-dbxpaper-blog](https://github.com/euxn23/next-dbxpaper-blog)

---

やったこと

- Dropbox Paper の API を叩き、ドキュメントを取得する(生 HTML)
- HTML をサニタイズする(Interweave と JSDOM を使用)
- ベースのコンポーネントにデザインを当てる
- タイトルをパースしてメタ情報を抜き出す
- Dropbox Paper の HTML を解読して css を当てる

---

タイトルをパースしてメタ情報を抜き出す

- タイトルのフォーマットを決める
- そのフォーマットからメタデータを切り抜く正規表現を書く

```javascript
// [MMdd] cool title #hash #tags
const dateRegExp = /\[(._)]\s?/
const tagRegExp = /\s?#([^\s#]_)/g
```

---

Dropbox Paper の HTML を解読して css を当てる

![](https://sttic.diary.euxn.me/6q3lgcyj.png)

---

- 解読して css を書きました

https://github.com/euxn23/next-dbxpaper-blog/blob/master/src/pages/style.scss

---

めでたく完成

[blog.euxn.me](https://blog.euxn.me)

---

今後の展望

- dropbox パース部分をパッケージ化したい
  - css だけでもパッケージ化したい
- できれば dbxpaper-html-normalizer を作りたい……
  - 地獄が待ってそう
  - 先に markdown 対応してくれ
- Dropbox と連携するだけでブログにできるやつ作りたい
  - 誰でも使えるように deploy to netlify とかじゃない方法でやりたい
  - ドメイン……

---

まとめ

- Dropbox Paper は便利、アプリから使うなら一強
- Dropbox Paper を生でブログに使うのは難しい
- Dropbox Paper でブログにするのは大変
