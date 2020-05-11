const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var drops,drop;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  drops = [] ;
  this.image = loadImage("sprites/Drop.png")
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  drop = Bodies.rectangle(random(0,800),0,2,3);
  World.add(world,drop);
  drops.push(drop);

  for(var i in drops){
    fill (255);
    rect (drops[i].position.x,drops[i].position.y,2,3);
  } 

  drawSprites();
}