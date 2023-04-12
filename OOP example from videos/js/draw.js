import Button from "./button.js";
import OrangeButton from "./orangeButton.js";

function setup() {
  createCanvas(500, 500);
}

window.setup = setup;

const partyButton = new Button(160, 140, 160, 60, "PARTY");
const examButton = new Button(210, 240, 50, 20, "EXAM");
const snoozeButton = new OrangeButton(160, 300, 160, 60, "SNOOZE");

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

window.draw = draw;