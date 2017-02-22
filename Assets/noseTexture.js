#pragma strict

var noseTexture:Texture2D;
var pos:Vector3;

function Start () {

}

function Update () {

pos = Camera.main.WorldToScreenPoint(this.transform.position);

}

function OnGUI () {

GUI.DrawTexture (Rect(pos.x-8,Screen.height-pos.y-8, 16, 16), noseTexture);


}