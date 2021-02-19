class Chain{
    constructor (bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 2,
            length:70
        }
        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);

    } 
    display(){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.Slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}