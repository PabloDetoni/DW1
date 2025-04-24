function jogar(jogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const maquina = opcoes[Math.floor(Math.random() * 3)];
  
    let resultado = '';
    if (jogador === maquina) {
      resultado = 'Empate!';
    } else if (
      (jogador === 'pedra' && maquina === 'tesoura') ||
      (jogador === 'tesoura' && maquina === 'papel') ||
      (jogador === 'papel' && maquina === 'pedra')
    ) {
      resultado = `Você venceu! Máquina escolheu ${maquina}.`;
    } else {
      resultado = `Você perdeu! Máquina escolheu ${maquina}.`;
    }
  
    document.getElementById('resultado-ppt').textContent = resultado;
  }
  