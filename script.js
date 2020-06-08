var x = document.getElementById('player');
var y = document.getElementById('steps');
var r = document.getElementById('alerts');
var step = -1;
var blocks = document.getElementsByClassName('block');
var full = 0;

function start() {
  document.title = "Game - play";
  z.innerHTML = "";
  for (var i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML+="<div class='block'></div>"
  }

  document.getElementById('game').onclick = function(event) {
    if (step % 2 == 0) {
      event.target.innerHTML = "<img src='img/icon-cross.png'>";
      step += 1;
      x.innerHTML = "Ход игрока - 2";
      y.innerHTML = "Всего ходов - " + step;
      checkStep()
    } else {
      event.target.innerHTML = "<img src='img/icon-circle.png'>";
      step += 1;
      x.innerHTML = "Ход игрока - 1";
      y.innerHTML = "Всего ходов - " + step;
      checkStep()
    }
  }
}

function checkStep() {
  if (blocks[0].innerHTML == '<img src="img/icon-cross.png">' && blocks[1].innerHTML == '<img src="img/icon-cross.png">' && blocks[2].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
    document.getElementById('game').onclick = "";
  }
  if (blocks[3].innerHTML == '<img src="img/icon-cross.png">' && blocks[4].innerHTML == '<img src="img/icon-cross.png">' && blocks[5].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[6].innerHTML == '<img src="img/icon-cross.png">' && blocks[7].innerHTML == '<img src="img/icon-cross.png">' && blocks[8].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[0].innerHTML == '<img src="img/icon-cross.png">' && blocks[3].innerHTML == '<img src="img/icon-cross.png">' && blocks[6].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[1].innerHTML == '<img src="img/icon-cross.png">' && blocks[4].innerHTML == '<img src="img/icon-cross.png">' && blocks[7].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[2].innerHTML == '<img src="img/icon-cross.png">' && blocks[5].innerHTML == '<img src="img/icon-cross.png">' && blocks[8].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[0].innerHTML == '<img src="img/icon-cross.png">' && blocks[4].innerHTML == '<img src="img/icon-cross.png">' && blocks[8].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[2].innerHTML == '<img src="img/icon-cross.png">' && blocks[4].innerHTML == '<img src="img/icon-cross.png">' && blocks[6].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 1";
  }
  if (blocks[0].innerHTML == '<img src="img/icon-circle.png">' && blocks[1].innerHTML == '<img src="img/icon-circle.png">' && blocks[2].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[3].innerHTML == '<img src="img/icon-circle.png">' && blocks[4].innerHTML == '<img src="img/icon-circle.png">' && blocks[5].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[6].innerHTML == '<img src="img/icon-circle.png">' && blocks[7].innerHTML == '<img src="img/icon-circle.png">' && blocks[8].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[0].innerHTML == '<img src="img/icon-circle.png">' && blocks[3].innerHTML == '<img src="img/icon-circle.png">' && blocks[6].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[1].innerHTML == '<img src="img/icon-circle.png">' && blocks[4].innerHTML == '<img src="img/icon-circle.png">' && blocks[7].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[2].innerHTML == '<img src="img/icon-circle.png">' && blocks[5].innerHTML == '<img src="img/icon-circle.png">' && blocks[8].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[0].innerHTML == '<img src="img/icon-circle.png">' && blocks[4].innerHTML == '<img src="img/icon-circle.png">' && blocks[8].innerHTML == '<img src="img/icon-circle.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  if (blocks[2].innerHTML == '<img src="img/icon-cross.png">' && blocks[4].innerHTML == '<img src="img/icon-cross.png">' && blocks[6].innerHTML == '<img src="img/icon-cross.png">') {
    x.innerHTML = "Выиграл игрок - 2";
  }
  for (var i = 0; i < 9; i++) {
    if (blocks[i] != "" ) {
      full += 1;
      if (full = 9 && step >= 9) {
        x.innerHTML = "Ничья";
      }
    }
  }
}
