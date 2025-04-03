document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.shape').forEach((shape, index) => {
        const speed = 0.2 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});