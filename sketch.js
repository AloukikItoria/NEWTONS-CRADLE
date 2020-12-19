
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var rope1;
var roof;
var bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
  
	roof= new Roof(200,50,200,10);
	bob1= new Bob(250,10,10,100);
	bob2= new Bob(300,10,10,100);
	bob3= new Bob(350,10,10,100);
	bob4= new Bob(400,10,10,100);
	bob5= new Bob(450,10,10,100);
	rope1 = new Ropes(bob1.body, {x:110 , y:150});
	rope2 = new Ropes(bob2.body, {x:150 , y:150});
	rope3 = new Ropes(bob3.body, {x:200 , y:150});
	rope4 = new Ropes(bob4.body, {x:250 , y:150});
	rope5 = new Ropes(bob5.body, {x:300 , y:150});
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
 //rope1=new Ropes(bobObject1.body,roofObject.body,-bobDiameter*2,0)
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
}