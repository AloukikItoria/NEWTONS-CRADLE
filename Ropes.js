class Ropes{

    constructor(bodyA , pointB){

        var roptions={

            bodyA:bodyA,
            pointB:pointB,
            
            stiffness:0.1,
            length:10
            
           
        }

        
       
        this.rope = Constraint.create(roptions)
        World.add(world,this.rope)
        this.pointB = pointB;


    }//contructor

    display(){
    
        if(this.rope.bodyA){
            var posA = this.rope.bodyA.position
            var posB = this.pointB
            line(posA.x,posA.y,posB.x,posB.y);
                
                
        
    }//display 

     fill("black")
     stroke("black")
    
     }
}
