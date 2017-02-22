#pragma strict

var bullet:GameObject;
var cooldown:float = 0;

function Start () {

}

function Update () {

if(cooldown > 0){
	cooldown --;
}

if(Input.GetMouseButton(0) && cooldown == 0){
	var bullet1 = Instantiate(bullet, this.transform.position, this.transform.rotation);
	cooldown = 10;
}

}