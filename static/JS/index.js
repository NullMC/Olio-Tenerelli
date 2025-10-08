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
    const logo = document.getElementById('logo');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'), { behavior: 'smooth' };
        navbarBrand.classList.add('scrolled'), { behavior: 'smooth' };
        logo.classList.remove('d-inline-block'), { behavior: 'smooth' };
        logo.classList.add('d-none'), { behavior: 'smooth' };
    } else {
        navbar.classList.remove('scrolled'), { behavior: 'smooth' };
        navbarBrand.classList.remove('scrolled'), { behavior: 'smooth' };
        logo.classList.remove('d-none'), { behavior: 'smooth' };
        logo.classList.add('d-inline-block'), { behavior: 'smooth' };
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