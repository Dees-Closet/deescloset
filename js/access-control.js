/* ==================== START ACCESS CONTROL ==================== */

/* ==================== CONFIGURATION ==================== */
/* DEADLINE: Unix Timestamp in milliseconds */
/* Your timestamp: 1773856800 (seconds) × 1000 = 1773856800000 (milliseconds) */
const ACCESS_DEADLINE = 1773774900000;
/* ==================== END CONFIGURATION ==================== */

(function() {
    const now = new Date().getTime();
    
    // Check if deadline has passed
    if (now > ACCESS_DEADLINE) {
        console.log('Access denied: Preview period expired.');
        
        // Hide all content and show 404-style page
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: linear-gradient(135deg, #f8c6d8 0%, #c6a5f8 100%);
                color: #333;
                font-family: 'Inter', sans-serif;
                text-align: center;
                padding: 20px;
            ">
                <div style="
                    font-size: 6rem;
                    font-weight: 700;
                    color: #ff69b4;
                    margin-bottom: 10px;
                    text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
                ">404</div>
                <h1 style="font-size: 2rem; margin-bottom: 15px; color: #333;">Website Unavailable</h1>
                <p style="font-size: 1.1rem; color: #555; max-width: 500px; margin-bottom: 30px; line-height: 1.6;">
                    This preview has expired. The website is currently unavailable.<br>
                    Please contact Bright Minds Software for access.
                </p>
                <a href="https://wa.me/254745736283?text=Hello%20Bright%20Minds%2C%20I%20need%20access%20to%20Dee's%20Closet" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style="
                    padding: 12px 30px;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: 600;
                    transition: 0.3s;
                    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <span style="font-size: 1.2rem;">📱</span>
                    <span>Contact via WhatsApp</span>
                </a>
                <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">
                    Or email: <a href="mailto:brightmindssoftware@gmail.com" style="color: #ff69b4; text-decoration: none;">brightmindssoftware@gmail.com</a>
                </p>
                <p style="margin-top: 40px; font-size: 0.8rem; color: #666;">
                    &copy; ${new Date().getFullYear()} Dee's Closet. All Rights Reserved.<br>
                    <span style="opacity: 0.6;">Built by Bright Minds Software</span>
                </p>
            </div>
        `;
        
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
        
        // Update document title
        document.title = 'Website Unavailable | Dee\'s Closet';
    } else {
        console.log('Access granted: Preview period active.');
        console.log('Deadline:', new Date(ACCESS_DEADLINE).toLocaleString());
    }
})();

/* ==================== END ACCESS CONTROL ==================== */