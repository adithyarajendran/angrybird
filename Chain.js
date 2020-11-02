class Chain{

constructor(bodyA, bodyB){

    var options = {

        bodyA : bird.body,
        bodyB : gluelog.body,
        
        stiffness :  2,
           length :  19,
    
        }
    
        var chain = Constraint.create(options);
        World.add(world,chain);

}

display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);   

}
}




















































