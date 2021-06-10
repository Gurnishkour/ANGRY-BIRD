const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine, myworld,ground1,box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4,bird1,bg;
var platform;
var clog;
var gameState = "onSling";
var bgimg = "sprites/bg.png";
var score = 0;
 
function preload(){
//bg=loadImage("sprites/bg.png");
changeBackground();
}

function setup() {

  createCanvas(1200,400);
  
  myengine = Engine.create();
  myworld = myengine.world;

  ground1 = new Ground(600,height,1200,20);

 box1 = new Box(700,320,70,70); 
 box2 = new Box(920,320,70,70); 
 
pig1 = new Pig(810,350);

log1 = new Log(810,260,300,PI/2);

box3 = new Box(700,240,70,70); 
box4 = new Box(920,240,70,70); 

pig2 = new Pig(810,220);

log2 = new Log(810,180,300,PI/2);

box5 = new Box(810,160,70,70);

log3 = new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);

bird1 = new Bird(200,50);

platform = new Ground(150,300,300,170);


sling1= new Slingshot(bird1.body,{x:190,y:50});

}

function draw() {
  if (bg){
  background(bg);  
  }

  Engine.update(myengine);
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();

 ground1.display();

 pig1.display();
 pig2.display();

 pig1.score();
 pig2.score();

 log1.display();
 log2.display();
 log3.display();
 log4.display();

 bird1.display();

 platform.display();

 
 sling1.display();

 textSize (30);
 fill ("white");
 text("score = " + score , width - 250 , 40 );
}

function mouseDragged(){
 // if(gameState === "onSling"){
  Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
 // }
}

function mouseReleased(){
  sling1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
 sling1.attach(bird1.body);
 bird1.trajectory = []
 Matter.Body.setPosition(bird1.body,{x:200,y:50})
  }
}

async function changeBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON); 
  var dateTime= responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  if(hour>= 06 && hour<= 19){
    bgimg = "sprites/bg.png"
  }
  else{
    bgimg = "sprites/bg2.jpg"
  }
  bg = loadImage(bgimg);
}