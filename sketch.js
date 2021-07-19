var iss,issImg;
var spacecraft, spacecraft1mg1,spacecraftImg2;
var hasDocked=false;


function preload() {
  issImg = loadImage("images/iss.png");
  spacecraftImg1 = loadImage("images/spacecraft1.png");
  spacecraftImg2 = loadImage("images/spacecraft2.png");
  spaceBg = loadImage("images/spacebg.jpg");
 spacecraftImg3 = loadImage("images/spacecraft3.png");
 spacecraftImg4 = loadImage("images/spacecraft4.png");
}



function setup() {
  createCanvas(800,400);
  iss = createSprite(400,200,10,10);
  iss.addImage(issImg);
  iss.scale = 0.7;

  
  spacecraft = createSprite(400,300,5,5);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.15;
}

function draw() {
  background(spaceBg);  

  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-2,2);

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x = spacecraft.x-5;
    }
  
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x = spacecraft.x+5;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg2);
      spacecraft.y = spacecraft.y+5;
    }

    if(keyDown("UP_ARROW")){
      spacecraft.addImage(spacecraftImg2);
      spacecraft.y = spacecraft.y-5;
    }
  }

   if(spacecraft.x <= (iss.x-10) && spacecraft.y <= (iss.y+70)){
     text("DOCKING SUCCESSFUL", 400,350);
     textSize(80);
     fill("white");
     hasDocked = true;
   }


  
  
  drawSprites();
}