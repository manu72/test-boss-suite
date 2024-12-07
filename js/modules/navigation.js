// Navigation enhancement module

export class NavigationManager {
    constructor() {
        // Initialize properties
        this.header = document.querySelector('header');
        this.sections = Array.from(document.querySelectorAll('section'));
        this.navMenu = null;
        this.backToTopBtn = null;

        // Set up the navigation system
        this.init();
    }

    init() {
        this.createNavigationMenu();
        this.createBackToTopButton();
        this.setupScrollListeners();
        this.setupIntersectionObserver();
    }

    createNavigationMenu() {
        // Create floating navigation menu
        this.navMenu = document.createElement('nav');
        this.navMenu.className = 'floating-nav';
        
        const navList = document.createElement('ul');
        
        // Create navigation items from sections
        this.sections.forEach(section => {
            const title = section.querySelector('h2')?.textContent || section.id;
            const item = document.createElement('li');
            const link = document.createElement('a');
            
            link.href = `#${section.id}`;
            link.textContent = title;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                section.scrollIntoView({ behavior: 'smooth' });
            });
            
            item.appendChild(link);
            navList.appendChild(item);
        });
        
        this.navMenu.appendChild(navList);
        document.body.appendChild(this.navMenu);
    }

    createBackToTopButton() {
        this.backToTopBtn = document.createElement('button');
        this.backToTopBtn.className = 'back-to-top hidden';
        this.backToTopBtn.innerHTML = '↑';
        this.backToTopBtn.setAttribute('aria-label', 'Back to top');
        
        this.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        document.body.appendChild(this.backToTopBtn);
    }

    setupScrollListeners() {
        // Use requestAnimationFrame for smooth scroll handling
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        // Show/hide back to top button based on scroll position
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) {
            this.backToTopBtn.classList.remove('hidden');
        } else {
            this.backToTopBtn.classList.add('hidden');
        }
        
        // Update navigation highlighting
        this.updateActiveNavItem();
    }

    setupIntersectionObserver() {
        // Create observer for section visibility
        const options = {
            rootMargin: '-50px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavItem(entry.target.id);
                }
            });
        }, options);

        // Observe all sections
        this.sections.forEach(section => observer.observe(section));
    }

    updateActiveNavItem(activeId = null) {
        // Remove active class from all nav items
        const navLinks = this.navMenu.querySelectorAll('a');
        navLinks.forEach(link => link.classList.remove('active'));

        if (activeId) {
            // Add active class to current section's nav item
            const activeLink = this.navMenu.querySelector(`a[href='#${activeId}']`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
}
