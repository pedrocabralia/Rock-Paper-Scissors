let humanScore = 0;
let computerScore = 0;
let valorEscolhaHumano = 0;
let valorEscolhaRobo = 0;
const acabarJogo = document.getElementsByClassName("sumir")[0];

const acabarJogo2 = document.getElementsByClassName("sumir")[1];


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
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.marginTop = "10px"; 
    img.style.display = "block"
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
    img.style.width = "100px";
    img.style.height = "100px";
    escolha.appendChild(img);
    valorEscolhaRobo = valor;

    verificarVencedor();
}

function verificarVencedor() {
    
    if (valorEscolhaHumano === valorEscolhaRobo) {

        const resultado = document.getElementById("vencedor");
        const resultadoVencedor = document.createElement("h3");
        resultadoVencedor.textContent = "Empate";
        resultado.appendChild(resultadoVencedor);
        
    } else if (
        (valorEscolhaHumano === 1 && valorEscolhaRobo === 3) || // Pedra vence Tesoura
        (valorEscolhaHumano === 2 && valorEscolhaRobo === 1) || // Papel vence Pedra
        (valorEscolhaHumano === 3 && valorEscolhaRobo === 2)    // Tesoura vence Papel
    ) {
        const resultado = document.getElementById("vencedor");
        const resultadoVencedor = document.createElement("h3");
        resultadoVencedor.textContent = "Vitória Humano";
        resultado.appendChild(resultadoVencedor);
        humanScore++;

    } else {
        

        const resultado = document.getElementById("vencedor");
        const resultadoVencedor = document.createElement("h3");
        resultadoVencedor.textContent = "Vitória Robô";
        resultado.appendChild(resultadoVencedor);
        computerScore++;
    }
 
     console.log(humanScore);
     console.log(computerScore);
     const pontosHumano = document.getElementById("pontuacaoHumano");
     pontosHumano.innerText = humanScore;
     const pontosRobo = document.getElementById("pontuacaoRobo");
     pontosRobo.innerText = computerScore;


     if(humanScore == 5 || computerScore ==5){
         
        console.log(humanScore)
        console.log(computerScore)
        

         acabarJogo.style.display = "none";
         acabarJogo2.style.display = "none";


     }



}

function limparEscolha(elementId) {
    const escolha = document.getElementById(elementId);

    // Remove apenas as imagens, preservando o H2
    const imgs = escolha.querySelectorAll("img");
    imgs.forEach((img) => img.remove());
}


function reiniciar() {
    const botaoReiniciar = document.getElementById("reiniciar-jogo");
    botaoReiniciar.addEventListener("click", () => {
        location.reload();
    });
}

getHumanChoice();
reiniciar();

