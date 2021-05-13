var girl , girl_running;
var pizza , pizzaImg ,  burger , burgerImg , donuts , donutsImg;
var grapes , grapesImg , corn , cornImg , salad , saladImg;
var dumbbell , threadmill , jumpRope , dumbbellImg , threadmillImg , jumpRopeImg;
var backgr , backgr_Img;

function preload(){
 //For loding the image for the background
   backgr_Img = loadImage("images/bg.jpeg");

 //For loading the animation for the girl 
   girl_running = loadAnimation("images/1.gif");

  //For loading the images for the junk food 
   pizzaImg = loadImage("images/Junk food 3.PNG");
   burgerImg = loadImage("images/Junk food 1.PNG");
   donutsImg = loadImage("images/Junk food 2.PNG");
  
  //For loading the images for the healthy food
   grapesImg = loadImage("images/Healthy food 1.PNG");
   cornImg = loadImage("images/Healthy food 2.PNG");
   saladImg = loadImage("images/Healthy food 3.jpg");

  //For loading images for workout equipment
   dumbbellImg = loadImage("images/Workout 1.PNG");
   jumpRopeImg = loadImage("images/Workout 2.PNG");
   threadmillImg = loadImage("images/Workout 3.PNG");
}


function setup() {
 //For creating a canvas
  createCanvas(1000,500);

  backgr = createSprite(0,0,800,400);
  backgr.addImage("background",backgr_Img);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;

 //For creating the girl
  girl = createSprite(100,340,20,50);
  girl.addAnimation("Running",girl_running);
  girl.scale = 0.5;
}



function draw() {
 //For background color
  background("white"); 
  drawSprites();
}