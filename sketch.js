function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 182, 193);
}

function draw() {
  noStroke();
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(255, 0, 0);
    } else {
      fill(255, 128, 128);
    }
  } else {
    if (mouseY < height / 2) {
      fill(0, 191, 255);
    } else {
      fill(0);
    }
  }
  circle(400, 150, 150);
  circle(800, 150, 150);
    if (mouseIsPressed) {
      arc(600, 450, 500, 200, 0, PI);
    } else {
      arc(600, 450, 500, 200, PI, TWO_PI);
    }
  }
