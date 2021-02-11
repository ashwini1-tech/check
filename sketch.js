var cats,mouse,cat,c,mice,m,mi,backgroun
function preload() {
    //load the images here
cats=loadAnimation("images/cat1.png");

c=loadAnimation("images/cat4.png");
cat=loadAnimation("images/cat2.png","images/cat3.png");
mouse=loadAnimation("images/mouse1.png");

m=loadAnimation("images/mouse2.png","images/mouse3.png");
mi=loadAnimation("images/mouse4.png");
backgroun=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("tom",cats);
tom.scale=0.12;

jerry=createSprite(200,600);
jerry.addAnimation("standing",mouse);
jerry.scale=0.12;

}

function draw() {

    background(backgroun);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.changeAnimation("lasts",c)
    tom.x=300;
    tom.scale=0.2;
    
    jerry.changeAnimation("last",mi);
    jerry.scale=0.15;
    jerry.changeAnimation("last");
}
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("SLEEPING",cat);
    tom.changeAnimation("SLEEPING");
   
    jerry.addAnimation("run",m);
    jerry.frameDelay=25;
    jerry.changeAnimation("run");
}

}
