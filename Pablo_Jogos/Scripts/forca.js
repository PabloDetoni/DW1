const palavras = ['banana', 'computador', 'programa', 'futebol'];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
let resposta = Array(palavra.length).fill('_');
let letrasUsadas = [];

document.getElementById('palavra-oculta').textContent = resposta.join(' ');

function tentarLetra() {
  const letra = document.getElementById('entrada-letra').value.toLowerCase();
  document.getElementById('entrada-letra').value = '';
  if (!letra || letrasUsadas.includes(letra)) return;

  letrasUsadas.push(letra);
  document.getElementById('letras-usadas').textContent = `Usadas: ${letrasUsadas.join(', ')}`;

  let acertou = false;
  palavra.split('').forEach((l, i) => {
    if (l === letra) {
      resposta[i] = letra;
      acertou = true;
    }
  });

  document.getElementById('palavra-oculta').textContent = resposta.join(' ');

  if (!acertou && letrasUsadas.length >= 6) {
    document.getElementById('resultado-forca').textContent = `Você perdeu! Era: ${palavra}`;
  } else if (!resposta.includes('_')) {
    document.getElementById('resultado-forca').textContent = 'Parabéns, você venceu!';
  }
}
