// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navBrand = document.querySelector('.nav-brand');
    const navTagline = document.querySelector('.nav-tagline');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
    
    if (window.scrollY > 50) {
        // Cambiar a fondo azul con texto blanco
        navbar.classList.remove('bg-white/95');
        navbar.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-900', 'shadow-lg');
        
        // Cambiar color del logo y marca
        if (navBrand) {
            navBrand.classList.remove('text-gray-900');
            navBrand.classList.add('text-white');
            const span = navBrand.querySelector('span');
            if (span) {
                span.classList.remove('text-blue-900');
                span.classList.add('text-white/90');
            }
        }
        if (navTagline) {
            navTagline.classList.remove('text-gray-500');
            navTagline.classList.add('text-white/80');
        }
        
        // Cambiar color de enlaces
        navLinks.forEach(link => {
            link.classList.remove('text-gray-700', 'hover:text-blue-900', 'hover:bg-blue-50');
            link.classList.add('text-white', 'hover:text-white', 'hover:bg-white/20');
        });
        
        // Cambiar icono del menú móvil
        if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('text-gray-700');
            mobileMenuIcon.classList.add('text-white');
        }
    } else {
        // Volver a fondo blanco con texto oscuro
        navbar.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-blue-900', 'shadow-lg');
        navbar.classList.add('bg-white/95');
        
        // Restaurar color del logo y marca
        if (navBrand) {
            navBrand.classList.remove('text-white');
            navBrand.classList.add('text-gray-900');
            const span = navBrand.querySelector('span');
            if (span) {
                span.classList.remove('text-white/90');
                span.classList.add('text-blue-900');
            }
        }
        if (navTagline) {
            navTagline.classList.remove('text-white/80');
            navTagline.classList.add('text-gray-500');
        }
        
        // Restaurar color de enlaces
        navLinks.forEach(link => {
            link.classList.remove('text-white', 'hover:text-white', 'hover:bg-white/20');
            link.classList.add('text-gray-700', 'hover:text-blue-900', 'hover:bg-blue-50');
        });
        
        // Restaurar icono del menú móvil
        if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('text-white');
            mobileMenuIcon.classList.add('text-gray-700');
        }
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
}

// Close mobile menu when clicking on a link
if (mobileMenu) {
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (target === 98 ? '%' : target === 15 ? '+' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (target === 98 ? '%' : target === 15 ? '+' : '+');
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItem = entry.target;
            const numberElement = statItem.querySelector('[data-target]');
            if (numberElement && !numberElement.classList.contains('animated')) {
                const target = parseInt(numberElement.getAttribute('data-target'));
                animateCounter(numberElement, target);
                numberElement.classList.add('animated');
            }
        }
    });
}, {
    threshold: 0.5
});

// Observe all stat items
document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe property cards, service cards, and testimonials
document.querySelectorAll('.property-card, .service-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(card);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// Property card click handler (solo si existe en la página)
const propertyCardButtons = document.querySelectorAll('.property-card button');
if (propertyCardButtons.length > 0) {
    propertyCardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const propertyCard = this.closest('.property-card');
            const propertyTitle = propertyCard.querySelector('h3').textContent;
            alert(`Has seleccionado: ${propertyTitle}\n\nEn una versión completa, esto abriría una página de detalles de la propiedad.`);
        });
    });
}

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-900', 'font-semibold');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-blue-900', 'font-semibold');
        }
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log('%c🏠 Premier Realtors', 'color: #1e3a8a; font-size: 24px; font-weight: bold;');
console.log('%cBienvenido a nuestro sitio web', 'color: #64748b; font-size: 14px;');
