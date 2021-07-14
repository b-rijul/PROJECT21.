
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var right;
var left;
var ground1;
var ground2;
var ground3;

function preLoad() {
	left = loadSound("bounce.wav");
	right = loadSound("bounce.wav");
}

function setup() {
	createCanvas(1500,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
		isStatic:false,
		restitution: 0.6,
		friction:0,
		density:1.2,
	}

	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	fill("yellow");
	ground =new Ground(200,390,4000,20);
	ground1 =new Ground(200,10,4000,20);
	ground2 =new Ground(1490,200,20,800);
	ground3 =new Ground(10,200,20,800);
    right = new Ground(1200,330,10,100);
    left = new Ground(1100,330,10,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  
  ground.display();
  right.display();
  left.display();
  ground1.display();
  ground2.display();
  ground3.display();

  if(keyDown(RIGHT_ARROW)){	
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:5,y:0.1});
}

if(keyDown(LEFT_ARROW)){	
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:-1.5,y:-1.5});
}

textSize(20);
text("USE ME",1110,370);

  Engine.update(engine);

  drawSprites();
 
}