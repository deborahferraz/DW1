// Referências aos elementos
const toggleBtn = document.getElementById("toggleBtn");
const paragrafo = document.getElementById("paragrafo");

// Evento de clique no botão
toggleBtn.addEventListener("click", function() {
    // Verifica o estado atual da exibição do parágrafo
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block"; // Mostra o parágrafo
    } else {
        paragrafo.style.display = "none"; // Oculta o parágrafo
    }
});
