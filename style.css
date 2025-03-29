:root {
    /* Cores e variáveis para o tema */
    --background-dark: rgba(0, 0, 0, 0.795);
    --background-light: #fff;
    --background-body-light: #f5f5f5;
    --background-body-dark: #2c2c2c;
    --box-shadow: rgba(138, 138, 138, 0.35);
    --button-bg: rgb(51, 51, 51);
    --button-bg-active: rgb(51, 51, 51);
    --button-border: transparent;
    --button-text: #fff;
    --input-bg: #eee;
    --text-color: #333;
    --toggle-bg: transparent;
    /* Mudado para transparente */
    --toggle-bg-active: transparent;
    /* Mudado para transparente */
    --overlay-color: rgba(0, 0, 0, 0.75);
    /* Overlay mais escuro */
}

* {
    /* Reseta margens e preenchimentos para todos os elementos */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Inclui bordas e preenchimentos nas dimensões dos elementos */
    font-family: 'Montserrat', sans-serif;
    /* Define a fonte padrão */
}

body {
    /* Estilos gerais do corpo da página */
    background-color: var(--background-body-light);
    /* Cor de fundo do corpo */
    color: var(--text-color);
    /* Cor do texto */
    display: flex;
    /* Usa Flexbox para layout */
    align-items: center;
    /* Alinha os itens verticalmente ao centro */
    justify-content: center;
    /* Alinha os itens horizontalmente ao centro */
    flex-direction: column;
    /* Coloca os itens em coluna */
    height: 100vh;
    /* Altura total da viewport */
    transition: background-color 0.3s, color 0.3s;
    /* Transições suaves para mudanças de cor */
}

.container {
    /* Estilos para o contêiner principal */
    background-color: var(--background-light);
    /* Cor de fundo do contêiner */
    border-radius: 30px;
    /* Cantos arredondados */
    box-shadow: 0 10px 20px var(--box-shadow), 0 6px 6px var(--box-shadow);
    /* Sombreamento */
    position: relative;
    /* Posição relativa para elementos filhos */
    overflow: hidden;
    /* Esconde o conteúdo que transbordar */
    width: 768px;
    /* Largura fixa */
    max-width: 100%;
    /* Largura máxima 100% */
    min-height: 480px;
    /* Altura mínima */
    transition: background-color 0.3s;
    /* Transição suave para mudanças de cor */
}

.container p {
    /* Estilos para parágrafos dentro do contêiner */
    font-size: 14px;
    /* Tamanho da fonte */
    line-height: 20px;
    /* Altura da linha */
    letter-spacing: 0.3px;
    /* Espaçamento entre letras */
    margin: 20px 0;
    /* Margem vertical */
}

.container span {
    /* Estilos para spans dentro do contêiner */
    font-size: 12px;
    /* Tamanho da fonte */
}

.container a {
    /* Estilos para links dentro do contêiner */
    color: var(--text-color);
    /* Cor do texto do link */
    font-size: 13px;
    /* Tamanho da fonte */
    text-decoration: none;
    /* Remove o sublinhado */
    margin: 15px 0 10px;
    /* Margem vertical */
}

.container button {
    /* Estilos para botões dentro do contêiner */
    background-color: var(--button-bg);
    /* Cor de fundo do botão */
    color: var(--button-text);
    /* Cor do texto do botão */
    font-size: 12px;
    /* Tamanho da fonte */
    padding: 10px 45px;
    /* Preenchimento interno */
    border: 1px solid var(--button-border);
    /* Borda do botão */
    border-radius: 8px;
    /* Cantos arredondados */
    font-weight: 600;
    /* Peso da fonte */
    letter-spacing: 0.5px;
    /* Espaçamento entre letras */
    text-transform: uppercase;
    /* Transforma o texto para letras maiúsculas */
    margin-top: 10px;
    /* Margem superior */
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
}

.container button.hidden {
    /* Estilos para botões que estão escondidos */
    background-color: transparent;
    /* Fundo transparente */
    border-color: var(--background-light);
    /* Cor da borda igual ao fundo */
}

.container form {
    /* Estilos para formulários dentro do contêiner */
    background-color: var(--background-light);
    /* Cor de fundo do formulário */
    display: flex;
    /* Usa Flexbox para layout */
    align-items: center;
    /* Alinha os itens verticalmente ao centro */
    justify-content: center;
    /* Alinha os itens horizontalmente ao centro */
    flex-direction: column;
    /* Coloca os itens em coluna */
    padding: 0 40px;
    /* Preenchimento horizontal */
    height: 100%;
    /* Altura total do contêiner */
}

.container input {
    /* Estilos para campos de entrada */
    background-color: var(--input-bg);
    /* Cor de fundo do campo */
    border: none;
    /* Sem borda */
    margin: 8px 0;
    /* Margem vertical */
    padding: 10px 15px;
    /* Preenchimento interno */
    font-size: 13px;
    /* Tamanho da fonte */
    border-radius: 8px;
    /* Cantos arredondados */
    width: 100%;
    /* Largura total */
    outline: none;
    /* Remove a borda de foco padrão */
}

.form-container {
    /* Estilos para o contêiner do formulário */
    position: absolute;
    /* Posição absoluta para sobreposição */
    top: 0;
    /* Alinha ao topo */
    height: 100%;
    /* Altura total */
    transition: all 0.6s ease-in-out;
    /* Transição suave para mudanças */
}

.sign-in {
    /* Estilos para a seção de login */
    left: 0;
    /* Alinha à esquerda */
    width: 50%;
    /* Largura de 50% */
    z-index: 2;
    /* Z-index para sobreposição */
}

.container.active .sign-in {
    /* Estilos quando a seção de login está ativa */
    transform: translateX(100%);
    /* Move a seção para a direita */
}

.sign-up {
    /* Estilos para a seção de registro */
    left: 0;
    /* Alinha à esquerda */
    width: 50%;
    /* Largura de 50% */
    opacity: 0;
    /* Inicialmente invisível */
    z-index: 1;
    /* Z-index para sobreposição */
}

.container.active .sign-up {
    /* Estilos quando a seção de registro está ativa */
    transform: translateX(100%);
    /* Move a seção para a direita */
    opacity: 1;
    /* Torna visível */
    z-index: 5;
    /* Z-index para sobreposição */
    animation: move 0.6s;
    /* Animação de entrada */
}

@keyframes move {

    /* Animação para a entrada da seção de registro */
    0%,
    49.99% {
        opacity: 0;
        /* Invisível */
        z-index: 1;
        /* Z-index baixo */
    }

    50%,
    100% {
        opacity: 1;
        /* Visível */
        z-index: 5;
        /* Z-index alto */
    }
}

.social-icons {
    /* Estilos para o contêiner de ícones sociais */
    margin: 20px 0;
    /* Margem vertical */
}

.social-icons a {
    /* Estilos para os links de ícones sociais */
    border: 1px solid #ccc;
    /* Borda cinza */
    border-radius: 20%;
    /* Cantos arredondados */
    display: inline-flex;
    /* Exibe como flexível */
    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    margin: 0 3px;
    /* Margem horizontal */
    width: 40px;
    /* Largura fixa */
    height: 40px;
    /* Altura fixa */
}

.toggle-container {
    /* Estilos para o contêiner do toggle */
    position: absolute;
    /* Posição absoluta para sobreposição */
    top: 0;
    /* Alinha ao topo */
    left: 50%;
    /* Alinha ao centro horizontalmente */
    width: 50%;
    /* Largura de 50% */
    height: 100%;
    /* Altura total */
    overflow: hidden;
    /* Esconde o conteúdo que transbordar */
    transition: all 0.6s ease-in-out;
    /* Transição suave para mudanças */
    border-radius: 20px;
    /* Cantos arredondados */
    z-index: 1000;
    /* Z-index alto para sobreposição */
}

.container.active .toggle-container {
    /* Estilos quando o contêiner do toggle está ativo */
    transform: translateX(-100%);
    /* Move para a esquerda */
    border-radius: 20px;
    /* Mantém cantos arredondados */
}

.toggle {
    /* Estilos para o elemento de toggle */
    background-color: var(--toggle-bg);
    /* Cor de fundo do toggle */
    height: 100%;
    /* Altura total */
    color: var(--button-text);
    /* Cor do texto */
    position: relative;
    /* Posição relativa */
    left: -100%;
    /* Alinha à esquerda fora da tela */
    width: 200%;
    /* Largura de 200% para permitir a transição */
    transform: translateX(0);
    /* Posição inicial */
    transition: all 0.6s ease-in-out;
    /* Transição suave para mudanças */
}

.container.active .toggle {
    /* Estilos quando o toggle está ativo */
    transform: translateX(50%);
    /* Move o toggle para o meio */
}

.toggle-panel {
    /* Estilos para o painel do toggle */
    position: absolute;
    /* Posição absoluta para sobreposição */
    width: 50%;
    /* Largura de 50% */
    height: 100%;
    /* Altura total */
    display: flex;
    /* Usa Flexbox para layout */
    align-items: center;
    /* Alinha os itens verticalmente ao centro */
    justify-content: center;
    /* Alinha os itens horizontalmente ao centro */
    flex-direction: column;
    /* Coloca os itens em coluna */
    padding: 0 30px;
    /* Preenchimento horizontal */
    text-align: center;
    /* Centraliza o texto */
    top: 0;
    /* Alinha ao topo */
    transform: translateX(0);
    /* Posição inicial */
    transition: all 0.6s ease-in-out;
    /* Transição suave para mudanças */
}

.toggle-left {
    /* Estilos para o painel da esquerda */
    transform: translateX(-200%);
    /* Move para fora da tela à esquerda */
}

.container.active .toggle-left {
    /* Estilos quando o painel da esquerda está ativo */
    transform: translateX(0);
    /* Move para a posição original */
}

.toggle-right {
    /* Estilos para o painel da direita */
    right: 0;
    /* Alinha à direita */
    transform: translateX(0);
    /* Posição inicial */
}

.error-message {
    /* Estilos para mensagens de erro */
    color: red;
    /* Cor do texto vermelho */
    font-size: 12px;
    /* Tamanho da fonte */
    display: none;
    /* Inicialmente escondido */
}

input.error {
    /* Estilos para campos de entrada com erro */
    border: 2px solid red;
    /* Borda vermelha quando há erro */
}

.password-field {
    position: relative;
    /* Posição relativa para o campo de senha */
    width: 100%;
    /* Largura total */
    margin: 8px 0;
    /* Margem vertical */
}

.password-field input {
    /* Estilos para o campo de entrada de senha */
    width: 100%;
    /* Largura total */
    padding-right: 40px;
    /* Preenchimento à direita para o ícone */
    background-color: var(--input-bg);
    /* Cor de fundo */
    border: none;
    /* Sem borda */
    margin: 0;
    /* Sem margem */
    padding: 10px 40px 10px 15px;
    /* Preenchimento interno */
    font-size: 13px;
    /* Tamanho da fonte */
    border-radius: 8px;
    /* Cantos arredondados */
    outline: none;
    /* Remove a borda de foco padrão */
}

.eye-icon {
    /* Estilos para o ícone de olho */
    position: absolute;
    /* Posição absoluta dentro do campo de senha */
    right: 10px;
    /* Alinha à direita */
    top: 50%;
    /* Alinha verticalmente ao centro */
    transform: translateY(-50%);
    /* Centraliza verticalmente */
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    color: #666;
    /* Cor do ícone */
    font-size: 20px;
    /* Tamanho do ícone */
    transition: color 0.3s ease;
    /* Transição suave para mudanças de cor */
}

.eye-icon:hover {
    color: var(--button-bg);
    /* Muda a cor ao passar o mouse */
}


/* RESPONSIVIDADE */


/* Adicione estas media queries no final do arquivo CSS */

@media (max-width: 768px) {
    .container {
        min-height: 450px;
        /* Aumenta a altura mínima */
        width: 95%;
        /* Ajusta a largura para 95% */
    }

    .container h1 {
        margin-top: 20px;
        /* Adiciona espaçamento superior ao título */
    }

    .form-container {
        width: 100%;
        /* Largura total para o contêiner do formulário */
        left: 0;
        /* Alinha à esquerda */
    }

    .sign-in,
    .sign-up {
        width: 100%;
        /* Largura total para ambas as seções */
    }

    .toggle-container {
        display: none;
        /* Esconde o contêiner de toggle em telas menores */
    }

    .container button {
        padding: 8px 25px;
        /* Ajuste de preenchimento para botões */
    }

    .container form {
        padding: 0 20px;
        /* Ajuste de preenchimento para o formulário */
    }

    .container h1 {
        font-size: 20px;
        /* Tamanho do título ajustado */
    }

    .social-icons a {
        width: 30px;
        /* Largura reduzida para ícones sociais */
        height: 30px;
        /* Altura reduzida para ícones sociais */
    }
}

@media (max-width: 480px) {
    .container {
        min-height: 350px;
        /* Altura mínima reduzida ainda mais */
        width: 95%;
        /* Largura ajustada para 95% */
    }

    .container input {
        padding: 8px 10px;
        /* Preenchimento reduzido para campos de entrada */
    }

    .container button {
        padding: 6px 20px;
        /* Ajuste de preenchimento para botões */
        font-size: 11px;
        /* Tamanho da fonte reduzido */
    }

    .social-icons {
        margin: 10px 0;
        /* Margem vertical ajustada */
    }

    .container p {
        font-size: 12px;
        /* Tamanho da fonte ajustado para parágrafos */
        margin: 10px 0;
        /* Margem vertical ajustada */
    }
}


/* Ajuste para altura em dispositivos menores */

@media (max-height: 600px) {
    .container {
        margin: 20px 0;
        /* Margem vertical ajustada */
        min-height: 300px;
        /* Altura mínima reduzida */
    }
}

.mobile-login,
.mobile-signup {
    display: none;
    /* Esconde seções de login e registro móveis */
}

@media (max-width: 768px) {

    .mobile-login,
    .mobile-signup {
        display: block;
        /* Exibe seções móveis em telas menores */
    }

    .toggle-container {
        display: none;
        /* Esconde o contêiner de toggle em telas menores */
    }
}

.checkbox-container {
    width: 100%;
    /* Largura total para o contêiner de checkbox */
    margin: 10px 0;
    /* Margem vertical */
}

.custom-checkbox {
    display: flex;
    /* Exibe como flexível */
    align-items: center;
    /* Alinha itens ao centro verticalmente */
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    font-size: 13px;
    /* Tamanho da fonte */
    color: var(--text-color);
    /* Cor do texto */
    user-select: none;
    /* Impede seleção de texto */
}

.custom-checkbox input {
    position: absolute;
    /* Posição absoluta para esconder o checkbox padrão */
    opacity: 0;
    /* Torna invisível */
    cursor: pointer;
    /* Muda o cursor */
    height: 0;
    /* Altura zero */
    width: 0;
    /* Largura zero */
}

.checkmark {
    height: 18px;
    /* Altura do checkbox customizado */
    width: 18px;
    /* Largura do checkbox customizado */
    background-color: var(--input-bg);
    /* Cor de fundo do checkbox */
    border-radius: 4px;
    /* Cantos arredondados */
    margin-right: 8px;
    /* Margem direita */
    display: flex;
    /* Exibe como flexível */
    align-items: center;
    /* Alinha itens ao centro verticalmente */
    justify-content: center;
    /* Alinha itens ao centro horizontalmente */
    flex-shrink: 0;
    /* Impede encolhimento */
}

.checkmark:after {
    content: '';
    /* Adiciona conteúdo vazio para o ícone de verificação */
    position: absolute;
    /* Posição absoluta */
    display: none;
    /* Inicialmente escondido */
    width: 5px;
    /* Largura do ícone de verificação */
    height: 10px;
    /* Altura do ícone de verificação */
    border: solid var(--button-bg);
    /* Cor do ícone de verificação */
    border-width: 0 2px 2px 0;
    /* Estilo da borda */
    transform: rotate(45deg);
    /* Rotaciona para formar um "check" */
}

.custom-checkbox input:checked~.checkmark {
    background-color: var(--input-bg);
    /* Cor de fundo quando checked */
}

.custom-checkbox input:checked~.checkmark:after {
    display: block;
    /* Exibe o ícone de verificação quando checked */
}

.checkbox-text {
    margin-left: 4px;
    /* Margem esquerda para o texto do checkbox */
}


/* Atualização apenas da parte do toggle e imagens */

.toggle {
    position: relative;
    /* Posição relativa */
    height: 100%;
    /* Altura total */
    width: 200%;
    /* Largura de 200% para permitir a transição */
    transform: translateX(0);
    /* Posição inicial */
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    /* Transição suave */
    background: none;
    /* Sem fundo */
}

.toggle-panel {
    position: absolute;
    /* Posição absoluta para sobreposição */
    width: 50%;
    /* Largura de 50% */
    height: 100%;
    /* Altura total */
    display: flex;
    /* Usa Flexbox para layout */
    align-items: center;
    /* Alinha itens ao centro verticalmente */
    justify-content: center;
    /* Alinha itens ao centro horizontalmente */
    flex-direction: column;
    /* Coloca itens em coluna */
    padding: 0 30px;
    /* Preenchimento horizontal */
    text-align: center;
    /* Centraliza o texto */
    top: 0;
    /* Alinha ao topo */
    transform: translateX(0);
    /* Posição inicial */
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in-out;
    /* Transição suave */
    background-position: center;
    /* Centraliza a imagem de fundo */
    background-size: cover;
    /* Cobre toda a área */
    overflow: hidden;
    /* Esconde o conteúdo que transbordar */
}


/* Efeito de fade nas imagens */

.toggle-panel::after {
    content: '';
    /* Adiciona conteúdo vazio para efeito de overlay */
    position: absolute;
    /* Posição absoluta */
    top: 0;
    /* Alinha ao topo */
    left: 0;
    /* Alinha à esquerda */
    right: 0;
    /* Alinha à direita */
    bottom: 0;
    /* Alinha ao fundo */
    background-position: center;
    /* Centraliza a imagem de fundo */
    background-size: cover;
    /* Cobre toda a área */
    opacity: 0;
    /* Inicialmente invisível */
    transition: opacity 0.8s ease-in-out;
    /* Transição suave */
    z-index: -2;
    /* Z-index para ficar atrás dos outros elementos */
}


/* Atualizações do toggle e painéis */

.toggle-container {
    transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transição suave */
}

.toggle {
    position: relative;
    /* Posição relativa */
    height: 100%;
    /* Altura total */
    width: 200%;
    /* Largura de 200% para permitir a transição */
    transform: translateX(0);
    /* Posição inicial */
    transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transição suave */
    background: none;
    /* Sem fundo */
    will-change: transform;
    /* Otimização para animação */
}

.toggle-panel {
    position: absolute;
    /* Posição absoluta para sobreposição */
    width: 50%;
    /* Largura de 50% */
    height: 100%;
    /* Altura total */
    display: flex;
    /* Usa Flexbox para layout */
    align-items: center;
    /* Alinha itens ao centro verticalmente */
    justify-content: center;
    /* Alinha itens ao centro horizontalmente */
    flex-direction: column;
    /* Coloca itens em coluna */
    padding: 0 30px;
    /* Preenchimento horizontal */
    text-align: center;
    /* Centraliza o texto */
    top: 0;
    /* Alinha ao topo */
    background-position: center;
    /* Centraliza a imagem de fundo */
    background-size: cover;
    /* Cobre toda a área */
    transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transição suave */
    will-change: transform, opacity;
    /* Otimização para animação */
}


/* Imagens de fundo com melhor transição */

.toggle-left {
    transform: translateX(-200%);
    /* Move para fora da tela à esquerda */
    background-image: url('https://img.freepik.com/fotos-gratis/skate-parkadolescentes-no-skate-park_23-2149836867.jpg');
    /* Imagem de fundo */
    background-size: cover;
    /* Cobre toda a área */
    background-position: center;
    /* Centraliza a imagem de fundo */
}

.toggle-right {
    right: 0;
    /* Alinha à direita */
    transform: translateX(0);
    /* Posição inicial */
    background-image: url('https://media.istockphoto.com/id/1209988354/pt/foto/young-man-skateboarding-in-los-angeles.jpg?s=612x612&w=0&k=20&c=CJdN7rFhY4ueYJgEtjFf9_P8GO0ZHq8k_egqDJOzMq4=');
    /* Imagem de fundo */
    background-size: cover;
    /* Cobre toda a área */
    background-position: center;
    /* Centraliza a imagem de fundo */
}


/* Overlay com transição suave */

.toggle-panel::before {
    content: '';
    /* Adiciona conteúdo vazio para efeito de overlay */
    position: absolute;
    /* Posição absoluta */
    top: 0;
    /* Alinha ao topo */
    left: 0;
    /* Alinha à esquerda */
    right: 0;
    /* Alinha à direita */
    bottom: 0;
    /* Alinha ao fundo */
    background: var(--overlay-color);
    /* Cor do overlay */
    opacity: 0.75;
    /* Opacidade do overlay */
    transition: opacity 0.8s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transição suave */
    z-index: 1;
    /* Z-index para ficar acima dos outros elementos */
}


/* Animações de conteúdo */

.toggle-panel h1,
.toggle-panel p,
.toggle-panel button {
    position: relative;
    /* Posição relativa */
    z-index: 2;
    /* Z-index para ficar acima do overlay */
    color: white;
    /* Cor do texto */
    transition: transform 0.8s cubic-bezier(0.7, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transições suaves */
}


/* Estados ativos atualizados */

.container.active .toggle-left {
    transform: translateX(0);
    /* Move para a posição original quando ativo */
}

.container.active .toggle-right {
    transform: translateX(200%);
    /* Move para fora da tela à direita quando ativo */
}


/* Efeitos de hover nos botões */

.container button.hidden {
    background-color: transparent;
    /* Fundo transparente */
    border: 2px solid white;
    /* Borda branca */
    color: white;
    /* Cor do texto branca */
    font-weight: bold;
    /* Peso da fonte em negrito */
    transition: all 0.4s cubic-bezier(0.7, 0, 0.2, 1);
    /* Transição suave */
    backdrop-filter: blur(3px);
    /* Efeito de desfoque no fundo */
}

.container button.hidden:hover {
    background-color: rgba(255, 255, 255, 0.1);
    /* Fundo ligeiramente branco ao passar o mouse */
    transform: scale(1.05);
    /* Aumenta o tamanho ao passar o mouse */
}


/* Adicione estes estilos para o background em mobile */
@media (max-width: 768px) {
    body {
        position: relative;
        background-color: transparent;
    }

    /* Overlay escuro comum para ambas as imagens */
    body::before,
    body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 1.5s ease-in-out;
        z-index: -2;
    }

    /* Primeira imagem com overlay */
    body::before {
        background-image: linear-gradient(rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.75)),
            url('https://img.freepik.com/fotos-gratis/skate-parkadolescentes-no-skate-park_23-2149836867.jpg');
        object-fit: cover;
    }

    /* Segunda imagem com overlay */
    body::after {
        background-image: linear-gradient(rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.75)),
            url('https://img.freepik.com/fotos-gratis/vista-frontal-adolescente-legal-com-smartphone_23-2149633179.jpg');
        object-fit: cover;
    }

    /* Estados ativos das imagens */
    body.bg-1::before {
        opacity: 1;
    }

    body.bg-2::after {
        opacity: 1;
    }

    /* Ajuste do container para maior transparência */
    .container {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    /* Esconde o toggle container em mobile */
    .toggle-container {
        display: none;
    }
}

/* Configuração inicial para as imagens de fundo */
body::before,
body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    /* Transição suave de 2 segundos */
    z-index: -2;
}

/* Primeira imagem de fundo */
body::before {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://img.freepik.com/fotos-gratis/skate-parkadolescentes-no-skate-park_23-2149836867.jpg');
}

/* Segunda imagem de fundo */
body::after {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://img.freepik.com/fotos-gratis/adolescente-de-alto-angulo-segurando-skate-ao-ar-livre_23-2149854322.jpg');
}

/* Quando a primeira imagem está ativa */
body.bg-1::before {
    opacity: 1;
}

/* Quando a segunda imagem está ativa */
body.bg-2::after {
    opacity: 1;
}
