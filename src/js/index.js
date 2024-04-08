/*
objetivo 1 - quando o usuario clicar no botão mostrar mais deve abrir  os projetos que estão escondidos no html

    passo 1 - pegar o botão mostrar mais no js pra poder verificar quando o usuario clicar em cima dele
    
    passo 2 - identificar o clique do botão
    
    passo 3 - adicionar a classe "ativo" nos projetos escondido

Objetivo 2 - esconder o botão mostrar mais

    passo 1 - pegar o botão e esconder ele*/

// Objetivo 1
// Passo 1

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    escondeBotao();
});

function escondeBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

