
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  box1 = new Box(700,320,120,20);
  box2 = new Box(770,320,20,50);
  box3 = new Box(630,320,20,50);

  //paper 
    box4 = new Paper(100,320,20,20);
    ground = new Ground(600,570,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box3.display();
  box4.display();
  box2.display();
  ground.display();
  drawSprites();
 
}
 function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(box4.body,box4.body.position,{ x:19,y:-19})
}



 }


