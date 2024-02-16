---
title: "自作PCのパーツを変更しながらにWindows10をクリーンインストールする"
date: 2016-07-18
---

Windows10 をアップグレード無しに直接クリーンインストール可能な話を見るが、ほとんどがメーカ製の PC の話が殆どである。

Windows10 のライセンスが自作 PC とあわないという話を見ましたが、問題なかったので手順を記述する。

**私の環境では成功したという例です。**自己責任にてお願いします。

## 手順

- パーツを新しいものに交換する。(GPU はドライバが必要なので後から取り付ける。)
- 起動ディスクに Windows7 をインストールし、ライセンス認証を行う。(自分はクリーンインストールした。)
- この時点でライセンス認証ができない場合、MS に問い合わせる。
- [https://www.microsoft.com/ja-jp/software-download/windows10](https://www.microsoft.com/ja-jp/software-download/windows10)からメディア作成ツールをダウンロードし、インストールメディアを作成する。
- PC をシャットダウンし、インストールメディアからブートしてインストールを開始する。問題なければ、インストール先のディスクをフォーマットする。
- インストール後に Windows7 のライセンスキーでオンライン認証を行う。
- システム情報(Windows + Pause)からライセンスが認証されていることを確認する。
- GPU のドライバをダウンロードしておき、GPU を取り付けて再度起動し、インストールする。(GeForce は[http://www.nvidia.co.jp/download/driverResults.aspx/87933/jp](http://www.nvidia.co.jp/download/driverResults.aspx/87933/jp)から DL 可能。)
- すべてのパーツを付けた状態でライセンスが認証されていることを確認する。

## 補足

- パーツ構成の軸はマザーボードのようである。
- パーツの構成とライセンスを関連付けて記録するとのことで、一旦新しい構成で Win7 を認証した。

## 参考

- [Windows 10 をアップグレード抜きで無償クリーンインストール。 | PC ユーザーメモ](http://it.english-and-paso.com/soft/windows10-cleaninstall/)
- [http://kiritsume.com/how-to-clean-install-free-upgraded-windows10/](http://kiritsume.com/how-to-clean-install-free-upgraded-windows10/)
- [Windows10 のライセンス認証が厳しすぎるので Windows7/8.1 からの移行は要注意](http://mirunews.jp/9494)
- [無料アップグレードした Windows10 の パーツ変更、再認証、ライセンスの扱いについて](http://freesoft.tvbok.com/win10/installation/licence_of_free_upgrade.html)
