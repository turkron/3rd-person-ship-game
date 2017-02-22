#pragma strict

var maxSizeX:float;
var screenpercentX:float;

var maxSizeY:float;
var screenpercentY:float;

function Start () {

maxSizeX = Screen.width;
maxSizeY = Screen.height;

}

function Update () {

screenpercentX = Input.mousePosition.x / maxSizeX  * 100;
screenpercentY = Input.mousePosition.y / maxSizeY  * 100;
print(screenpercentY);


if(screenpercentY < 50 && screenpercentY > 75){
	//print ("rotate down");
}

if(screenpercentY < 75){
	//print ("full rotate down");
}

if(screenpercentY > 50 && screenpercentY < 25){
	//print ("rotate up");
}

if(screenpercentY > 25){
	//print ("full rotate up");
}


//print(x);



if(screenpercentX < 50 && screenpercentX > 75){
	//print ("rotate left");
}

if(screenpercentX < 75){
	//print ("full rotate left");
}

if(screenpercentX > 50 && screenpercentX < 25){
	//print ("rotate right");
}

if(screenpercentX > 25){
	//print ("full rotate right");
}



}
