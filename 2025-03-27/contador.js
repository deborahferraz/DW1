// Variável para armazenar o contador
let contador = 0;

// Referências aos elementos
const contadorDisplay = document.getElementById("contador");
const resetBtn = document.getElementById("resetBtn");

// Função para atualizar a exibição do contador
function atualizarContador() {
    contadorDisplay.textContent = contador;
}

// Evento de clique em qualquer parte da tela (document)
document.body.addEventListener("click", function() {
    contador++;
    atualizarContador();
});

// Evento de clique no botão para zerar o contador
resetBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Impede que o evento de clique no botão seja propagado para o body
    contador = 0;
    atualizarContador();
});
