---
title: "Switch のアルバムの日付を変更する"
date: 2020-06-01
---

switch のキャプチャは本体時刻の日付で保存され、その日付順で並んでいる。
日付を変更した状態でキャプチャを作成すると、本来の日付と異なる順番で並んでしまうため、元に戻そうと microSD のファイルを PC で開き、ファイル名が日付になっているのでそれを変更、とすると、パリティチェックのような機構が働いているのか、ファイルが破損扱いになり(PC からは通常のファイルとして機能するため実際には破損していない)閲覧できない。

そこで、アルバムの「テキスト入力」機能を使い、空白を入力してファイルを保存することで、ほぼ同一の(ファイル容量がわずかながら減少しているので、再度 jpeg 圧縮されているものと思われる)ファイルを現在の日付で作成できることを利用し、正しい時刻に本体時刻を変更してから上記の操作を行うことで、正しい日付に戻すことができる。
動画の場合は切り抜き機能で同等のことができる。
