document.addEventListener('DOMContentLoaded', () => {
  const mainText = document.getElementById('main-text');
  const textArray = ['Coming Soon!'];
  let currentText = 0;
  let currentChar = 0;

  // Clear initial text content
  mainText.textContent = '';

  // Function for typing effect
  function typeEffect() {
    if (currentChar < textArray[currentText].length) {
      mainText.textContent += textArray[currentText].charAt(currentChar);
      currentChar++;
      setTimeout(typeEffect, 100);
    }
  }

  // Start typing effect
  setTimeout(typeEffect, 1000);

  // Create random floating particles
  setInterval(() => {
    createParticle();
  }, 300);

  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const size = Math.random() * 8 + 5;
    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 255)}, 150, 0.7)`;
    particle.style.animationDuration = `${Math.random() * 4 + 2}s`;

    setTimeout(() => {
      particle.remove();
    }, 6000);
  }
});
