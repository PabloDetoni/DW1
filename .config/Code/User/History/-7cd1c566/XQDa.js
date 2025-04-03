// Função para mudar a imagem
function mudarImagem(imagem) {
    document.getElementById("imagem").src = imagem; // Alterando o atributo 'src' da imagem
}

// Função para iniciar o loop de alternância de imagens
let loopAtivo = false;
let loopIntervalId = null;

function iniciarLoop() {

    const imagens = ["/Imgs/ManoNarci1.jpeg", "/Imgs/ManoNarci2.jpeg", "/Imgs/ManoNarci3.jpeg"]; // Caminho das 3 imagens
    let indice = 0;

    loopIntervalId = setInterval(function() {
        // Alterna entre as imagens definidas no array
        mudarImagem(imagens[indice]);
        indice = (indice + 1) % imagens.length; // Alterna entre as imagens
    }, 20); // Alterna a cada 2 segundos
}

// Função para iniciar ou parar o loop
document.getElementById("btn-loop").addEventListener("click", function() {
    if (loopAtivo) {
        clearInterval(loopIntervalId); // Para o loop
        this.textContent = "Iniciar Loop";
        this.classList.remove("active");  // Remove a classe 'active' para mudar a cor do botão
    } else {
        iniciarLoop(); // Inicia o loop
        this.textContent = "Parar Loop";
        this.classList.add("active");  // Adiciona a classe 'active' para mudar a cor do botão
    }
    loopAtivo = !loopAtivo; // Alterna o estado entre ativo e inativo
});
