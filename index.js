let humanScore = 0;
let computerScore = 0;
let valorEscolhaHumano = 0;
let valorEscolhaRobo = 0;

function getHumanChoice() {
    const pedra = document.getElementById("pedra");
    const papel = document.getElementById("papel");
    const tesoura = document.getElementById("tesoura");

    pedra.addEventListener("click", () => escolherHumano("pedra", 1));
    papel.addEventListener("click", () => escolherHumano("papel", 2));
    tesoura.addEventListener("click", () => escolherHumano("tesoura", 3));
}

function escolherHumano(tipo, valor) {
    limparEscolha("escolha-homem");
    const escolha = document.getElementById("escolha-homem");
    const img = document.createElement("img");
    img.src = `img/${tipo}.png`;
    img.style.width = "150px";
    img.style.height = "150px";
    escolha.appendChild(img);
    valorEscolhaHumano = valor;

    getRoboChoice();
}

function getRoboChoice() {
    limparEscolha("escolha-robo");

    let valor = Math.floor(Math.random() * 3) + 1;
    let tipo;

    if (valor === 1) tipo = "pedra";
    if (valor === 2) tipo = "papel";
    if (valor === 3) tipo = "tesoura";

    const escolha = document.getElementById("escolha-robo");
    const img = document.createElement("img");
    img.src = `img/${tipo}.png`;
    img.style.width = "150px";
    img.style.height = "150px";
    escolha.appendChild(img);
    valorEscolhaRobo = valor;

    verificarVencedor();
}

function verificarVencedor() {
    if (valorEscolhaHumano === valorEscolhaRobo) {
        alert("Empate!");
    } else if (
        (valorEscolhaHumano === 1 && valorEscolhaRobo === 3) || // Pedra vence Tesoura
        (valorEscolhaHumano === 2 && valorEscolhaRobo === 1) || // Papel vence Pedra
        (valorEscolhaHumano === 3 && valorEscolhaRobo === 2)    // Tesoura vence Papel
    ) {
        alert("Você venceu!");
        humanScore++;
    } else {
        alert("Robô venceu!");
        computerScore++;
    }

    
}

function limparEscolha(elementId) {
    const escolha = document.getElementById(elementId);
    escolha.innerHTML = "";
}



function reiniciar() {
    const botaoReiniciar = document.getElementById("reiniciar-jogo");
    botaoReiniciar.addEventListener("click", () => {
        location.reload();
    });
}

getHumanChoice();
reiniciar();
