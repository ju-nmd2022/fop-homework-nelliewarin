background(100, 100, 100);
noStroke();

const size = 30;
const lenght = 10;

for (let x = 0; x < lenght; x++) {
  for (let y = 0; y < lenght; y++) {
    if (y % 2 === 0) {
      if (x % 2 === 0) {
        fill(189, 253, 176);
      } else {
        fill(240, 176, 253);
      }
    } else {
      if (x % 2 === 0) {
        fill(240, 176, 253);
      } else {
        fill(189, 253, 176);
      }
    }

    rect(x * size, y * size, size, size);
  }
}
