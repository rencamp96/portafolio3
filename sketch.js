////////////////////////////////////////////////
// VARIABLES ///////////////////////////////////
////////////////////////////////////////////////

var canvas;

var sec;
var trans;

var Y_AXIS = 1;
var X_AXIS = 2;
var cf1, cf2, cf3, cf4, cf5, cf6, cf7, cf8;

var sec = 440;
var trans = 200;
var por = 150;

////////////////////////////////////////////////
// FUNCIONES ///////////////////////////////////
////////////////////////////////////////////////

function setup() {
  canvas = createCanvas(displayWidth, 4800);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  ////////////////////////////////////////////////
  // COLORES PARA EL FONDO ///////////////////////
  ////////////////////////////////////////////////

  cf1 = color(255);
  cf2 = color(220, 255, 250);
  cf3 = color(223, 255, 221);
  cf4 = color(245,225,255);
  cf5 = color(252, 255, 210);
  cf6 = color(220, 255, 250);
  cf7 = color(217, 211, 255);
  noLoop();
}

function draw() {

  fill(cf1);
  rect(0, 0, width, 450);

  setGradient(0, 450, width, 150, cf1, cf2, Y_AXIS);
  fill(cf2);
  rect(0, 600, width, 700);

  setGradient(0, 1300, width,150, cf2, cf3, Y_AXIS);
  fill(cf3);
  rect(0, 1450, width, 550);

  setGradient(0, 1900, width, 300, cf3, cf4, Y_AXIS);
  fill(cf4);
  rect(0, 2200, width, 450);
  
  setGradient(0, 2650, width, 300, cf4, cf5, Y_AXIS);
  fill(cf5);
  rect(0, 2950, width, 300);
  
  setGradient(0, 3250, width, 300, cf5, cf6, Y_AXIS);
  fill(cf6);
  rect(0, 3550, width, 400);
  
  setGradient(0, 3950, width, 300, cf6, cf7, Y_AXIS);
  fill(cf7);
  rect(0, 4250, width, 4550);
  
  
  stroke(0);
  strokeWeight(5);
  fill(50, 50, 50);
  line((windowWidth / 2), 120, (windowWidth / 2), 4750);
  ellipse((width / 2), 100, 35, 35);
  ellipse((width / 2), 800, 35, 35);
  ellipse((width / 2), 1440, 35, 35);
  ellipse((width / 2), 2130, 35, 35);
  ellipse((width / 2), 2780, 35, 35);
  ellipse((width / 2), 3420, 35, 35);
  ellipse((width / 2), 4065, 35, 35);
  ellipse((width / 2), 4745, 35, 35);

}


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}