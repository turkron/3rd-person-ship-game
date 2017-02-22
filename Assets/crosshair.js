#pragma strict

//var crosshair:Texture2D;
//
//
//function Start () {
//
//}
//
//function Update () {
//
//}
//
//function OnGUI(){
//
//	GUI.Label(Rect(Screen.width - (Screen.width /2), Screen.height - (Screen.height / 2), 100,100),crosshair);
//
//}


    var crosshairTexture : Texture2D;
    var position : Rect;
    static var OriginalOn = true;
     
    function Start()
    {
    position = Rect((Screen.width - (crosshairTexture.width/2)) / 2, (Screen.height -
    (crosshairTexture.height/2)) /2, crosshairTexture.width/2, crosshairTexture.height/2);
    }
     
    function OnGUI()
    {
    if(OriginalOn == true)
    {
    GUI.DrawTexture(position, crosshairTexture);
    }
    }
    
//    function Update(){
//    this.transform.LookAt(GameObject.Find("NoseTracker").transform);
//    }