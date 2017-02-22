#pragma strict
      var player: Transform;
    function Update () {
         	
   			 var ray = new Ray(player.position, player.forward);
       		 var hit : RaycastHit;
       
        //line.SetPosition(0, ray.origin);
       
        if (Physics.Raycast (ray, hit, 999)) {
        		this.transform.position = hit.point;
            //line.SetPosition(1, hit.point);
        } else {
           // line.SetPosition(1, ray.GetPoint(100));
           	this.transform.position = ray.GetPoint(999);
        }
    }


  