let pontos = [0, 0];
let sets = [0, 0];
let maxSets = 3;
let nomes = ["Time 1", "Time 2"];
let jogoEncerrado = false;

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  nomes[0] = params.get("time1") || "Time 1";
  nomes[1] = params.get("time2") || "Time 2";
  maxSets = parseInt(params.get("sets")) || 3;

  document.getElementById("nome1").textContent = nomes[0];
  document.getElementById("nome2").textContent = nomes[1];

  atualizarTela();
};

function alterarPonto(time, valor) {
  if (jogoEncerrado || pontos[time] + valor < 0) return;

  pontos[time] += valor;
  registrarHistorico(`${nomes[time]} ${valor > 0 ? 'ganhou' : 'perdeu'} ponto`);
  verificarSet();
  atualizarTela();
}

function resetarPontos() {
  if (jogoEncerrado) return;

  pontos = [0, 0];
  registrarHistorico("Os pontos foram zerados manualmente.");
  atualizarTela();
}

function verificarSet() {
  if (jogoEncerrado) return;

  const maxPontos = isTieBreak() ? 15 : 25;
  const diff = Math.abs(pontos[0] - pontos[1]);

  if ((pontos[0] >= maxPontos || pontos[1] >= maxPontos) && diff >= 2) {
    const vencedor = pontos[0] > pontos[1] ? 0 : 1;
    sets[vencedor]++;
    registrarHistorico(`${nomes[vencedor]} ganhou o set!`);
    pontos = [0, 0];

    // Verificar se venceu o jogo
    if ((maxSets === 3 && sets[vencedor] === 2) || (maxSets === 5 && sets[vencedor] === 3)) {
      registrarHistorico(`${nomes[vencedor]} venceu o jogo! 🎉`);
      jogoEncerrado = true;
      desabilitarBotoes();
    }
  }
}

function isTieBreak() {
  if (jogoEncerrado) return false;

  const totalSets = sets[0] + sets[1];
  if (maxSets === 3 && totalSets === 2) return true;
  if (maxSets === 5 && totalSets === 4) return true;
  return false;
}

function atualizarTela() {
  document.getElementById("pontos1").textContent = pontos[0];
  document.getElementById("pontos2").textContent = pontos[1];
  document.getElementById("sets1").textContent = `Sets: ${sets[0]}`;
  document.getElementById("sets2").textContent = `Sets: ${sets[1]}`;

  const tieBreakAviso = document.getElementById("tieBreakAviso");
  tieBreakAviso.style.display = isTieBreak() ? "block" : "none";

  // Fundo vermelho se estiver no tie-break
  document.body.style.backgroundColor = isTieBreak() ? "#ffcccc" : "#ffffff";
}

function registrarHistorico(texto) {
  const log = document.getElementById("log");
  const item = document.createElement("li");
  const agora = new Date();
  const horario = agora.toLocaleTimeString("pt-BR");
  item.textContent = `[${horario}] ${texto}`;
  log.prepend(item);
}

function desabilitarBotoes() {
  const botoes = document.querySelectorAll("button");
  botoes.forEach(btn => btn.disabled = true);
}
