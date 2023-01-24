background(255, 255, 255);

fill(243, 210, 155);
noStroke();

beginShape();
vertex(100, 200);
bezierVertex(100, 100, 300, 100, 300, 200);
bezierVertex(230, 300, 170, 300, 100, 200);
endShape();

push();
translate(115, 135);
rotate(0.15);
arc(0, 0, 60, 70, 0, PI, PIE);
pop();

