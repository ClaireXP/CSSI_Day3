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

let r = 0;
let o = 20;
let y = 50;
let g = 100;
let b = 175;
let v = 275;
let p = 320;
let black = 0;
let white = 255;
let grey = 175;


let scale;
if(xCan<yCan){
  scale = xCan/50;
}else{
  scale = yCan/50;
}let h = (window.innerHeight-20)/20
let w = (window.innerWidth-15)/10;

function setup() {  
  // Canvas & color settings
  createCanvas(xCan, yCan);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  refresh();
}

function draw() {
  colorChange();
}

function mouseDragged(){
  ellipse(mouseX, mouseY, scale);
  // prevent default
  return false;
}

function colorChange(){
  if(mouseY>yCan-h){
    if(mouseX>0 && mouseX<w){
      col(r);
    }if(mouseX>w && mouseX<w*2){
      col(o);
    }if(mouseX>w*2 && mouseX<w*3){
      col(y);
    }if(mouseX>w*3 && mouseX<w*4){
      col(g);
    }if(mouseX>w*4 && mouseX<w*5){
      col(b);
    }if(mouseX>w*5 && mouseX<w*6){
      col(v);
    }if(mouseX>w*6 && mouseX<w*7){
      col(p);
    }if(mouseX>w*7 && mouseX<w*8){
      fill(black);
    }if(mouseX>w*8 && mouseX<w*9){
      fill(white);
    }if(mouseX>w*9 && mouseX<w*10){
      fill(grey, 0, 95);
    }
  }
}

function refresh(){
  background(175,0,95);
  
  col(r);
  rect(0,yCan-h,w,h);
  
  col(o);
  rect(w,yCan-h,w,h);
  
  col(y);
  rect(w*2,yCan-h,w,h);
  
  col(g);
  rect(w*3,yCan-h,w,h);
  
  col(b);
  rect(w*4,yCan-h,w,h);
  
  col(v);
  rect(w*5,yCan-h,w,h);
  
  col(p);
  rect(w*6,yCan-h,w,h);
  
  fill(black);
  rect(w*7,yCan-h,w,h);
  
  fill(white);
  rect(w*8,yCan-h,w,h);
  
  fill(grey, 0, 95);
  rect(w*9,yCan-h,w,h);
  
  fill(black);
  textSize(15);
  text("erase", xCan-w+w/3,yCan-h/2+h/9);
}

function col(color){
  fill(color, 40, 80);
}