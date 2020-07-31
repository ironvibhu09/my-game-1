const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy_running,boy;

function preload()
{
	boy_running = loadAnimation("Images/Run_000.png");
}

function setup() {
	createCanvas(800, 700);
 	boy=createSprite(200,100,50,50);
 	boy.addAnimation("boy_running")

	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
}



