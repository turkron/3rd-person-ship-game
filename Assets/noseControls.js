#pragma strict

function Start () {

}

function Update () {
if(Input.GetKey(KeyCode.A)){
	this.transform.Rotate(0, 0, 1);
}
if(Input.GetKey(KeyCode.D)){
	this.transform.Rotate(0, 0, -1);
}
}