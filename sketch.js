
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(world,ground);
  
  var ballOptions = {
    restitution: 1,
    density: 8
  }

  ball = Bodies.circle(200,10,40,ballOptions);
  World.add(world,ball);

  console.log(ground.position);
}

function draw() {
  background("lightblue");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  console.log(ball.y);

  drawSprites();
}
