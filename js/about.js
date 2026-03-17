/* ==================== START MOBILE MENU TOGGLE (About & Terms) ==================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('About/Terms JS loaded');
    
    // Detect which page we're on
    const isAboutPage = document.body.classList.contains('about-page');
    const isTermsPage = document.body.classList.contains('terms-page');
    
    // Select elements based on page
    let hamburger, mobileMenu, overlay, mobileLinks;
    
    if (isAboutPage) {
        console.log('About page detected');
        hamburger = document.querySelector('.about-hamburger');
        mobileMenu = document.querySelector('.about-mobile-menu');
        overlay = document.querySelector('.about-overlay');
        mobileLinks = document.querySelectorAll('.about-mobile-menu a');
    } else if (isTermsPage) {
        console.log('Terms page detected');
        hamburger = document.querySelector('.terms-hamburger');
        mobileMenu = document.querySelector('.terms-mobile-menu');
        overlay = document.querySelector('.terms-overlay');
        mobileLinks = document.querySelectorAll('.terms-mobile-menu a');
    }
    
    // Toggle mobile menu function
    function toggleMenu() {
        if (!mobileMenu || !overlay) return;
        
        const isActive = mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
        
        console.log('Menu toggled:', isActive);
    }
    
    // Close menu function
    function closeMenu() {
        if (!mobileMenu || !overlay) return;
        
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        console.log('Menu closed');
    }
    
    // Setup hamburger button
    if (hamburger) {
        console.log('Hamburger button found');
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    } else {
        console.error('Hamburger button NOT found!');
    }
    
    // Close when clicking overlay
    if (overlay) {
        console.log('Overlay found');
        overlay.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }
    
    // Close when clicking a mobile link
    if (mobileLinks && mobileLinks.length > 0) {
        console.log('Mobile links found:', mobileLinks.length);
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Click outside mobile menu to close (on mobile)
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            // Don't close if clicking inside menu or on hamburger
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        }
    });
    
    console.log('About/Terms mobile menu initialization complete');
});
/* ==================== END MOBILE MENU TOGGLE (About & Terms) ==================== */