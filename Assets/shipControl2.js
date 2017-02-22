#pragma strict

var turningSpeed:float = 1;

var maxSizeX:float;
var screenpercentX:float;

var maxSizeY:float;
var screenpercentY:float;

var spaceIsDown:boolean = false;

function Start () {

maxSizeX = Screen.width;
maxSizeY = Screen.height;

}

function Update () {

if(Input.GetKey(KeyCode.Space)){
spaceIsDown = true;
} else {
	spaceIsDown = false;
}

screenpercentX = Input.mousePosition.x / maxSizeX  * 100;
screenpercentY = Input.mousePosition.y / maxSizeY  * 100;
//print(screenpercentY);

if(spaceIsDown == false){

if(screenpercentY < 50 && screenpercentY > 25){
	//print ("rotate down");
	var downSpeed = (screenpercentY-50) / 25;
		print(downSpeed);
		this.transform.Rotate (-downSpeed * turningSpeed, 0, 0);
}

if(screenpercentY < 25){
	//print ("full rotate down");
	this.transform.Rotate (turningSpeed ,0, 0);
}

if(screenpercentY > 50 && screenpercentY < 75){
	//print ("rotate up");
	var upSpeed = (screenpercentY - 50) / 25;
	this.transform.Rotate(upSpeed * -turningSpeed, 0, 0);
		print(upSpeed);
}

if(screenpercentY > 75){
	//print ("full rotate up");
	this.transform.Rotate(-turningSpeed, 0, 0);
}


//print(x);



if(screenpercentX < 50 && screenpercentX > 25){
	//print ("rotate left");
	var leftSpeed = (screenpercentX - 50) / 25;
	this.transform.Rotate(0, leftSpeed * turningSpeed, 0);
	
}

if(screenpercentX < 25){
	//print ("full rotate left");
	this.transform.Rotate(0 , -turningSpeed, 0);
}

if(screenpercentX > 50 && screenpercentX < 75){
	var rightSpeed = (screenpercentX - 50) / 25;
	this.transform.Rotate(0, rightSpeed * turningSpeed, 0);
	//print ("rotate right");
}

if(screenpercentX > 75){
	//print ("full rotate right");
	this.transform.Rotate(0, turningSpeed, 0);
}

}


}
