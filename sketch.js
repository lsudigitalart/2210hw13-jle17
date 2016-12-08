var bag;
var bottomWater;
var c;    //cursor variable
var eel;
var schoolFish;
var shark;
var ship;
var sky;
var text;
var topWater;
var turtle;
var whale;

var thing1;
var thing2;

function preload(){
  text = loadImage("img/text.png");
  bottomWater = loadImage("img/bottomWater.png");
  eel = loadImage("img/eel.png");
  schoolFish = loadImage("img/schoolFish.png");
  shark = loadImage("img/shark.png");
  ship = loadImage("img/ship.png");
  sky = loadImage("img/sky.png");
  topWater = loadImage("img/topWater.png");
  turtle = loadImage("img/turtle.png");
  whale = loadImage("img/whale.png");
}

function setup() {
  createCanvas(1188, 625);
  thing1 = new Thing(1, random(4), 0, 20); //ship
  thing2 = new Thing(2, random(4), 0, 220);  //turtle
  thing3 = new Thing(3, random(4), 0, 275);  //shark
  thing4 = new Thing(4, random(4), 0, 410);  //eel
  thing5 = new Thing(5, random(4), 0, 475);  //whale
  thing6 = new Thing(6, random(4), random(width/2), 250);  //schoolFish
  thing7 = new Thing(6, random(4), random(width/2), 450);  //schoolFish

}

function draw(){
  background(255);

  //cursor image
  if (mouseY > 110){
    cursor("img/bag.png");
  } else{
    cursor("img/seagull.png");
  }

  image(sky, 0, 0);
  image(topWater, -72, 75);

  //ship
  thing1.display();
  thing1.move();
  thing1.interact();

  image(bottomWater, -17, 110);

  image(text, width/4 - 30, height/2);

  //turtle
  thing2.display();
  thing2.move();
  thing2.interact();

  //schoolFish
  thing6.display();
  thing6.move();

  //shark
  thing3.display();
  thing3.move();
  thing3.interact();

  //schoolFish
  thing7.display();
  thing7.move();

  //eel
  thing4.display();
  thing4.move();
  thing4.interact();

  //whale
  thing5.display();
  thing5.move();
  thing5.interact();

}


function Thing(tempDisplay, tempSpeed, tempXPosition, tempYPosition){

  this.tempDisplay = tempDisplay;
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  this.yPosition = tempYPosition;

  this.display = function(){
    if (this.tempDisplay == 1){
      image(ship, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay == 2){
      image(turtle, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay == 3){
      image(shark, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay == 4){
      image(eel, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay == 5){
      image(whale, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay ==6){
      image(schoolFish, this.xPosition, this.yPosition);
    };
  };

  this.move = function(){
    this.xPosition = this.xPosition + this.speed;
  };

  this.interact = function(){
    if (mouseY > this.yPosition + 10 && mouseY < this.yPosition + 100 && mouseX > this.xPosition){
      this.speed = 0;
    } else {
      this.speed = random(4);
    };
          println(this, this.yPosition);
  };


}
