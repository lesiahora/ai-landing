import './style.css'

// ===== Smooth Navigation ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Button Click Effects ===== */
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Show alert (you can replace with actual functionality)
        const text = this.textContent;
        if (text.includes('Start')) {
            alert('Thank you for your interest! We will contact you soon.');
        } else if (text.includes('Choose')) {
            alert('Proceeding to checkout...');
        } else if (text.includes('Contact')) {
            alert('Contact form. Coming soon.');
        }
    });
});

// ===== Intersection Observer for animations ===== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and pricing cards
document.querySelectorAll('.feature-card, .pricing-card, .step').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// ===== Navbar background change on scroll ===== */
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 66, 115, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(251, 124, 211, 0.1)';
    } else {
        header.style.background = 'rgba(13, 66, 115, 0.9)';
        header.style.boxShadow = 'none';
    }
});

// ===== Add CSS for ripple effect ===== */
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: rippleAnimation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Counter animation for pricing ===== */
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== Page load animation ===== */
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== Console message ===== */
console.log('%c🚀 AI Service Landing Page', 'color: #fb7cd3; font-size: 18px; font-weight: bold;');
console.log('%cWelcome to our service!', 'color: #466ec9; font-size: 14px;');
