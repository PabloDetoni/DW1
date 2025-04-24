let jogador = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

function criarTabuleiro() {
  const container = document.getElementById('tabuleiro-velha');
  container.innerHTML = '';
  tabuleiro.forEach((valor, i) => {
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.textContent = valor;
    celula.onclick = () => jogar(i);
    container.appendChild(celula);
  });
}

function jogar(pos) {
  if (tabuleiro[pos] !== '') return;
  tabuleiro[pos] = jogador;
  jogador = jogador === 'X' ? 'O' : 'X';
  criarTabuleiro();
  verificarVencedor();
}

function verificarVencedor() {
  const combinacoes = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (const [a, b, c] of combinacoes) {
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      document.getElementById('mensagem').textContent = `Jogador ${tabuleiro[a]} venceu!`;
      return;
    }
  }

  if (!tabuleiro.includes('')) {
    document.getElementById('mensagem').textContent = 'Empate!';
  }
}

function reiniciarJogo() {
  jogador = 'X';
  tabuleiro = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('mensagem').textContent = '';
  criarTabuleiro();
}

document.addEventListener('DOMContentLoaded', criarTabuleiro);
