
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,wall1,wall2,wall3;
var dustBin;




function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
  
  
	//Create the Bodies Here.
  paper = new Paper(100,210);
  
  ground = new Ground(500,570,1000,10);
  
 
  wall1 = new Wall(600,520,100,PI);
  
  wall2 =new Wall(800,520,100,PI);
  
	wall3 = new Wall(700,560,173,PI/2);
  
  dustbin = new Dustbin(700,200);
}

function draw() {
  rectMode(CENTER);
  background(225);
  
 
  Engine.update(engine);  
  paper.display();
  ground.display();
  dustbin.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
   
}
function keyPressed()
      { if(keyCode === UP_ARROW)
        {  
             
          Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-300});
          console.log("hello");
        }

      }


