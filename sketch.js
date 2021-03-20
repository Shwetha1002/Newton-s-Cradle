
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	Bob1 = new Bob(500, 600,30);
	Bob2 = new Bob(1000, 400,30);
	Bob3 = new Bob(500, 400,30);
	Bob4 = new Bob(600, 400,30);
	Bob5 = new Bob(700, 400,30);
	roof1 = new Roof(370,200,500,20);
  roof2 = new Roof(250,200,200,20);
  roof3 = new Roof(310,200,200,20);
  roof4 = new Roof(430,200,200,20);
  roof5 = new Roof(490,200,200,20);
	ground = new Roof(500,700,1000,20);
  rope1 =new Rope( Bob1.body, roof1.body, 0,300)
  rope2 =new Rope( Bob2.body, roof2.body, 0,300)
  rope3 =new Rope( Bob3.body, roof3.body, 0,300)
  rope4 =new Rope( Bob4.body, roof4.body, 0,300)
  rope5 =new Rope( Bob5.body, roof5.body, 0,300)

	
	
}


function draw() {
  
  background("white");
  Engine.run(engine);
  //rectMode(CENTER);
  Bob1.display();

  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(Bob5.body, Bob5.body.position, {x:8000, y:50});
		console.log("hi")
	}
}	


