#pragma strict

var missileVelocity : int = 300;

var turn : float = 20;

var fuseDelay: float; //delay we'll use before the force is applied to it

var missileMod: GameObject;

var smokePrefab : ParticleSystem;


var missileClip : AudioClip;

var target: Transform;

function Start(){

target = GameObject.Find("Sun").transform;

AudioSource.PlayClipAtPoint(missileClip, transform.position);

}
 
function FixedUpdate (){
 
if(target == null){
	return;
}	
	this.transform.Translate(0,0, missileVelocity);

	var targetRotation = Quaternion.LookRotation(target.position - transform.position);
	
 	
 	transform.rotation = Quaternion.Lerp(transform.rotation, targetRotation, Time.time * turn);
}
 
 
 
function OnCollisionEnter(theCollision : Collision)
{
if(theCollision.gameObject.name == "Cube")
{
 
smokePrefab.emissionRate = 0.0f;
Destroy(missileMod.gameObject);
yield WaitForSeconds(5);
Destroy(this.gameObject);
 
}
}

