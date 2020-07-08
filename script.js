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
 */

let xCan = window.innerWidth-15;
let yCan = window.innerHeight-20;
let backgroundColor, color1, color2, textColor;
let globalSat, globalBri;

let scale;
if(xCan<yCan){
  scale = xCan/12;
}else{
  scale = yCan/12;
}

let size = scale;

function setup() {
  // Canvas & color settings
  createCanvas(xCan, yCan);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  globalSat = 40;
  globalBri = 80;
  
  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(275, globalSat, globalBri);
  color2 = color(175, globalSat, globalBri);
}

function draw() {
  trackMouse();
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLine();

  // The red and blue circles:  
  fill(color1);
  ellipse(xCan/4, yCan/2, scale);
  fill(color2);
  ellipse(3*xCan/4, yCan/2, scale);

  // The grey circle and the text:
  fill(textColor);
  stroke(textColor);
  text("Flip the switch", 20, 20);
  
  flip();
  ellipse(mouseX, mouseY, size);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  line(xCan/2, 0, xCan/2, yCan);
  noStroke();
}

function trackMouse(){
  if(mouseX<xCan/2){
    backgroundColor = color(95);
  }else{
    backgroundColor = color(0);
  }
  
  if(mouseY<yCan/2){
    size = scale*2;
  }else{
    size = scale*.5;
  }
}

function flip(){
  if(mouseX<xCan/2){
    if(mouseY>yCan/2-scale/2 && mouseY<yCan/2+scale/2){
      if(mouseX>xCan/4-scale/2 && mouseX<xCan/4+scale/2){
        
      }
    }
      
    fill(0);
    textColor = 0;
    
    color1 = color(275, globalSat, globalBri);
    color2 = color(175, globalSat, globalBri);
  }else{
    fill(255);
    textColor = 255;
    
    color2 = color(275, globalSat, globalBri);
    color1 = color(175, globalSat, globalBri);
  }
}
