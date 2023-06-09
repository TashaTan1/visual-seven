/***************************************************************************************
*    Title: sphere
*    Author: NataliaZhydeikina
*    Date: n.d.
*    Code version: 1.0
*    Availability: https://codepen.io/nataliazhydeikina/pen/BaPrdeE
*
***************************************************************************************/

//variables
let seven;
let timer = 5;
let button;

function preload() {
  // LOAD SOUND
  seven = loadSound("SEVEN.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  r = windowWidth < windowHeight ? windowWidth / 2 : windowHeight / 2;
  strokeWeight(r * 0.01);
  seven.play();
  seven.loop();
}

function sp() {
  background(0);
  stroke(67, 80, 200);
  noFill();
  translate(0, 0, -50);
  //animation for visual
  for (let phi = 0; phi < 180; phi += 2) {
    beginShape(POINTS);
    for (let theta = 0; theta <= 360; theta += 0.2) {
      let k = 1 + 0.2 * sin(theta * 6) * sin(phi * 5);
      let x = r * k * cos(phi);
      let y = r * k * sin(phi) * sin(theta);
      let z = r * k * sin(phi) * cos(theta);
      vertex(x, y, z);
    }
    endShape();
  }
}
let r = 200;
let angle = 0;
function draw() {
  orbitControl();
  rotateX(angle);
  sp();
  angle = (angle + 1) % 360;
//timer
  if (frameCount % 60 == 0 && timer > 0) {
   
    timer--;
  }
  //  console.log(timer);
  if (timer == 0) {
    button = createButton("Carry on Listening");
    button.position((width/2) -200, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://tashatan1.github.io/visual-seven/";
    });
    button = createButton("Let's Breath");
    button.position((width/2) +80, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://tashatan1.github.io/let-s-breath/";
    });
  }

  function windowResized() {
    createCanvas(windowWidth, windowHeight);
    r = windowWidth < windowHeight ? windowWidth / 2 : windowHeight / 2;
    strokeWeight(r * 0.01);
    sp();
  }
}
