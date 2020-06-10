var paper1;
var dustbin;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
  
   
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

    

	paper1 = new Paper(200,400,40);

	 boxLeftSprite=createSprite(280, 610, 20,100);
	 boxLeftSprite.shapeColor=color(255,0,0); 
	 boxLeftBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxLeftBody);
	
	boxRightSprite=createSprite(440, 610, 20,100);
	 boxRightSprite.shapeColor=color(255,0,0); 
	 boxRightBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxRightBody);
	
	boxBottomSprite=createSprite(360, 670, 180,30);
	 boxBottomSprite.shapeColor=color(255,0,0); 
	 boxBottomBody = Bodies.rectangle(200, 200, 20,100 , {isStatic:true} ); 
	World.add(world, boxBottomBody);
	
   
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();	
  paper1.display(); 
 // drawSprites();
 
}



