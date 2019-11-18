# kintone_thred_bg_color

# できること
* スレッドの各コメントの背景色を付けることで、見やすくします。
* コメントの親子で背景色を変えているので、会話の先頭が見やすくなっています。

![image](https://user-images.githubusercontent.com/8399688/69028318-f7b9e400-0a14-11ea-9e17-d300cf9063e9.png)
![2019-11-18 15 35 24](https://user-images.githubusercontent.com/8399688/69029856-6ef17700-0a19-11ea-8caa-5177baccf0d1.png)




<img src="https://user-images.githubusercontent.com/8399688/69028318-f7b9e400-0a14-11ea-9e17-d300cf9063e9.png" width="200px">


# 設定方法
1. 「theread_bg_color_p.js」「theread_bg_color_m.js」をダウンロードする
2. kintoneシステム管理＞カスタマイズ＞JavaScript / CSSでカスタマイズ を開く
3. 『PC用のJavaScriptファイル』に「theread_bg_color_p.js」を、『スマートフォン用のJavaScriptファイル』に「theread_bg_color_m.js」をそれぞれセットし「保存」を押下する


# 背景色のカスタマイズ
```
const parent_color = '#E0F8EC';
const child_color = '#EFFBF5';
```
この部分を変更することで、背景色を変更することができます。


# 注意事項
* kintoneの仕様の変更に伴い、正常に動作しなくなることがあります。
