let jogada = 0;

const buttonsDisabled = document.querySelector(".gameContainer").children;
const jogadas = [];

for (let i = 0; i < buttonsDisabled.length; i++) {
  buttonsDisabled[i].disabled = true;
}

document.getElementById("btnGo").addEventListener("click", function (ev) {
  jogadas.length = 0;
  document.getElementById("namePlayerWin").style.display = "none";

  const playerX = document.getElementById("namePlayerX").value;
  const playerO = document.getElementById("namePlayerO").value;

  if (!playerO || playerX === "") {
    document.getElementById("namePlayerWin").style.display = "block";
    document.getElementById("namePlayerWin").innerText =
      "preencha todos os campos";
  } else {
    for (let i = 0; i < buttonsDisabled.length; i++) {
      buttonsDisabled[i].disabled = false;
      document.getElementById("btnGo").style.display = "none";
    }
    ("");
  }
});

document.getElementById("playAgain").addEventListener("click", function (ev) {
  const buttonClear = document.querySelector(".gameContainer").children;

  for (let i = 0; i < buttonClear.length; i++) {
    buttonClear[i].textContent = "";
    buttonClear[i].classList.remove("win");
    buttonClear[i].disabled = true;
  }

  jogada = 0;

  document.getElementById("namePlayerO").value = "";
  document.getElementById("namePlayerX").value = "";
  document.getElementById("namePlayerWin").style.display = "none";

  document.getElementById("playAgain").style.display = "none";
  document.getElementById("playAgain").innerText = "Jogar de Novo";
  document.getElementById("btnGo").style.display = "block";
});

function buttonclicked(buttonNumber) {
  const button =
    document.querySelector(".gameContainer").children[buttonNumber];

  if (!button.disabled) {
    const verificacao = jogada % 2 == 0 ? "X" : "O";

    jogada += 1;
    button.disabled = true;
    button.textContent = verificacao;
    jogadas.push(button);
    console.log(jogadas);
  }

  win();

  const namePlayerWin =
    button.textContent == "X"
      ? document.getElementById("namePlayerX").value
      : document.getElementById("namePlayerO").value;

  if (win()) {
    document.getElementById(
      "namePlayerWin"
    ).innerText = `${namePlayerWin} Venceu!!!`;
    const buttonClear = document.querySelector(".gameContainer").children;

    for (let i = 0; i < buttonClear.length - 1; i++) {
      buttonClear[i].disabled = true;
    }
    playAgain();
  } else if (!win() && jogadas.length === 9) {
    document.getElementById("namePlayerWin").style.display = "block";
    document.getElementById("namePlayerWin").innerText = `Empate`;
    playAgain();
  }

  function playAgain() {
    document.getElementById("namePlayerWin").style.display = "block";
    document.getElementById("playAgain").style.display = "block";
  }

  function win() {
    const buttonWin = document.querySelector(".gameContainer").children;

    // verificação horizontal

    if (
      buttonWin[0].textContent === buttonWin[1].textContent &&
      buttonWin[2].textContent === buttonWin[1].textContent &&
      buttonWin[1].textContent !== ""
    ) {
      buttonWin[0].className = "win";
      buttonWin[1].className = "win";
      buttonWin[2].className = "win";
      return true;
    }

    if (
      buttonWin[3].textContent === buttonWin[4].textContent &&
      buttonWin[5].textContent === buttonWin[4].textContent &&
      buttonWin[4].textContent !== ""
    ) {
      buttonWin[3].className = "win";
      buttonWin[4].className = "win";
      buttonWin[5].className = "win";
      return true;
    }

    if (
      buttonWin[6].textContent === buttonWin[7].textContent &&
      buttonWin[8].textContent === buttonWin[7].textContent &&
      buttonWin[7].textContent !== ""
    ) {
      buttonWin[6].className = "win";
      buttonWin[7].className = "win";
      buttonWin[8].className = "win";
      return true;
    }
    // verificação horizontal

    // verificação vertical

    if (
      buttonWin[0].textContent === buttonWin[3].textContent &&
      buttonWin[6].textContent === buttonWin[3].textContent &&
      buttonWin[3].textContent !== ""
    ) {
      buttonWin[0].className = "win";
      buttonWin[3].className = "win";
      buttonWin[6].className = "win";
      return true;
    }

    if (
      buttonWin[1].textContent === buttonWin[4].textContent &&
      buttonWin[7].textContent === buttonWin[4].textContent &&
      buttonWin[4].textContent !== ""
    ) {
      buttonWin[1].className = "win";
      buttonWin[4].className = "win";
      buttonWin[7].className = "win";
      return true;
    }

    if (
      buttonWin[2].textContent === buttonWin[5].textContent &&
      buttonWin[8].textContent === buttonWin[5].textContent &&
      buttonWin[5].textContent !== ""
    ) {
      buttonWin[2].className = "win";
      buttonWin[5].className = "win";
      buttonWin[8].className = "win";
      return true;
    }
    // verificação vertical

    // verificação diagonal

    if (
      buttonWin[0].textContent === buttonWin[4].textContent &&
      buttonWin[8].textContent === buttonWin[4].textContent &&
      buttonWin[4].textContent !== ""
    ) {
      buttonWin[0].className = "win";
      buttonWin[4].className = "win";
      buttonWin[8].className = "win";
      return true;
    }

    if (
      buttonWin[2].textContent === buttonWin[4].textContent &&
      buttonWin[6].textContent === buttonWin[4].textContent &&
      buttonWin[4].textContent !== ""
    ) {
      buttonWin[2].className = "win";
      buttonWin[4].className = "win";
      buttonWin[6].className = "win";
      return true;
    }
  }
}
