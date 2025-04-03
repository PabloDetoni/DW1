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
