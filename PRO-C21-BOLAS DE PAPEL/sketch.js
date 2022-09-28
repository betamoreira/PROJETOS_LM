const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);

	//crie as opções e o corpo da bola usando Bodies.circle




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 //exiba o corpo da bola usando um ellipse



 

  //exiba as paredes



  
}

function keyPressed() {
  	//escreve o código para lançar a bola para cima e para a direita quando clicar no UP_ARROW

}
