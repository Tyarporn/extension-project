console.log('first');
var s = function(sketch) {
  console.log('second');
  var phrases = ["Wake up and smell the roses!", "It's time to go outside", "Are you really gonna waste another minute here?", "I hear its a beautiful day today!", "You look fine...show it to the world!", "Corona virus can't bring you down"];
  var currentTime;
  var startTime;
  var canvas;
  var opacity = 0;
  var stepTime;
chrome.storage.sync.get(['time'], function(result) {
  console.log('Value currently is ' + result.time);//check if options worked
      stepTime = result.time;
      });

  sketch.setup = function() {
    canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -10);
    startTime = sketch.minute();
    currentTime = sketch.minute();
    canvas.style('pointer-events', 'none'); //allows user to click on things
    //background(255);//testing canvas size
    //sketch.frameRate(1);
  //  console.log('setting up, ' + stepTime);
  }

  sketch.draw = function() {
console.log(parseInt(stepTime)+3);//testing parseint and step time
    console.log("first: " + startTime + ", " + currentTime);
    sketch.stroke(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.textFont('futura');
    currentTime = sketch.minute();
    if (currentTime == (startTime + parseInt(stepTime))) { //use this to change how many min
      console.log("mid1: " + startTime + ", " + currentTime)
      sketch.text(sketch.random(phrases), sketch.random(sketch.windowHeight), sketch.random(sketch.windowWidth));
      startTime = sketch.minute();
      // opacity += 20;
      console.log("mid2: " + startTime + ", " + currentTime)
    }
    if (currentTime == 0) {
      startTime = 0;
    }
    console.log("last: " + startTime + ", " + currentTime)
  }
}
  var myp5 = new p5(s);
