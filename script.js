/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                                               
1) Make the DVD logo move
2) Bounce
3) Move and bounce diagonally
4) Respond to canvas size

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

4) Build in another toggle that responds to vertical movement
   across the center of the screen.
5) Build a painting app with colored rectangles in the corners.
   Each time you move your mouse to a corner, have the background
   change to match that color.

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    HSB,
 *    background,
 *    circle,
 *    color,
 *    colorMode,
 *    createCanvas,
 *    ellipse,
 *    fill,
 *    height,
 *    line,
 *    mouseX,
 *    mouseY,
 *    noStroke,
 *    resizeCanvas,
 *    stroke,
 *    text,
 *    width,
 *    windowHeight,
 *    windowWidth,
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let isDarkTheme = mouseX > width / 2;

  background(isDarkTheme ? 50 : 205);
  
  stroke(isDarkTheme ? 205 : 50);
  line(width / 2, 0, width / 2, height);
  
  fill(isDarkTheme ? 205 : 50);
  text('Flip the switch', 10, 20);
  
  noStroke();
  
  fill(isDarkTheme ? 'blue' : 'red');
  circle(width / 4, height / 2, width / 10);
  
  fill(isDarkTheme ? 'red' : 'blue');
  circle(3 * width / 4, height / 2, width / 10);
  
  fill(isDarkTheme ? 205 : 50);
  circle(mouseX, mouseY, width / 10);
}