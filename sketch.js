var
boop=250;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(171,189,72); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(1);
  fill(0,0,0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(310,285,100,100,100)
  fill(212,54,30);
  ellipse(400,350,150,150,150); // center of canvas, 20px dia
  fill(0,0,0);
  ellipse(364,319,50,50,50);
  ellipse(420,310,30,30,30);
  ellipse(445,343,40,40,40);
  ellipse(402,339,20,20,20);
  ellipse(359,369,35,35,35);
  ellipse(415,386,55,55,55);
  fill(255,255,255);
  ellipse(293,260,10,10,10);
  stroke(123,250,137);
  strokeWeight(1);
  fill(171,189,72);
  strokeWeight(0)
  triangle(200,boop,300,300,100,300);
  fill(255,255,255);
  textSize(30)
  text('heyyy',180,200)
}
function mousePressed (){
  if (boop >= 50){
    boop=0;
  }else{
    boop=boop+300
  }
}
