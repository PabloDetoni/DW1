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

function alternarCores() {
    const btnAzul = document.getElementById("btn-azul");
    const btnVerde = document.getElementById("btn-verde");
    
    if (alternando) {
        // Troca as cores dos botões
        const tempColor = btnAzul.style.backgroundColor;
        btnAzul.style.backgroundColor = btnVerde.style.backgroundColor;
        btnVerde.style.backgroundColor = tempColor;
    }
}

// Função para iniciar a troca contínua das cores
document.getElementById("btn-alternar").addEventListener("click", function() {
    alternando = !alternando;
    
    if (alternando) {
        this.textContent = "Parar Alternar";
        setInterval(alternarCores, 1000); // A cada 1 segundo
    } else {
        this.textContent = "Alternar Cores";
    }
});
