//REQUISÇÃO API

//JOGOS:

function requisicaoJogo() {
    return fetch('https://api.rawg.io/api/games?key=021f7245981e4b7a9d335222ed4dd624&games&page_size=8')
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



//PLATFORMS:

function requisicaoPlatforms() {
    return fetch('https://api.rawg.io/api/platforms?key=021f7245981e4b7a9d335222ed4dd624&games&page_size=3')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (platforms) {
            return platforms.results
        })
}

function renderizarPlatforms(platforms) {
    let contentPlatforms = document.getElementById('content-platforms')
    let divPlatforms = ''
    console.log(platforms)
    for (let i = 0; i < platforms.length; i++) {

        let nomeDaPlataforma = platforms[i].name
        let imagem = platforms[i].image_background
        let jogosLancados = platforms[i].games
        divPlatforms += `<div class="card"> 

        <h1 class="text-platforms">${nomeDaPlataforma}</h1>

        <img class="img-platforms" src="${imagem}"> </img>

        <p class="title-plat"> <b> Principais Jogos:</b> </p>

        <p>
             ${jogosLancados[0].name} 
        <br> ${jogosLancados[1].name} 
        <br> ${jogosLancados[2].name}
        </p>

        <br>

        </div>`
    }
    contentPlatforms.insertAdjacentHTML("beforeend", divPlatforms)
}


//DEVELOPERS:

function requisicaoDevelopers() {
    return fetch('https://api.rawg.io/api/developers?key=021f7245981e4b7a9d335222ed4dd624&games&page_size=3')
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (developers) {
            return developers.results
        })
}

function renderizarDevelopers(developers) {
    let contentDevelopers = document.getElementById('content-developers')
    let divDevelopers = ''
    console.log(developers)
    for (let i = 0; i < developers.length; i++) {

        let nomeDaPlataforma = developers[i].name
        let imagem = developers[i].image_background
        let jogosLancados = developers[i].games
        divDevelopers += `<div class="card"> 

        <h1 class="text-developers">${nomeDaPlataforma}</h1>

        <img class="img-developers" src="${imagem}"> </img>

        <p class="title-plat"> <b> Principais Jogos:</b> </p>

        <p>
             ${jogosLancados[0].name} 
        <br> ${jogosLancados[1].name} 
        <br> ${jogosLancados[2].name}
        </p>

        <br>

        </div>`
    }
    contentDevelopers.insertAdjacentHTML("beforeend", divDevelopers)
}

window.onload = function () {
    requisicaoJogo().then(renderizarJogos)
    requisicaoPlatforms().then(renderizarPlatforms)
    requisicaoDevelopers().then(renderizarDevelopers)

    document.getElementById("barraPesquisa").onchange = function () { buscarResultados() }
    function buscarResultados() {
        let search = document.getElementById("barraPesquisa");
        window.location.href = `./pesquisar.html?search=${search.value}`
    }
}

