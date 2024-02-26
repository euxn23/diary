---
title: "WindowsでCDからflac、mp3にエンコードする(foobar2000)"
date: 2016-03-13
---

SONY 製品が多いので Media Go で普段 CD を取り込んでいたが、HDD 増強したしホームシアター買いたいしで、flac にしてもいいんじゃないかと思い環境を探した。

foobar2000 は開発も続いているし、UI も今はわかりやすいので、今回はこれを使用した。

foobar2000 でのエンコードの場合、主に以下の設定が使用できるのが嬉しい。

- ファイル保存の際のディレクトリ構造やファイル名を変数を用いて指定可能
- エンコーダが詳細に設定可能
- プレイリスト表示の高度な filter、表示設定

## 導入手順

以下の手順で foobar2000 と flac と lame(mp3)をインストール

## foobar2000

[https://www.foobar2000.org/](https://www.foobar2000.org/)から最新版をダウンロードしインストール

最初に UI を聞かれるのでお好きなものを選択

### flac

[https://xiph.org/flac/download.html](https://xiph.org/flac/download.html)から download 項の Windows にあるリンクからダウンロード

解凍後に含まれる flac(exe ファイル)を foobar2000 のディレクトリ(標準であれば Program Files (x86)以下)に配置

### lame

[http://www.rarewares.org/mp3-lame-bundle.php](http://www.rarewares.org/mp3-lame-bundle.php)からダウンロード。64bit 環境の場合はそちらを選択

foobar2000 からは参照を指定するため、配置場所は自由。Program Files に配置するのが無難か

あと、Lame Ain't an Mp3 Encoder って名前がかっこいい

## foobar2000 設定

エンコードの手順を行う中で都度必要な設定を行う

1. CD を読み込んだ状態で File > Open audio CD を選択
2. CD ドライブが認識されるので、選択し Drive settings を選択
   Read offset correction は右の auto ボタンで自動設定
   Ripping security は standard を推奨。以上を設定したら OK をクリック
3. Rip ボタンをクリックし CD 詳細画面へ
   Information lookup の Source を freedb に変更し、Lookup ボタンで日本語の情報も取得できる
   Verify with AccurateRip にチェックを入れると次回も同じように CD 情報を取得する
   Process to the Converter Setup dialog をクリックし、エンコードの設定へ
4. エンコード設定を行う
   右側の Output format から flac を選択し back をクリック
   Destination をクリック。Output path から Specify folder に選択を入れればデフォルトの保存先を設定できる
   Output style and file name formatting からファイル名を設定する。右の...ボタンをクリックすることで複数種類の中から選択可能
   例えば `%album artist%/%album%/%track%. %title%` とすれば、 `アーティスト/アルバム名/02. 曲名` となる
   設定が完了したら back をクリック
5. Save ボタンでエンコード設定を保存する。名前には flac 等と指定する
6. mp3 のエンコード設定を作成するため、Output format
