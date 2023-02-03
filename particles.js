let particles = [];

function createParticle(x, y) {
  const v = 0.2 + Math.random();
  const a = Math.PI + Math.random() * Math.PI;
  const maxLife = 100 + Math.floor(Math.random() * 100);
  return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife};
}

function drawParticle(particle) {
  push();
  translate(particle.x, particle.y);
  noStroke();
  fill(255, 255, 255, 40);
  ellipse(0, 0, 6);
  pop();
}

function updateParticle(particle) {
  particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
  particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
  particle.velocity = particle.velocity * 0.99;
  particle.life = particle.life + 1;

  if (particle.life > particle.maxLife) {
    const particleIndex = particles.indexOf(particle);
    particles.splice(particleIndex, 1);
  }
}

function draw() {
  background(0, 0, 0);
  for (let particle of particles) {
    drawParticle(particle);
    updateParticle(particle);
  }

  if (mouseIsPressed) {
    for (let i = 0; i < 50; i++) {
      let particle = createParticle(mouseX, mouseY);
      particles.push(particle);
    }
  }
}
