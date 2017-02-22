#pragma strict

var movement:float = 0.1;
var life:int = 0;

function Start () {

}

function Update () {

this.transform.Translate (0,0,movement);
life ++;
if(life > 50){
Destroy(this.gameObject);
}
	
}