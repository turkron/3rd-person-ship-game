#pragma strict

var thrust:float = 0;


function Start () {

}

function LateUpdate () {

if(Input.GetKey(KeyCode.W)){
	thrust += 0.005;
}
if(Input.GetKey(KeyCode.S)){
	thrust -= 0.005;
}

if(Input.GetKey(KeyCode.Q)){
	this.transform.Translate(-1,0,0);
}
if(Input.GetKey(KeyCode.E)){
	this.transform.Translate(1,0,0);
}


if(Input.GetKey(KeyCode.A)){
	this.transform.Rotate(0, 0, 1);
}
if(Input.GetKey(KeyCode.D)){
	this.transform.Rotate(0, 0, -1);
}

this.transform.Translate(0,0,thrust);
//print(thrust);


}