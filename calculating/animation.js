let y = 100;
let h = 50
;
function draw () {
    clear();
    ellipse(100, y, 50);
    rect(150, 75, 50, h);

    y = y + 1.5;
    h = h + 2;
}