const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const mobileSignupLink = document.querySelector('.mobile-signup');
const mobileLoginLink = document.querySelector('.mobile-login');

function isMobile() {
    return window.innerWidth <= 768;
}

function togglePassword(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconElement.classList.remove('bx-hide');
        iconElement.classList.add('bx-show');
    } else {
        passwordInput.type = 'password';
        iconElement.classList.remove('bx-show');
        iconElement.classList.add('bx-hide');
    }
}

document.querySelectorAll('.eye-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const inputId = this.previousElementSibling.id;
        togglePassword(inputId, this);
    });
});

function updateLayout() {
    const toggleContainer = document.querySelector('.toggle-container');
    const mobileLinks = document.querySelectorAll('.mobile-login, .mobile-signup');
    const signIn = document.querySelector('.sign-in');
    const signUp = document.querySelector('.sign-up');

    if (isMobile()) {
        // Mobile Layout
        toggleContainer.style.display = 'none';
        mobileLinks.forEach(link => link.style.display = 'block');

        // Reset styles for mobile
        signIn.style.width = '100%';
        signUp.style.width = '100%';
        signIn.style.left = '0';
        signUp.style.left = '0';

        if (container.classList.contains('active')) {
            signIn.style.display = 'none';
            signUp.style.display = 'block';
            signUp.style.transform = 'none';
            signUp.style.opacity = '1';
            signUp.style.zIndex = '5';
        } else {
            signIn.style.display = 'block';
            signUp.style.display = 'none';
            signIn.style.transform = 'none';
            signIn.style.opacity = '1';
            signIn.style.zIndex = '5';
        }
    } else {
        // Desktop Layout
        toggleContainer.style.display = 'block';
        mobileLinks.forEach(link => link.style.display = 'none');

        // Reset styles for desktop
        signIn.style = '';
        signUp.style = '';
        signIn.style.display = 'block';
        signUp.style.display = 'block';
    }
}

// Desktop events
registerBtn.addEventListener('click', () => {
    if (!isMobile()) {
        container.classList.add('active');
    }
});

loginBtn.addEventListener('click', () => {
    if (!isMobile()) {
        container.classList.remove('active');
    }
});

// Mobile events
mobileSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
    updateLayout();
});

mobileLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
    updateLayout();
});

window.addEventListener('resize', updateLayout);
window.addEventListener('load', updateLayout);
