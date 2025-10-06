// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbarBrand.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbarBrand.classList.remove('scrolled');
    }
});

// Smooth scroll with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Parallax effect on hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});