/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                                               
1) Try out HSB colors
2) Use a new function
3) Respond to canvas size
4) Use the mouse position to move the gray circle
5) Flip the switch!

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

6) Build in another toggle that responds to vertical movement
   across the center of the screen.
7) Build a painting app with colored rectangles in the corners.
   Each time you move your mouse to a corner, have the background
   change to match that color.
8) Make your logo(s) change color when the mouse goes over them
   (or close to them, if that's easier).

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    HSB,
 *    background,
 *    color,
 *    colorMode,
 *    createCanvas,
 *    ellipse,
 *    fill,
 *    line,
 *    noStroke,
 *    stroke,
 *    text,
 *    mouseX,
 *    mouseY,
 *    textSize,
 *    rect,
 */

let xCan = window.innerWidth-15;
let yCan = window.innerHeight-20;

let color1, color2, color3, color4;

let scale;
if(xCan<yCan){
  scale = xCan/50;
}else{
  scale = yCan/50;
}

function setup() {
  // Canvas & color settings
  createCanvas(xCan, yCan);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  background(175,0,95);
}

function draw() {
  textSize(30);
  
  fill(275,40,80);
  rect(0,0,scale*5);
}

function mouseDragged(){
  ellipse(mouseX, mouseY, 5);
  // prevent default
  return false;
}

function colors(){
  if(mouseX>0 && mouseX<scale*5){
    if(mouseY>0 && mouseY<scale*5){
      stroke(color1);
    }if(mouseY>yCan-scale*5 && mouseY<yCan){
      stroke(color1);
    }
  }
}