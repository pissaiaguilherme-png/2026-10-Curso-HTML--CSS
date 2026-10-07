console.log("Olá mundo! Meu nome é Guilherme")

async function componente(
    arquivo,
    destino  
) {
    const elemento = 
        document.querySelector(destino)

    if (!elemento) {
        return;
    }
    const resposta =
        await fetch(arquivo);

    const html =
        await resposta.text();

    elemento.innerHTML =
        html;
}