function requisicaoDetalhes() {
    const params = new URLSearchParams(window.location.search)
    let id = params.get("id")
    let url = `https://api.rawg.io/api/games/${id}?key=021f7245981e4b7a9d335222ed4dd624&games`
    return fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (detalhes) {
            return detalhes
        })
}

function renderizarDetalhes(detalhes) {
    let contentDetalhes = document.getElementById('content-detalhes')
    let divDetalhes = ''

    let nomeDoJogo = detalhes.name
    let imagem = detalhes.background_image
    let anoDeLancamento = detalhes.released
    let id = detalhes.id
    let descricaoJogo = detalhes.description
    let publisherJogo = detalhes.website
    let ratingJogo = detalhes.rating

    divDetalhes += `<h1 id="destaques"> Detalhes </h1>
        <div class="container">
            <div class="videoetexto">
                <div class="video">
                    <img src=${imagem}> </img>
                </div>
                <div class="text">
                    <h2>${nomeDoJogo}</h2>
                    <p> <b>Sobre o console:</b> ${descricaoJogo} </p>
                    <p> <b>Publicante:</b> ${publisherJogo} </p>
                    <p> <b>Lançamento:</b> ${anoDeLancamento} </p>
                    <p> <b>Avaliação:</b> ${ratingJogo} </p>

                </div>
            </div>
        </div>`

    contentDetalhes.insertAdjacentHTML("beforeend", divDetalhes)
}

window.onload = function () {
    requisicaoDetalhes().then(renderizarDetalhes)
}