let colors = [color(144, 78, 86), color(20, 20, 90)];
let centerColors = [];
const rectWidth = 20;

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return color(r, g, b);
}

frameRate(5);
function draw() {
  noStroke();

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(i * rectWidth, 0, rectWidth, height);
  }

  const newColor = generateColor();
  colors.push(newColor);

  if (colors.length > 40) {
    colors.shift();
  }

  for (let i = 0; i < centerColors.length; i++) {
    fill(centerColors[i]);
    rect(i * rectWidth, height / 2 - 100, rectWidth, 200);
  }

  const newCenterColor = generateColor();
  centerColors.unshift(newCenterColor);

  if (centerColors.length > 40) {
    centerColors.pop();
  }
}
