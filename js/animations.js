// Advanced animation utilities

// Text animation - typewriter effect
function typeWriterEffect(element, text, speed = 50) {
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Particle effect on click
function createParticleEffect(x, y) {
    const particles = [];
    const colors = ['#ff1654', '#ff69b4', '#ffd700', '#ff00ff'];
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = {
            x: Math.cos(angle) * 5,
            y: Math.sin(angle) * 5
        };
        
        let posX = x;
        let posY = y;
        let life = 1;
        
        const animate = () => {
            life -= 0.02;
            posX += velocity.x;
            posY += velocity.y;
            velocity.y += 0.1; // gravity
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = life;
            
            if (life > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Click anywhere to create particle effect
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON') {
        createParticleEffect(e.clientX, e.clientY);
    }
});

// Text split animation
function splitText(element) {
    const text = element.innerText;
    let html = '';
    
    for (let i = 0; i < text.length; i++) {
        html += `<span style="animation: slideInDown 0.5s ease-out ${i * 0.05}s backwards;">${text[i]}</span>`;
    }
    
    element.innerHTML = html;
}

// Animate numbers counting up
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff1654', '#ff69b4', '#ffd700', '#00ff88', '#00d4ff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const xVel = (Math.random() - 0.5) * 8;
        const yVel = Math.random() * 3 + 2;
        const rotation = Math.random() * 360;
        
        let posX = parseInt(confetti.style.left);
        let posY = 0;
        let angle = rotation;
        
        const animate = () => {
            posX += xVel;
            posY += yVel;
            angle += 10;
            
            confetti.style.left = posX + 'px';
            confetti.style.top = posY + 'px';
            confetti.style.transform = `rotate(${angle}deg)`;
            
            if (posY < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        animate();
    }
}

// Scroll reveal animation
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', scrollReveal);

// Glow effect on mouse move
document.addEventListener('mousemove', function(e) {
    const glowElements = document.querySelectorAll('.glow-button');
    glowElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            element.style.boxShadow = `
                0 0 20px rgba(255, 22, 84, 0.8),
                0 0 40px rgba(255, 105, 180, 0.6),
                ${(x - rect.width / 2) * 0.1}px ${(y - rect.height / 2) * 0.1}px 20px rgba(255, 215, 0, 0.3)
            `;
        }
    });
});

// Smooth reveal on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    scrollReveal();
});

// Handle touch events for mobile
document.addEventListener('touchmove', function() {
    scrollReveal();
});

// Create bubble effect
function createBubbles(count = 5) {
    const colors = ['#ff1654', '#ff69b4', '#ffd700'];
    
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'fixed';
        bubble.style.borderRadius = '50%';
        bubble.style.border = '2px solid ' + colors[Math.floor(Math.random() * colors.length)];
        bubble.style.width = Math.random() * 100 + 50 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.left = Math.random() * window.innerWidth + 'px';
        bubble.style.top = window.innerHeight + 'px';
        bubble.style.opacity = '0.3';
        bubble.style.pointerEvents = 'none';
        bubble.style.zIndex = '10';
        
        document.body.appendChild(bubble);
        
        const xVel = (Math.random() - 0.5) * 4;
        const yVel = -Math.random() * 2 - 1;
        
        let posX = parseInt(bubble.style.left);
        let posY = window.innerHeight;
        
        const animate = () => {
            posX += xVel;
            posY += yVel;
            
            bubble.style.left = posX + 'px';
            bubble.style.top = posY + 'px';
            
            if (posY > -200) {
                requestAnimationFrame(animate);
            } else {
                bubble.remove();
            }
        };
        
        animate();
    }
}

// Create bubbles periodically
setInterval(() => {
    if (Math.random() > 0.7) {
        createBubbles(1);
    }
}, 1000);

// Add utility class
window.animationUtils = {
    typeWriter: typeWriterEffect,
    particle: createParticleEffect,
    splitText: splitText,
    counter: animateCounter,
    confetti: createConfetti,
    bubbles: createBubbles
};
