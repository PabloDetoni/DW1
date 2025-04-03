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
