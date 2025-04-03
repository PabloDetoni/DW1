// Função para mudar a cor de fundo
function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
}

// Função para iniciar o loop de alternância de cor
let loopAtivo = false;
let loopIntervalId = null;

function iniciarLoop() {
    const cores = ["blue", "green", "red"]; // Definindo as duas cores para alternar
    let indice = 0;

    loopIntervalId = setInterval(function() {
        // Alterna entre as cores definidas no array
        mudarCor(cores[indice]);
        indice = (indice + 1) % cores.length; // Alterna entre 0 e 1
    }, 1000); // Alterna a cada 3 segundos
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
