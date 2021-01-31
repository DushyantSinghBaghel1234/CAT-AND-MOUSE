var garden,gardenImg;
var tom,tomImg,tomImg2,tomImg1,tomImg3;
var jerry,jerryImg,jerryImg1,jerryImg2,jerryImg3;

function preload() {
gardenImg=loadImage("garden.png");
tomImg=loadImage("tomOne.png");
tomImg1=loadImage("tomTwo.png");
tomImg2=loadImage("tomThree.png");
tomImg3=loadImage("tomFour.png");
jerryImg=loadImage("jerryOne.png");
jerryImg1=loadImage("jerryTwo.png");
jerryImg2=loadImage("jerryThree.png");
jerryImg3=loadImage("jerryFour.png");
}

function setup(){
    createCanvas(995,660);
    //create tom and jerry sprites here;
    garden=createSprite(500,300,20,20);
    garden.addImage(gardenImg);

    tom=createSprite(800,550,20,20);
    tom.scale=0.1;
    tom.addImage(tomImg);
    
    jerry=createSprite(150,550,20,20);
    jerry.scale=0.1;
    jerry.addImage(jerryImg);

    
}

function draw() {
    keyPressed();
    background("black");
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
     tom.velocityX=0;
     tom.addAnimation("end position",tomImg3);
     tom.changeAnimation("end position");
     jerry.addAnimation("end position",jerryImg3);
     jerry.changeAnimation("end position");

     tom.x=200;
     tom.y=550;
    }

 drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  // tom.velocityX=0;
   //tom.velocityY=0;

   if(keyDown("left")){
     tom.velocityX=-4;
     tom.addAnimation("tomRunning",tomImg1,tomImg2);
     tom.changeAnimation("tomRunning");
     jerry.addAnimation("jerry",jerryImg1,jerryImg2);
     jerry.changeAnimation("jerry");
   }
    

  

    



}
