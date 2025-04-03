// Função para mudar a cor de fundo
function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
}

// Adicionando evento de clique aos botões
document.getElementById("btn-azul").addEventListener("click", function() {
    mudarCor("blue");
});

document.getElementById("btn-verde").addEventListener("click", function() {
    mudarCor("green");
});

// Alternar cores dos botões de forma contínua
let alternando = false;
let intervalId = null;

function alternarCores() {
    const btnAzul = document.getElementById("btn-azul");
    const btnVerde = document.getElementById("btn-verde");

    // Troca as cores dos botões
    const tempColor = btnAzul.style.backgroundColor;
    btnAzul.style.backgroundColor = btnVerde.style.backgroundColor;
    btnVerde.style.backgroundColor = tempColor;
}

// Função para iniciar ou parar a troca contínua das cores
document.getElementById("btn-alternar").addEventListener("click", function() {
    if (alternando) {
        clearInterval(intervalId); // Para a alternância
        this.textContent = "Alternar Cores";
    } else {
        intervalId = setInterval(alternarCores, 3000); // Alterna as cores a cada 3 segundos
        this.textContent = "Parar Alternar";
    }
    alternando = !alternando; // Alterna o estado entre ativado e desativado
});

// Função para iniciar o loop de alternância entre as cores
let loopAtivo = false;
let loopIntervalId = null;

function iniciarLoop() {
    const btnAzul = document.getElementById("btn-azul");
    const btnVerde = document.getElementById("btn-verde");
    const corAlternada = [btnAzul.style.backgroundColor, btnVerde.style.backgroundColor];
    let indice = 0;

    loopIntervalId = setInterval(function() {
        // Alterna entre as duas cores
        if (indice === 0) {
            btnAzul.style.backgroundColor = "blue";
            btnVerde.style.backgroundColor = "green";
            indice = 1;
        } else {
            btnAzul.style.backgroundColor = "green";
            btnVerde.style.backgroundColor = "blue";
            indice = 0;
        }
    }, 3000); // Alterna as cores a cada 3 segundos
}

// Função para iniciar ou parar o loop
document.getElementById("btn-loop").addEventListener("click", function() {
    if (loopAtivo) {
        clearInterval(loopIntervalId); // Para o loop
        this.textContent = "Iniciar Loop";
    } else {
        iniciarLoop(); // Inicia o loop
        this.textContent = "Parar Loop";
    }
    loopAtivo = !loopAtivo; // Alterna o estado entre ativo e inativo
});
