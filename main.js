var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');
if (nivel === 'fácil') {
  criaMosquitoTempo = 1250;
} else if (nivel === 'normal') {
  criaMosquitoTempo = 1000;
} else if (nivel === 'dificil') {
  criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = 'vitoria.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();
    if (vidas > 3) {
      window.location.href = 'fim_de_jogo.html'
    } else {
      document.getElementById('v' + vidas).src = 'images/coracao_vazio.png';
      vidas++;
    }
    
  }

  var posX = Math.floor(Math.random() * largura) - 90;
  var posY = Math.floor(Math.random() * altura) - 90;

  posX = posX < 0 ? 0 : posX;
  posY = posY < 0 ? 0 : posY;

  var mosquito = document.createElement('img');
  mosquito.src = 'images/mosca.png';
  mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio();
  mosquito.style.left = posX + 'px';
  mosquito.style.top = posY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito'
  mosquito.onclick = function() {
    this.remove();
  }

  // Cria um elemento filho de body
  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch(classe) {
    case 0:
      return 'mosquito1';
    
    case 1:
      return 'mosquito2';
    
    case 2:
      return 'mosquito3';
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch(classe) {
    case 0:
      return 'ladoA';
    
    case 1:
      return 'ladoB';
  }
}