function calculateCenter(position, size){
    return size / 2 + position;
}

const w = 200;
const h = 300;

fill(255, 0, 255);
rect(100, 100, w, h);

const x = calculateCenter(100, w);
const y = calculateCenter(100, h);

fill(0, 255, 255);
ellipse(x, y, 50);