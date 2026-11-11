async function componente(arquivo, destino) {
    const elemento = document.querySelector(destino);
    if (!elemento) {
        throw new Error(`Destino "${destino}" não encontrado para o componente "${arquivo}".`);
    }

    elemento.setAttribute("aria-busy", "true");

    try {
        const resposta = await fetch(arquivo);
        if (!resposta.ok) {
            throw new Error(`Falha ao carregar "${arquivo}": HTTP ${resposta.status}.`);
        }

        elemento.innerHTML = await resposta.text();
    } finally {
        elemento.setAttribute("aria-busy", "false");
    }
}