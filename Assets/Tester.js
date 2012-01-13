#pragma strict

var style : GUIStyle;

private var text : String;

function Start() {
    while (true) {
        // Resources/Songs 内のテキストファイルを順に表示する。
        for (var asset in Resources.LoadAll("Songs", TextAsset)) {
            text = (asset as TextAsset).text;
            yield WaitForSeconds(2.0);
        }
    }
}

function OnGUI() {
    GUI.Label(Rect(0, 0, Screen.width, Screen.height), text, style);
}
