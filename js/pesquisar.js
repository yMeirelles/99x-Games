function requisicaoJogo(id) {
    return fetch(`https://api.rawg.io/api/games?key=021f7245981e4b7a9d335222ed4dd624&games&page_size=80&id=${id}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (jogos) {
            return jogos.results
        })
}

function renderizarJogos(jogos) {
    let contentJogos = document.getElementById('content-jogos')
    let divJogos = ''
    for (let i = 0; i < jogos.length; i++) {

        let nomeDoJogo = jogos[i].name
        let imagem = jogos[i].background_image
        let anoDeLancamento = jogos[i].released
        let id = jogos[i].id

        divJogos += `<div class="card"> 
        <h1>${nomeDoJogo}</h1>
        <img src="${imagem}"> </img>
        <h2>Lançamento: ${anoDeLancamento}</h2>
        <a href="detalhes.html?id=${id}"> <p>Mais detalhes...</p> </a>
        </div>`
    }
    contentJogos.insertAdjacentHTML("beforeend", divJogos)
}


window.onload = function () {
    window.location.search
    const params = new URLSearchParams(window.location.search)
    const search = params.get("search")
    requisicaoJogo(search).then(renderizarJogos)
}