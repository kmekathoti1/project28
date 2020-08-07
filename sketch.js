
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var ground,paper,dustbin;
const Constraint=Matter.Constraint;
var chain1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,690,800,20);
paper= new Paper(200,100,20);
dustbin=new Dustbin(700,690,150,20)

chain1=new Chain(paper.body,{x:200,y:100});

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1600,
    height: 700,
    wireframes: false
  }
});

Engine.run(engine);
Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  dustbin.display();
chain1.display();
  drawSprites();
 
}



function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})}

  function mouseReleased(){
    chain1.fly();
  }