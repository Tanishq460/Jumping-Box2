var canvas;
var music;
var box1, box2, box3, box4;
var jBox;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);
    
    box1 = createSprite(110,570,190,20);
    box1.shapeColor = "red"

    box2 = createSprite(335,570,190,20);
    box2.shapeColor = "yellow"

    box3 = createSprite(565,570,190,20)
    box3.shapeColor = "purple"

    box4 = createSprite(790,570,190,20)
    box4.shapeColor = rgb(0,100,0)
    
    jBox = createSprite(random(20,880),random(50,550),40,40);
    jBox.shapeColor = "white"
    jBox.velocityX = 4;
    jBox.velocityY = 3;
}

function draw() {
    background("black");
    
    edges = createEdgeSprites();
    jBox.bounceOff(edges);

   if(box1.isTouching(jBox) && jBox.bounceOff(box1)){
       jBox.shapeColor="red"
       music.play();
   }

   if(box2.isTouching(jBox) && jBox.bounceOff(box2)){
    jBox.shapeColor="yellow"
    music.stop();
}

if(box3.isTouching(jBox) && jBox.bounceOff(box3)){
    jBox.shapeColor="purple"
}

if(box4.isTouching(jBox) && jBox.bounceOff(box4)){
    jBox.shapeColor=rgb(0,100,0)
}



    drawSprites();
}
