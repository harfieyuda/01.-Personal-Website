//OVERLAY MENU

const closeButton1 = document.querySelector('.close-button1');
const menuWrapper = document.querySelector('.menu-wrapper');
const menuModal = document.querySelectorAll('.menu-modal'); // Ensure elements with this class exist
const menuContent = document.querySelector('.menu-content');

let shouldShowModal = false; // Flag to control modal display

closeButton1.addEventListener('click', () => {
    menuWrapper.style.display = 'none';
    menuContent.style.opacity = '0%';
    document.body.style.overflow = 'auto';
    shouldShowModal = false; // Reset the flag when modal is closed
});

menuModal.forEach((menu) => {
    menu.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        menuWrapper.style.display = 'block';
        const timeout = setTimeout(() => {
            menuContent.style.opacity = '100%';
            clearTimeout(timeout);
        }, 0);
        shouldShowModal = true; // Set the flag when modal is opened
    });
});

// Check the flag on page load
window.addEventListener('load', () => {
    if (!shouldShowModal) {
        menuWrapper.style.display = 'none';
    }
});


