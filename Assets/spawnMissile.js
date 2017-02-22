#pragma strict

var Missile:GameObject;
var triggered:boolean = false;
var startDelay:int;
var cooldown:int = 150;
var timer:int = 0;

function Start () {

}

function Update () {

this.transform.LookAt(GameObject.Find("NoseTracker").transform.position);


if(Input.GetMouseButtonDown(1) && triggered == false){
	triggered = true;
}

if(triggered == true){
timer ++;
}

if(timer == startDelay){ 
var missile1 = Instantiate(Missile, this.transform.position, this.transform.rotation);
}

if(timer == cooldown){
	triggered = false;
	timer = 0;
}


}