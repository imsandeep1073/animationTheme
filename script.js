// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in classes
    const fadeElements = document.querySelectorAll('.fade-in-move-on-scroll, .fade-in-on-scroll');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

<<<<<<< HEAD
    // Parallax effect for hero section
    const heroTextHolder = document.querySelector('.hero-text-holder');
    const iphoneHolder = document.querySelector('.iphone-holder');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroTextHolder) {
            heroTextHolder.style.transform = `translateY(${rate}px)`;
        }
        
        if (iphoneHolder) {
            iphoneHolder.style.transform = `translateY(${rate * 0.3}px)`;
        }
=======
    // Enhanced parallax effect for hero section
    const heroTextHolder = document.querySelector('.hero-text-holder');
    const iphoneHolder = document.querySelector('.iphone-holder');
    const heroSection = document.querySelector('[data-w-id="bbb1681c-62a0-7375-a529-1c7bec5a4a0e"]');
    
    // Hero section scroll effects
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        
        if (heroTextHolder) {
            // Parallax movement with slight rotation
            heroTextHolder.style.transform = `translateY(${rate}px) perspective(1000px) rotateX(${scrollProgress * 5}deg)`;
        }
        
        if (iphoneHolder) {
            // iPhone moves slower and scales slightly
            const iphoneRate = rate * 0.5;
            const scale = 1 - (scrollProgress * 0.1);
            iphoneHolder.style.transform = `translateY(${iphoneRate}px) scale(${scale})`;
        }
        
        // Add blur effect to hero text on scroll
        const heroTexts = document.querySelectorAll('.hero-text-animated');
        heroTexts.forEach(text => {
            const blur = scrollProgress * 10;
            text.style.filter = `blur(${blur}px)`;
            text.style.opacity = 1 - (scrollProgress * 0.7);
        });
>>>>>>> feature/website-replica
    });

    // Form handling
    const emailForm = document.getElementById('email-form');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                // Show success message
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                emailInput.value = '';
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            } else {
                // Show error message
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                
                // Hide error message after 3 seconds
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        });
    }

    // Navbar active state
    const sections = document.querySelectorAll('section, .section');
    const navLinkHolders = document.querySelectorAll('.nav-link-holder');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkHolders.forEach(link => {
            link.classList.remove('w--current');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('w--current');
            }
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.experience-card, .card-background, .trusted-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Logo hover effects
    const logos = document.querySelectorAll('.logo-small, .logo-image');
    logos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.button, .download-badge-button, .social-media-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Sticky navigation background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Experience card light effects
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const lightWrapper = this.querySelector('.light-wrapper-in-front');
            if (lightWrapper) {
                lightWrapper.style.display = 'flex';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const lightWrapper = this.querySelector('.light-wrapper-in-front');
            if (lightWrapper) {
                lightWrapper.style.display = 'none';
            }
        });
    });

    // Integration section logo animations
    const integrationLogos = document.querySelectorAll('.logo-holder');
    integrationLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            const bluredLogo = this.querySelector('.logo-image.blured');
            if (bluredLogo) {
                bluredLogo.style.display = 'block';
            }
        });
        
        logo.addEventListener('mouseleave', function() {
            const bluredLogo = this.querySelector('.logo-image.blured');
            if (bluredLogo) {
                bluredLogo.style.display = 'none';
            }
        });
    });

    // Dark/Light mode section parallax
    const darkModeHolder = document.querySelector('.dark-mode-holder');
    const whiteModeHolder = document.querySelector('.white-mode-holder');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.1;
        
        if (darkModeHolder) {
            darkModeHolder.style.transform = `translateY(${rate}px)`;
        }
        
        if (whiteModeHolder) {
            whiteModeHolder.style.transform = `translateY(${-rate}px)`;
        }
    });

    // Features section sticky effect
    const trustedList = document.querySelector('.trusted-list');
    const trustedOverlay = document.querySelector('.trusted-overlay-container');
    
    if (trustedList && trustedOverlay) {
        window.addEventListener('scroll', function() {
            const rect = trustedList.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                trustedOverlay.style.opacity = '1';
            } else {
                trustedOverlay.style.opacity = '0';
            }
        });
    }

    // Download badges hover effect
    const downloadBadges = document.querySelectorAll('.download-badge-button');
    downloadBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Footer social media links
    const socialLinks = document.querySelectorAll('.social-media-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Mobile menu toggle (if needed)
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

<<<<<<< HEAD
=======
    // Initialize hero section animations
    function initHeroAnimations() {
        // Force trigger hero animations on load
        const heroSection = document.querySelector('[data-w-id="bbb1681c-62a0-7375-a529-1c7bec5a4a0e"]');
        if (heroSection) {
            heroSection.classList.add('hero-loaded');
        }
        
        // Add stagger effect to hero elements
        const heroElements = [
            document.querySelector('[data-w-id="hero-text-meet"]'),
            document.querySelector('[data-w-id="hero-text-black"]'),
            document.querySelector('[data-w-id="hero-iphone"]'),
            document.querySelector('[data-w-id="hero-content"]'),
            document.querySelector('[data-w-id="hero-logos"]')
        ];
        
        heroElements.forEach((el, index) => {
            if (el) {
                setTimeout(() => {
                    el.classList.add('hero-element-loaded');
                }, index * 200);
            }
        });
    }

>>>>>>> feature/website-replica
    // Initialize animations on page load
    function initAnimations() {
        // Trigger initial fade-in animations
        const initialElements = document.querySelectorAll('.fade-in-move-on-scroll, .fade-in-on-scroll');
        initialElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }

<<<<<<< HEAD
    // Call initialization after a short delay
=======
    // Call hero animations immediately
    initHeroAnimations();
    
    // Call other animations after a short delay
>>>>>>> feature/website-replica
    setTimeout(initAnimations, 500);

    // Performance optimization: Throttle scroll events
    let ticking = false;
    
    function updateScrollAnimations() {
        // Update scroll-based animations here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollAnimations);
            ticking = true;
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 767px) {
            .nav-menu {
                display: none;
            }
            
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(33, 33, 33, 0.95);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                margin-top: 10px;
                padding: 20px;
            }
            
            .menu-button.active .center-box {
                transform: rotate(45deg);
            }
        }
    `;
    document.head.appendChild(style);

    // Add smooth reveal animation for cards
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedCards = document.querySelectorAll('.card-background, .experience-card, .trusted-item');
    animatedCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Add typing effect for hero text (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect if needed
    const heroTextElement = document.querySelector('.hero-text');
    if (heroTextElement && window.innerWidth > 768) {
        // Uncomment to enable typing effect
        // typeWriter(heroTextElement, 'Meet Black', 150);
    }

    console.log('Az Black website replica loaded successfully!');
});