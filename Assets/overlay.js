#pragma strict

var pos:Vector3;
var distToPlayer:float;
var texture:Texture2D;
var texture2:Texture2D;
var rect = Rect(0,0,300,100);
var offset =  Vector2(0, 1.5); // height above the target position


function Start () {

}

function Update () {

distToPlayer = Vector3.Distance(this.transform.position, GameObject.Find("Ship1").transform.position);

print("dist: " + distToPlayer);
 
pos = Camera.main.WorldToScreenPoint(this.transform.position);

}

function OnGUI(){

if(distToPlayer > 200){
GUI.DrawTexture (Rect(pos.x-8,Screen.height-pos.y-8, 16, 16), texture);
} else {
GUI.DrawTexture (Rect(pos.x-8,Screen.height-pos.y-8, 16, 16), texture2);
}
GUI.Label(Rect(pos.x - 8, Screen.height- pos.y, 5, 16), distToPlayer + "m");
var point = Camera.main.WorldToScreenPoint(this.transform.position + offset);
rect.x = point.x;
rect.y = Screen.height - point.y - rect.height; // bottom left corner set to the 3D point
GUI.Label(rect, distToPlayer + "m"); // display its name, or other string

}
