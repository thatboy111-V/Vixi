// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set active link on page load
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Floating hearts initialization
    initFloatingHearts();

    // Intersection observer for animations
    observeElements();
});

// Initialize floating hearts with random positions
function initFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    if (!heartsContainer) return;

    const hearts = heartsContainer.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.setProperty('--index', index);
        heart.style.left = Math.random() * 100 + '%';
    });
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.visibility = 'visible';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .fade-in-left, .fade-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Create interactive cursor effect
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    // Optional: Add hover effects to interactive elements
    const elements = document.querySelectorAll('.btn, .feature-card, .nav-links a');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const elX = rect.left + rect.width / 2;
        const elY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(Math.pow(x - elX, 2) + Math.pow(y - elY, 2));
        
        if (distance < 100) {
            el.style.cursor = 'pointer';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

// Add page transition effects
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.9';
});

// Prevent page reload on internal links
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.getAttribute('href').startsWith('http') && !this.getAttribute('href').startsWith('#')) {
            // Let default behavior handle internal navigation
            console.log('Navigating to:', this.getAttribute('href'));
        }
    });
});
