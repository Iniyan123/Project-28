class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}