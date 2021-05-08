const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, 
BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5,
 BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, 
BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(700, 500);
  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(460, 400, 160, 11.65);
  ground2 = new Ground(350,490,700,11.65);
  

  BlockBlue1 = new Box(400, 182, 20, 20);
  BlockBlue2 = new Box(420, 182, 20, 20);
  BlockBlue3 = new Box(440, 182, 20, 20);
  BlockBlue4 = new Box(460, 182, 20, 20);
  BlockBlue5 = new Box(480, 182, 20, 20);
  BlockBlue6 = new Box(500, 182, 20, 20);
  BlockBlue7 = new Box(520, 182, 20, 20);
  

  BlockPink1 = new BoxPink(420, 162, 20, 20);
  BlockPink2 = new BoxPink(440, 162, 20, 20);
  BlockPink3 = new BoxPink(460, 162, 20, 20);
  BlockPink4 = new BoxPink(480, 162, 20, 20);
  BlockPink5 = new BoxPink(500, 162, 20, 20);

  BlockBlue8  = new Box(440, 142, 20, 20);
  BlockBlue9  = new Box(460, 142, 20, 20);
  BlockBlue10 = new Box(480, 142, 20, 20);
  
  BlockBlack1 = new BoxBlack(460,122,20,20);
  polygon_1 = new poly(100, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 100, y: 100 });

}

function draw() {
  background(56, 44, 44);
  Engine.update(engine);
  
  ground1.display();
  ground2.display();


  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockBlue4.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();


  BlockPink1.display ();
  BlockPink2.display ();
  BlockPink3.display ();
  BlockPink4.display ();
  BlockPink5.display ();


  BlockBlue8.display ();
  BlockBlue9.display ();
  BlockBlue10.display();


  BlockBlack1.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

