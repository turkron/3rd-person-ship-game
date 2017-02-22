#pragma strict

var mousePos : Vector3;
var player: Transform;
var rayPoint:Ray;

function Update () {

//mousePos = Camera.main.ScreenToWorldPoint (Vector2 (Input.mousePosition.x ,Input.mousePosition.y));

	 //var ray = new Ray(player.position, player.forward);
     var hit : RaycastHit;
     
		var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    
      if (Physics.Raycast (ray, hit, 999)) {
        		this.transform.position = hit.point;
            //line.SetPosition(1, hit.point);
        } else {
           // line.SetPosition(1, ray.GetPoint(100));
           	this.transform.position = ray.GetPoint(999);
        }

//this.transform.position = Vector3(mousePos.x, mousePos.y, rayPoint);


if(Input.GetKey(KeyCode.A)){
	this.transform.Rotate(0, 0, 1);
}
if(Input.GetKey(KeyCode.D)){
	this.transform.Rotate(0, 0, -1);
}

}

    var yourCursor : Texture2D; // Your cursor texture
    var cursorSizeX : int = 16; // Your cursor size x
    var cursorSizeY : int = 16; // Your cursor size y
     
    function Start()
    {
    Cursor.visible = false;
    }
     
    function OnGUI()
    {
    GUI.DrawTexture (Rect(Event.current.mousePosition.x-cursorSizeX/2, Event.current.mousePosition.y-cursorSizeY/2, cursorSizeX, cursorSizeY), yourCursor);
    }