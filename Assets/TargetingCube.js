#pragma strict
     
    function Update () {
         	 var cam : Transform = Camera.main.transform;
   			 var ray = new Ray(cam.position, cam.forward);
       		 var hit : RaycastHit;
       
        //line.SetPosition(0, ray.origin);
       
        if (Physics.Raycast (ray, hit, 100)) {
        		this.transform.position = hit.point;
            //line.SetPosition(1, hit.point);
        } else {
           // line.SetPosition(1, ray.GetPoint(100));
           	this.transform.position = ray.GetPoint(100);
        }
    }


  