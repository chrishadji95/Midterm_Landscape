let stars = [];
let myStar;
let graphics; //for stars

let iteration = 1;
let carX = 1500;
var windowArray = [];

let longboi; //building
var c1, c2;

var cLight, slider, input, wSize, wX, wX; // light GUI elements

let song;
function preload() {

  song = loadSound("sfr1.mp3");
  song2 = loadSound("whoosh.mp3");
img = loadImage("minimal rocket3.png");
}

function setup(){
  song.loop();
  cLight = color(232, 177, 75);
  size = 40;
  wX = 50;
  wY = 50;

  slider = createSlider(0, 255, 30);
  slider.position(10, 10);


frameRate(120);
    createCanvas(windowWidth, windowHeight);
    graphics = createGraphics(windowWidth, windowHeight);

    graphics.background(5);

    c1 = color(15, 20, 73);
    c2 = color(0);
    gradient(c1, c2);

    for (let i = 0; i < 500; i++) {
    stars.push(new Starry());
  }
  longboi = new Building();
}

function draw(){

  /*  graphics.stroke(232, 177, 75, Math.sqrt(slider.value()*5)); -> would have been halo light around each window light
    graphics.strokeWeight(50);
    graphics.noFill();
    graphics.ellipse(wX, wY, slider.value()/3);*/

 image(graphics, 0, 0);

//background(100);
  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle(); // star array function
  }

iteration++;
  for(let i = 0; i < iteration; i++){ //iteration for buildings

      longboi.change();
      longboi.build();
      longboi.lights();

  if (iteration < 20){
      iteration = 0;
    }
  }

if (mouseIsPressed & mouseY > 25 & mouseX > 50){ //rocket ship!

image(img, mouseX, mouseY);

mouseX = mouseX + 3; //rocket ship's movement
mouseY = mouseY - 4; //rocket ship's movement

  }

  /*stroke(255); //waves
  noFill();
  beginShape();
  vertex(0, height);

  for(var x = 0; x < width; x++){

    var angle = offset + x * 0.05;

    var y = map(sin(angle), -strum, strum, 680, height); //maps
        vertex(x, y);
  }

  vertex(width, height/2);
  endShape();
  offset += 0.1;

  stroke(232, 177, 75, Math.sqrt(slider.value()*5)); //halo light
  strokeWeight(50);
  noFill();
  ellipse(x, y, slider.value()/3);*/
}
  class Building{
    constructor(){
      this.x;
      this.y;
      this.width;
      this.height;
  }
    change(){ //changes this values (dynamically?)
      this.x = random(120, 200);
      this.y = 1;
      this.width = 200;
      this.height = 400;
      this.inverseHeight = this.y*random(120, 220);
      this.rectW = (this.x*frameCount/40)+random(50, 110);
  }
    build(){
      if (frameCount % 10 == 0){ //so that buildings don't appear too quickly
      graphics.stroke(180);
      graphics.strokeWeight(1);
      graphics.fill(19, 20, 50);
      graphics.rectMode(CORNERS);
      graphics.rect(this.x*frameCount/40, this.inverseHeight, this.rectW, this.height);//allows rectangles to move right
  }
}
    lights(){
      if (frameCount % 10 == 0){
      graphics.noStroke();
      graphics.fill(232, 177, 75, slider.value()); //slider controls alpha value of lights
      graphics.rectMode(CENTER); //weird stuff happens when it's at CORNER(S)
      for(var q = 1; q<5; q++){

        for(var w = 1; w<5; w++){

          graphics.rect(this.x*frameCount/40 + 10, this.inverseHeight + 20, 7, 7); //code for every light shown, below
          graphics.rect(this.x*frameCount/40 + 25, this.inverseHeight + 20, 7, 7);
          graphics.rect(this.x*frameCount/40 + 40, this.inverseHeight + 20, 7, 7);
          graphics.rect(this.x*frameCount/40 + 55, this.inverseHeight + 20, 7, 7);

          graphics.rect(this.x*frameCount/40 + 10, this.inverseHeight + 40, 7, 7);
          graphics.rect(this.x*frameCount/40 + 25, this.inverseHeight + 50, 7, 7);
          graphics.rect(this.x*frameCount/40 + 40, this.inverseHeight + 35, 7, 7);

    if(this.rectW<340){
        graphics.rect(this.x*frameCount/40 + 55, this.inverseHeight + 20, 7, 7);
        graphics.rect(this.x*frameCount/40 + 40, this.inverseHeight + 60, 7, 7);
}
    if(this.rectW>400 && this.rectW<650){
        graphics.rect(this.x*frameCount/40 + 10, this.inverseHeight + 40, 7, 7);
        graphics.rect(this.x*frameCount/40 + 75, this.inverseHeight + 40, 7, 7);
        graphics.rect(this.x*frameCount/40 + 40, this.inverseHeight + 20, 7, 7);
        graphics.rect(this.x*frameCount/40 + 40, this.inverseHeight + 40, 7, 7);
}

    if(this.rectW>650){
            graphics.rect(this.x*frameCount/40 + 10, this.inverseHeight + 50, 7, 7);
            graphics.rect(this.x*frameCount/40 + 10, this.inverseHeight + 20, 7, 7);
            graphics.rect(this.x*frameCount/40 + 55, this.inverseHeight + 35, 7, 7);
}
        }
      }
    }
  }
}
class Starry{ //star function

	constructor(){

		this.size = 10;
		this.x = random(width);
		this.y = random(height);
    this.angle = random(20-255); //makes starting alpha value of each star random
    this.CircleX = random(width);
    this.CircleY = random(height);
	}

    twinkle(){

      var twinkle = sin(this.angle);
      var col = map (twinkle, -1, 1, 30, 255); //mapping sin(angle) values to alpha of stars
      fill (col);
      this.angle += 0.1;
      noStroke();
      ellipse(this.CircleX, this.CircleY, 2.5, 2.5);

    }
}

function gradient(c1, c2) { 

  noFill();
  for (var j = 0; j < height; j++) {
    var inter = map(j, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, j, width, j);

  }
}
