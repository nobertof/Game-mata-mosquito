var altura
var largura
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel = window.location.search.replace('?','');

if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000;
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function(){
    tempo--;
    if(tempo<0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
        return;
    }
    document.getElementById('cronometro').innerHTML=tempo;
    
},1000);

function posicaoRandomica(){

    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png';        
        vidas++;
        if(vidas>3){
            window.location.href = 'fim_de_jogo.html';
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    //criar o elemento html
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio()+' '+ladoAleatorio();
    mosquito.style.left = posicaoX+'px';
    mosquito.style.top = posicaoY+'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random()*3)+1;
    return 'mosquito'+classe;
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2);
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}