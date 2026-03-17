/* ==================== START TERMS PAGE MOBILE MENU ==================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== Terms Page Initialized ===');
    
    // Select Terms page elements
    const hamburger = document.querySelector('.terms-hamburger');
    const mobileMenu = document.querySelector('.terms-mobile-menu');
    const overlay = document.querySelector('.terms-overlay');
    const mobileLinks = document.querySelectorAll('.terms-mobile-menu a');
    
    // Verify elements exist
    if (!hamburger) {
        console.error('Terms hamburger button NOT found!');
        return;
    }
    if (!mobileMenu) {
        console.error('Terms mobile menu NOT found!');
        return;
    }
    if (!overlay) {
        console.error('Terms overlay NOT found!');
        return;
    }
    
    console.log('Terms mobile menu elements found');
    
    // Toggle mobile menu
    function toggleTermsMenu() {
        const isActive = mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
        console.log('Terms menu toggled:', isActive);
    }
    
    // Close mobile menu
    function closeTermsMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log('Terms menu closed');
    }
    
    // Hamburger click
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTermsMenu();
    });
    
    // Overlay click
    overlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeTermsMenu();
    });
    
    // Mobile link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeTermsMenu();
        });
    });
    
    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeTermsMenu();
        }
    });
    
    // Click outside menu
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeTermsMenu();
            }
        }
    });
    
    console.log('=== Terms Page Mobile Menu Ready ===');
});
/* ==================== END TERMS PAGE MOBILE MENU ==================== */