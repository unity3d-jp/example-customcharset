### 概要

Unity 3.5 から `TrueTypeFontImporter` に追加された `customCharacters` プロパティの使用例です。

このプロパティは、TrueType フォントをテクスチャ化する際に、限定された文字セットだけを採用するというものです。これを使用することにより、フォントに含まれる全文字をテクスチャ化するのではなく、ゲーム中で使用しうる文字だけをテクスチャ化することができます。

Unity で静的な日本語フォントを使用する場合、すべての文字を1枚のテクスチャに収める事が難しく、問題になりがちです。もしゲームの仕様として文字セットを限定することが可能ならば、この機能によって問題が解決されるかもしれません。

### サンプルの内容

百人一首を順に表示します。

![Screenshot on iPhone](https://github.com/downloads/unity3d-jp/example-customcharset/screenshot-iphone.png)

フォントを百人一首で使用されている文字だけに限定することにより、高品質な文字表示を実現しています。

![Character set](https://github.com/downloads/unity3d-jp/example-customcharset/charset.png)

サンプルプロジェクトの内容は、実際のゲームにおける運用を意識したものとなっています。百人一首のテキストは、一首ごとに独立したテキストファイルとして Resources ディレクトリの中に格納されています。

![Resources folder](https://github.com/downloads/unity3d-jp/example-customcharset/resources.png)

カスタムメニューとして追加された "Custom Char" から "Collect Texts" を選択すると、これらのテキストアセットが収集され customCharacters に設定されたのち、フォントの再インポートが行われます。

![Custom menu](https://github.com/downloads/unity3d-jp/example-customcharset/custommenu.png)

### Custom set 使用のコツ

フォントの Custom set を Unity エディター上で設定する（テキストボックスに手作業で入力する）場合は、未整理の生テキストを入れるだけでOKです。そのテキストから使用文字セットを自動的に抽出したうえでインポートが行われます。

ただしエディタースクリプト上から `customCharacters` を代入すると、この「文字セットの抽出」が行われません。テキストから重複文字を抜く作業を自前で行わなければいけません。

これは [Enumerable の Dictinct メソッド](http://msdn.microsoft.com/en-us/library/bb348436.aspx)を使うことで簡単に解決できます。

    charSet = String(sourceText.Distinct().ToArray());
