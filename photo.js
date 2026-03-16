// Wait for the HTML to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    // When the hamburger icon is clicked, show/hide the menu
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Hide the mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    const profile = document.getElementById("profile");

 profile.innerHTML = `<img src="imag\IMG_4833.JPG.jpeg" alt="profile" class="profile-icon">`;


    // ===== 2. Gallery Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove 'active' class from all buttons, add to the clicked one
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Get the filter category (all, nature, portrait, etc.)
            const filterValue = btn.getAttribute('data-filter');
            
            // Show or hide gallery items based on the category
            galleryItems.forEach(item => {
                // Check if the item has the class of the selected filter
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });


    // ===== 3. Simple Form Submission =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the page from reloading
            
            // Show a simple success message
            alert('Thank you! Your message has been sent successfully.');
            
            // Clear the form fields
            contactForm.reset();
        });
    }

});