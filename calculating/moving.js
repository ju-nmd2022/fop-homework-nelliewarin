background(255, 255, 255);

function emoji (x, y, s) {


fill(255, 200, 30);
ellipse(x, y, 200 * s);
}

let x = 150;
function draw() {
    emoji(x, 200, 1.0);
}
