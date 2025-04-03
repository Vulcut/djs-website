// Loading screen transition
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true,
    useDelay: 'onload',
    viewFactor: 0.2
});

// Reveal elements
sr.reveal('.service-card', { interval: 100 });
sr.reveal('h2', { origin: 'left' });
sr.reveal('.contact-info', { origin: 'right' });
sr.reveal('.hero-content', { origin: 'top', distance: '30px' });
sr.reveal('.social-links', { origin: 'bottom', distance: '20px' });
sr.reveal('footer p', { origin: 'bottom', distance: '10px' });

// Dynamic gradient effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.documentElement.style.setProperty('--gradient-1', 
        `linear-gradient(${x * 45 + 135}deg, 
        #0a1a2f 0%, 
        #1a2f4f ${y * 100}%)`);
});