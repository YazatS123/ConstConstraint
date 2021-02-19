
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, rope1, roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bob1 = new Ball(400, 330);
	roof = new Ground(400, 130, 300, 20);

	

	//Create the Bodies Here.
	rope1 = new Chain(bob1.body, roof.body, -5*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  roof.display();
  rope1.display();
  bob1.display();
  drawSprites();
 
}



