---
title: "MVNO SIMのテザリングロックをMac/homebrewで解除する"
date: 2016-05-01
---

SIM ロック解除や、docomo 系の MVNO を使う場合、通信はできてもテザリングができないという場合があります。

端末を有線接続し、本体を操作することで、root 権限不要でテザリング可能に設定を変更することができます。

(変更の可否は端末によります。今回は Xperia Z3 Compact で行いました。)

Windows の場合は Android SDK の設定手順が多く大変ですが、Mac の場合 brew で環境が簡単に整います。

homebrew が入っていない場合はこちら

<a href="http://brew.sh/index_ja.html">Homebrew — OS X 用パッケージマネージャー</a>

以下、実行に必要なコマンド

---

1. `brew install android-sdk` android-sdk のインストール
2. `android -v` android-sdk がインストールされたことを確認
3. `android update sdk --no-ui --filter 'platform-tools'` android adb のインストール
4. `adb -v` android-adb がインストールされたことを確認
5. スマートフォンを USB デバッグモードにして Mac と接続
6. `adb shell` 接続された端末にコマンドラインからログイン。ユーザ名が端末名になっていることを確認
7. `settings put global tether_dun_required 0` 端末内でテザリングを有効化
8. `exit`で端末からログアウトし終了

---

Mac では以上のコマンドで操作が完了します。

その他細かい点については、他に詳しいブログがあるので、そちらをご参照ください。

Android 標準で用意されているコマンドの実行ですが、ご利用は自己責任でお願いいたします。
