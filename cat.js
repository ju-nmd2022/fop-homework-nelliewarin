background(160, 218, 254);
noStroke();
fill(236, 218, 199);

//Ears
function ear(xEar, yEar) {
  fill(218, 196, 181);
  triangle(xEar + 20, yEar + 10, xEar - 30, yEar - 10, xEar + 45, yEar - 5);

  push();
  translate(xEar, yEar);
  rotate(0.3);
  translate(-xEar, -yEar);
  fill(236, 218, 199);
  arc(xEar, yEar, 60, 70, 0, PI, PIE);

  fill(218, 196, 181);
  arc(xEar + 5, yEar + 5, 55, 60, 0, PI, PIE);
  pop();
}

//Head
function head(x, y) {
  beginShape();
  fill(236, 218, 199);
  vertex(x - 15, y + 65);
  bezierVertex(x - 15, y - 35, x + 185, y - 35, x + 185, y + 65);
  bezierVertex(x + 115, y + 165, x + 55, y + 165, x - 15, y + 65);
  endShape();
}

//Eyes
function eye(xEye, yEye) { 

fill(255, 255, 255);
ellipse(xEye, yEye, 30);

fill(217, 113, 49);
ellipse(xEye, yEye, 25);

fill(0, 0, 0);
ellipse(xEye, yEye, 10, 20);


beginShape();
fill(218, 196, 181);

vertex(xEye - 25, yEye - 7);
bezierVertex(xEye - 10, yEye - 20, xEye + 15, yEye - 30, xEye + 20, yEye + 10);
bezierVertex(xEye + 12, yEye - 10, xEye + 5, yEye - 10, xEye - 25, yEye - 7);
endShape();
}

//Calling the functions
ear(105, 135);
push();
scale(-1, 1);
ear(-275, 135);
pop();

head(105, 135);

push();
translate(160, 200);
rotate(0.1);
eye(-5, 5);
pop();

push();
translate(220, 200);
scale(-1, 1);
rotate(0.1);
eye(-5, 5);
pop();


//Nose
push();
translate(190, 210);

fill(241, 227, 213);
beginShape();
vertex(-10, 25);
bezierVertex(-10, -5, 10, -5, 10, 25);
endShape();

fill(249, 167, 212);
beginShape();
vertex(-10, 25);
bezierVertex(-10, 20, 10, 20, 10, 25);
endShape();

triangle(0, 35, -10, 25, 10, 25);
stroke(249, 167, 212, 180);
line(0, 35, 0, 45);
line(0, 45, 10, 50);
line(0, 45, -10, 50);




pop();