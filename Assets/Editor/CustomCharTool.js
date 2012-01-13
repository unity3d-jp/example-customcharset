#pragma strict

import System.Collections.Generic;
import System.Linq;

// フォントのパス
static var fontPath = "Assets/Font/ipamp.ttf";

@MenuItem ("Custom Char/Collect Texts")
static function CustomCharTool_CollectTexts() {
    var chars : String;

    // Resources/Songs 内に格納されているテキストアセットの内容を結合する。
    for (var asset in Resources.LoadAll("Songs", TextAsset)) {
        chars += (asset as TextAsset).text;
    }

    // ユニークな文字セットを抽出する。
    chars = String(chars.Distinct().ToArray());

    // フォントのインポーターにテキストの内容を適用する。
    var importer = AssetImporter.GetAtPath(fontPath) as TrueTypeFontImporter;
    importer.customCharacters = chars;
    AssetDatabase.ImportAsset(fontPath);

    Debug.Log("Done.");
}
