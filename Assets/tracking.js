#pragma strict

var horizontalAxis : Transform;
var verticalAxis : Transform;
var target : Transform;
 
function LateUpdate ()
{
    var targetDirection : Vector3 = verticalAxis.InverseTransformPoint(target.position);
    targetDirection.y = 0;
    targetDirection = verticalAxis.TransformPoint(targetDirection);
    verticalAxis.LookAt(targetDirection, verticalAxis.up);
    horizontalAxis.LookAt(target,horizontalAxis.up);
}