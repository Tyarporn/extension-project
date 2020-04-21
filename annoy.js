
var s = function( sketch ){
var phrases = ["Wake up and smell the roses!", "It's time to go outside", "Are you really gonna waste another minute here?", "I hear its a beautiful day today!", "You look fine...show it to the world!", "Corona virus can't bring you down"];
var currentTime;
var startTime;
var canvas;
var opacity = 0;
sketch.setup = function() {
  canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
  canvas.position(0,0);
  canvas.style('z-index',-10);
  startTime = sketch.second();
  currentTime = sketch.second();
  canvas.style('pointer-events', 'none')
//  background(255);//testing canvas size
  console.log('setting up');
}

sketch.draw = function() {
  console.log("looping")
  if(startTime == 0 || startTime == 1){//make sure you can divide
    startTime += 2;
  }
  sketch.stroke(sketch.random(255),sketch.random(255),sketch.random(255));
  sketch.textFont('futura');
   currentTime = sketch.second();
  if(currentTime%startTime == 2){
  sketch.text(sketch.random(phrases), sketch.random(sketch.windowHeight),sketch.random(sketch.windowWidth));
    startTime = sketch.second();
    //opacity ++;

  }
//  print(startTime, currentTime, opacity)
}

// function mousePressed(){
//   background(0);
// }

};
var myp5 = new p5(s);
