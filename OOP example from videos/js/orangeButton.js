import Button from "./button.js"

export default class OrangeButton extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height, text);
    this.backgroundColor = "#FD7F00";
  }
}
