class Bob{
    constructor(x, y, radius ) {
        var options = {
          isStatic: false,
          restitution:0.8,
            friction:0.5,
          density:1

        }
        this.radius = radius;
        // radius/2 is because in the constructor radius is actually diameter(means the diamter)
        // therefore radius/2
        this.body = Bodies.circle(x, y, radius/2, options);
        
       // this.bobDiameter = bobDiameter;
        
        
        World.add(world, this.body);
      }
      display(){
        
        
        var pos =this.body.position;
     push();
     translate( pos.x, pos.y)
     ellipseMode(RADIUS)
     //in the ellipse we don't put radius/2 because the width and height depend on the diamter
      ellipse(0, 0, this.radius, this.radius);
        
        pop();
      }
}