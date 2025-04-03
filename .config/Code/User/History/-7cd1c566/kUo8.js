// Função para mudar a imagem
function mudarImagem(imagem) {
    document.getElementById("imagem").src = imagem; // Alterando o atributo 'src' da imagem
}

// Função para iniciar o loop de alternância de imagens
let loopAtivo = false;
let loopIntervalId = null;

function iniciarLoop() {
    const imagens = ["ManoNarci1.jpg", "ManoNarci2.jpg", "ManoNarci3.jpg"]; // Caminho das 3 imagens
    let indice = 0;

    loopIntervalId = setInterval(function() {
        // Alterna entre as imagens definidas no array
        mudarImagem(imagens[indice]);
        indice = (indice + 1) % imagens.length; // Alterna entre as imagens
    }, 2000); // Alterna a cada 2 segundos
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
