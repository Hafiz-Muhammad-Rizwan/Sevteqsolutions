// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar nav');
    
    // Create menu toggle button if it doesn't exist
    if (!menuToggle) {
        const menuToggleBtn = document.createElement('button');
        menuToggleBtn.classList.add('menu-toggle');
        menuToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggleBtn.setAttribute('aria-label', 'Toggle navigation');
        
        const navbarContainer = document.querySelector('.navbar .container');
        if (navbarContainer) {
            navbarContainer.insertBefore(menuToggleBtn, navbarContainer.firstChild);
            
            // Toggle menu when button is clicked
            menuToggleBtn.addEventListener('click', function() {
                nav.classList.toggle('show');
                this.setAttribute('aria-expanded', 
                    this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            });
        }
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target) || 
                               (menuToggle && menuToggle.contains(event.target));
        
        if (!isClickInsideNav && window.innerWidth <= 768) {
            nav.classList.remove('show');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Close menu when a nav link is clicked (for single-page navigation)
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.classList.remove('show');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                nav.style.display = '';
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            } else {
                if (!nav.classList.contains('show')) {
                    nav.style.display = 'none';
                }
            }
        }, 250);
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});
