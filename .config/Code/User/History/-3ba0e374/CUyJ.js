// Array com as URLs das imagens
const imagens = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizINH4CdMrAWT1lF8rkGgvNN_CvFdyRfKnDGAqUQ1pIE1bAurjlqDPnNRnxW5pNxm7CNZ0SDfrep5DEJtLfx1bRjLGpAddylmWfJf1P0mRu5Vk3Nm7hybqQIX85ymvgmXw07tT_01tD_uY/s1600/DSC05024.JPG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcp96eogxdRBkMe9ACP8n4Di9CkWCFl54Dqgpgxgf7DOO1rTetb1jICW0GzEX13-b3LQ&usqp=CAU",
    
];

// Função para alternar as imagens
let indiceAtual = 0;
const imagemElement = document.getElementById("imagem");

function alternarImagens() {
    imagemElement.src = imagens[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagens.length; // Vai para a próxima imagem, reinicia se chegar ao final
}

// Altere o intervalo conforme desejado (ex: 5 segundos)
setInterval(alternarImagens, 5000); // Alterna a cada 5 segundos
