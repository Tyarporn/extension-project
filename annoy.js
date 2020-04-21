console.log('first');//debug to know its running
var s = function(sketch) {//instance mode
  console.log('second');//debug to know when instance mode is active
  var phrases = ["Wake up and smell the roses!", "It's time to go outside", "Are you really gonna waste another minute here?", "I hear its a beautiful day today!", "You look fine...show it to the world!", "Corona virus can't bring you down"];//arbitrary phrases
  var currentTime;
  var startTime;
  var canvas;
  var stepTime;
chrome.storage.sync.get(['time'], function(result) {//syncs the time from options to steptime
  console.log('Value currently is ' + result.time);//check if options worked
      stepTime = result.time;
      });

  sketch.setup = function() {//setup needs sketch. due to instance mode
    canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -10);
    startTime = sketch.minute();//initialize start time with the current minutes
    currentTime = sketch.minute();//initialize current time with current minutes
    canvas.style('pointer-events', 'none'); //allows user to click on things
    //background(255);//testing canvas size
    //sketch.frameRate(1);//slows sketch down
  //  console.log('setting up, ' + stepTime);
  }

  sketch.draw = function() {//draw needs sketch. due to instance mode
console.log(parseInt(stepTime)+3);//testing parseint and step time
    console.log("first: " + startTime + ", " + currentTime);//testing if draw loops
    sketch.stroke(sketch.random(255), sketch.random(255), sketch.random(255));
    sketch.textFont('futura');
    currentTime = sketch.minute();//updates current time every loop
    if (currentTime == (startTime + parseInt(stepTime))) { //use this to change how many min; runs if current time is x amount of mins away from start time
      console.log("mid1: " + startTime + ", " + currentTime)//test if loop works
      sketch.text(sketch.random(phrases), sketch.random(sketch.windowHeight), sketch.random(sketch.windowWidth));
      startTime = sketch.minute();//update start time to begin new cycle
      console.log("mid2: " + startTime + ", " + currentTime)//test if phrase popped up
    }
    if (currentTime == 0) {//resets times every cycle
      startTime = 0;
    }
    console.log("last: " + startTime + ", " + currentTime)//test when you exit draw
  }
}
  var myp5 = new p5(s);//initialize the p5 sketch
