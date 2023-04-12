function setup() {
  createCanvas(500, 500);
}
class Button {
  constructor(x, y, width, height, text, callback) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.backgroundColor = "#DCDCDC";
    this.callback = callback;
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke(0, 105, 100);
    strokeWeight(4);
    fill(this.backgroundColor);
    rect(0, 0, this.width, this.height, this.height / 2);
    noStroke();
    fill(0, 105, 100);
    textSize(this.height / 2);
    textAlign(CENTER);
    text(this.text, 0, this.height / 3.5, this.width);
    pop();
  }

  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.callback();
    }
  }
}

class OrangeButton extends Button {
  constructor(x, y, width, height, text, callback) {
    super(x, y, width, height, text, callback);
    this.backgroundColor = "#FD7F00";
  }
}

const partyButton = new Button(50, 100, 160, 60, "PARTY", () => {
  console.log("lets go to aka!!");
});
const examButton = new Button(100, 200, 50, 20, "EXAM", () => {
  console.log("wow you´re boring..");
});
const snoozeButton = new OrangeButton(50, 260, 160, 60, "SNOOZE", () => {
  console.log("you snooze you lose");
});

function draw() {
  background(255);
  if (mouseIsPressed) {
    if (partyButton.hitTest(mouseX, mouseY)) {
      background(253, 127, 0);
    } else if (examButton.hitTest(mouseX, mouseY)) {
      background(0);
    } else if (snoozeButton.hitTest(mouseX, mouseY)) {
      background(200, 0, 250);
    }
  }
  partyButton.draw();
  examButton.draw();
  snoozeButton.draw();
}

function mouseClicked() {
  partyButton.mouseClicked();
  examButton.mouseClicked();
  snoozeButton.mouseClicked();
}
