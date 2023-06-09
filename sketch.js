/***************************************************************************************
*    Title: sphere
*    Author: NataliaZhydeikina
*    Date: n.d.
*    Code version: 1.0
*    Availability: https://codepen.io/nataliazhydeikina/pen/BaPrdeE
*
***************************************************************************************/

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

  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer--;
  }
  //  console.log(timer);
  if (timer == 0) {
    button = createButton("Carry on Listening");
    button.position(200, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://editor.p5js.org/natashatan/sketches/U4V7OlkOf";
    });
    button = createButton("Let's Breath");
    button.position(425, height/2);
    button.mousePressed(function goToAnotherPage() {
      window.location.href =
        "https://editor.p5js.org/natashatan/sketches/gxSMDJpDT";
    });
  }

  function windowResized() {
    createCanvas(windowWidth, windowHeight);
    r = windowWidth < windowHeight ? windowWidth / 2 : windowHeight / 2;
    strokeWeight(r * 0.01);
    sp();
  }
}
