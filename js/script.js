let player1 = 0;
let player2 = 0;

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

//adicionar evento de click em todas as caixas
for (let i = 0; i < boxes.length; i++) {
  //quando há um click na caixa
  boxes[i].addEventListener('click', function () {
    //verificar se ja tem elemento na caixa
    if (this.childNodes.length === 0) {
      //saber quem vai jogar
      let el = checkEl(player1, player2);

      //adicionar o elemento dentro da caixa
      //vamos clonar o elemento
      let cloneEl = el.cloneNode(true);

      //usar a função para inserir o elemento na lista
      this.appendChild(cloneEl);

      //verificar a troca dos elementos
      if (player1 === player2) {
        player1++;
      } else {
        player2++;
      }
      checkCondition();
    }
  });
}

//definir quem começa
function checkEl(player1, player2) {
  if (player1 === player2) {
    return x;
  } else {
    return o;
  }
}

//definir quem venceu
function checkCondition() {
let b1 = document.getElementById("block-1");
let b2 = document.getElementById('block-2');
let b3 = document.getElementById('block-3');
let b4 = document.getElementById('block-4');
let b5 = document.getElementById('block-5');
let b6 = document.getElementById('block-6');
let b7 = document.getElementById('block-7');
let b8 = document.getElementById('block-8');
let b9 = document.getElementById('block-9');


//horizntal
if(
  b1.childNodes.length > 0 && 
  b2.childNodes.length > 0 && 
  b3.childNodes.length > 0
) {
  let b1Child = b1.childNodes[0].className;
  let b2Child = b2.childNodes[0].className;
  let b3Child = b3.childNodes[0].className;

//verificar a primeira linha
if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
  declareWinner("x");
} else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
  declareWinner("o");
  }
}

if (
  b4.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b6.childNodes.length > 0
) {
  let b4Child = b4.childNodes[0].className;
  let b5Child = b5.childNodes[0].className;
  let b6Child = b6.childNodes[0].className;

  //verificar a segunda linha
if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
  declareWinner("x");
} else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
  declareWinner("o");
  }
}

if (
  b7.childNodes.length > 0 &&
  b8.childNodes.length > 0 &&
  b9.childNodes.length > 0
) {
  let b7Child = b7.childNodes[0].className;
  let b8Child = b8.childNodes[0].className;
  let b9Child = b9.childNodes[0].className;

  //verificar a terceira linha
if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
    declareWinner("x");
} else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
    declareWinner("o");
}
}


//vertical
if (
  b1.childNodes.length > 0 &&
  b4.childNodes.length > 0 &&
  b7.childNodes.length > 0
) {
  let b1Child = b1.childNodes[0].className;
  let b4Child = b4.childNodes[0].className;
  let b7Child = b7.childNodes[0].className;

  //verificar a primeira linha
  if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
    declareWinner("x");
  } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
    declareWinner("o");
  }
}

if (
  b2.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b8.childNodes.length > 0
) {
  let b2Child = b2.childNodes[0].className;
  let b5Child = b5.childNodes[0].className;
  let b8Child = b8.childNodes[0].className;

  //verificar a segunda linha
  if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
    declareWinner("x");
  } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
    declareWinner("o");
  }
}

if (
  b3.childNodes.length > 0 &&
  b6.childNodes.length > 0 &&
  b9.childNodes.length > 0
) {
  let b3Child = b3.childNodes[0].className;
  let b6Child = b6.childNodes[0].className;
  let b9Child = b9.childNodes[0].className;

  //verificar a terceira linha
  if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
    declareWinner("x");
  } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
    declareWinner("o");
  }
}


//diagonal esquerda
if (
  b1.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b9.childNodes.length > 0
) {
  let b1Child = b1.childNodes[0].className;
  let b5Child = b5.childNodes[0].className;
  let b9Child = b9.childNodes[0].className;

  if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
    declareWinner("x");
  } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
    declareWinner("o");
  }
}


//diagonal direita
if (
  b3.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b7.childNodes.length > 0
) {
  let b3Child = b3.childNodes[0].className;
  let b5Child = b5.childNodes[0].className;
  let b7Child = b7.childNodes[0].className;

  if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
    declareWinner("x");
  } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
    declareWinner("o");
  }
}


//deu velha
let counter = 0;

for (let i = 0; i < boxes.length; i ++) {
  if(boxes[i].childNodes[0] != undefined) {
    counter++;
  }
}


//testar a quantidade de elemento
if(counter == 9) {
  declareWinner("Deu velha");
}

//zerar o jogo e declarar o vencedor
function declareWinner(winner){
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardY = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == 'x'){
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'O jogador 1 venceu!!!';
  } else if (winner == 'o'){
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = 'O jogador 2 venceu!!!';
  } else {
    msg = "Deu velha!!!"
  }


//exibir na tela a msg
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

//esconder a msg
  setTimeout(function(){
    messageContainer.classList.add("hide");
}, 3000)

player1 = 0;
player2 = 0;

//zerar o tabuleiro
  let boxesToRemove = document.querySelectorAll(".box div")

  for (let i = 0; i < boxesToRemove.length; i++){
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}




































}

