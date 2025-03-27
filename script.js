// Seleção dos elementos do DOM necessários para a aplicação
const container = document.getElementById('container');          // Container principal
const registerBtn = document.getElementById('register');        // Botão de registro desktop
const loginBtn = document.getElementById('login');             // Botão de login desktop
const mobileSignupLink = document.querySelector('.mobile-signup'); // Link de registro mobile
const mobileLoginLink = document.querySelector('.mobile-login');   // Link de login mobile

// Função que verifica se está em visualização mobile
function isMobile() {
    return window.innerWidth <= 768; // Retorna true se a largura da tela for <= 768px
}

// Função para alternar visibilidade da senha
function togglePassword(inputId, iconElement) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';               // Mostra a senha
        iconElement.classList.remove('bx-hide');   // Troca o ícone para olho aberto
        iconElement.classList.add('bx-show');
    } else {
        passwordInput.type = 'password';           // Esconde a senha
        iconElement.classList.remove('bx-show');   // Troca o ícone para olho fechado
        iconElement.classList.add('bx-hide');
    }
}

// Adiciona evento de clique em todos os ícones de olho
document.querySelectorAll('.eye-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const inputId = this.previousElementSibling.id;
        togglePassword(inputId, this);
    });
});

// Função para atualizar o layout baseado no tamanho da tela
function updateLayout() {
    const toggleContainer = document.querySelector('.toggle-container');
    const mobileLinks = document.querySelectorAll('.mobile-login, .mobile-signup');
    const signIn = document.querySelector('.sign-in');
    const signUp = document.querySelector('.sign-up');

    if (isMobile()) {
        // Layout Mobile
        toggleContainer.style.display = 'none';    // Esconde o container azul
        mobileLinks.forEach(link => link.style.display = 'block'); // Mostra links mobile

        // Reset dos estilos para mobile
        signIn.style.width = '100%';              // Formulário ocupa toda largura
        signUp.style.width = '100%';
        signIn.style.left = '0';
        signUp.style.left = '0';

        if (container.classList.contains('active')) {
            // Mostra formulário de cadastro
            signIn.style.display = 'none';
            signUp.style.display = 'block';
            signUp.style.transform = 'none';
            signUp.style.opacity = '1';
            signUp.style.zIndex = '5';
        } else {
            // Mostra formulário de login
            signIn.style.display = 'block';
            signUp.style.display = 'none';
            signIn.style.transform = 'none';
            signIn.style.opacity = '1';
            signIn.style.zIndex = '5';
        }
    } else {
        // Layout Desktop
        toggleContainer.style.display = 'block';   // Mostra container azul
        mobileLinks.forEach(link => link.style.display = 'none'); // Esconde links mobile

        // Reset dos estilos para desktop
        signIn.style = '';
        signUp.style = '';
        signIn.style.display = 'block';
        signUp.style.display = 'block';
    }
}

// Eventos para versão Desktop
registerBtn.addEventListener('click', () => {
    if (!isMobile()) {
        container.classList.add('active');         // Ativa animação de troca
    }
});

loginBtn.addEventListener('click', () => {
    if (!isMobile()) {
        container.classList.remove('active');      // Remove animação de troca
    }
});

// Eventos para versão Mobile
mobileSignupLink.addEventListener('click', (e) => {
    e.preventDefault();                           // Previne comportamento padrão do link
    container.classList.add('active');            // Ativa modo cadastro
    updateLayout();                               // Atualiza layout
});

mobileLoginLink.addEventListener('click', (e) => {
    e.preventDefault();                           // Previne comportamento padrão do link
    container.classList.remove('active');         // Ativa modo login
    updateLayout();                               // Atualiza layout
});

// Eventos de janela
window.addEventListener('resize', updateLayout);   // Atualiza layout ao redimensionar
window.addEventListener('load', updateLayout);     // Atualiza layout ao carregar
