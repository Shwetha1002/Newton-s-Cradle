class Rope{
    constructor(object1, object2, offSetX, offSetY) {
     this.offSetX = offSetX
     this.offSetY = offSetY
    
        var options = {
    bodyA : object1,
    bodyB : object2,
    stiffness: 0.02,
    length: 10,
    //point B is a property of the constraint and has NOTHING to do with the paramters of the constraint
    pointB:{x:this.offSetX, y:this.offSetY}
    }
    this.chain = Constraint.create(options)
    World.add(world,this.chain)
    }
    display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    
    push();
    strokeWeight(3)
    line (pointA.x, pointA.y, pointB.x, pointB.y)
    pop();
    
    
    }
    
    }