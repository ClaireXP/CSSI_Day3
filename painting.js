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

let red = 0;
let color2 = 20;
let color3 = 50;
let color4 = 100;
let color5 = 175;
let color6 = 275;
let color7 = 350;
let color8 = 

let scale;
if(xCan<yCan){
  scale = xCan/50;
}else{
  scale = yCan/50;
}let w = scale*5

function setup() {  
  // Canvas & color settings
  createCanvas(xCan, yCan);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  refresh();
}

function draw() {
  colorChange();
  textSize(30);
}

function mouseDragged(){
  ellipse(mouseX, mouseY, scale);
  // prevent default
  return false;
}

function colorChange(){
  if(mouseY>yCan-w){
    
  }
}

function refresh(){
  background(175,0,95);
  fill(color1, 40, 80);
  
  fill(color1, 40, 80);
  rect(0,yCan-w,w);
  
  fill(color2, 40, 80);
  rect(w,yCan-w,w);
  
  fill(color3, 40, 80);
  rect(w*2,yCan-w,w);
  
  fill(color4, 40, 80);
  rect(w*3,yCan-w,w);
}