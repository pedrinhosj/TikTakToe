let jogadas = 0;

const combinations = () => {
  const buttonWin = document.querySelector(".gameContainer").children;

  //   // verificação horizontal
  if (
    buttonWin[0].textContent === buttonWin[1].textContent &&
    buttonWin[2].textContent === buttonWin[1].textContent &&
    buttonWin[1].textContent !== ""
  ) {
    return true;
  }

  if (
    buttonWin[3].textContent === buttonWin[4].textContent &&
    buttonWin[5].textContent === buttonWin[4].textContent &&
    buttonWin[4].textContent !== ""
  ) {
    return true;
  }

  if (
    buttonWin[6].textContent === buttonWin[7].textContent &&
    buttonWin[8].textContent === buttonWin[7].textContent &&
    buttonWin[7].textContent !== ""
  ) {
    return true;
  }
  // verificação horizontal

  // verificação vertical

  if (
    buttonWin[0].textContent === buttonWin[3].textContent &&
    buttonWin[6].textContent === buttonWin[3].textContent &&
    buttonWin[3].textContent !== ""
  ) {
    return true;
  }

  if (
    buttonWin[1].textContent === buttonWin[4].textContent &&
    buttonWin[7].textContent === buttonWin[4].textContent &&
    buttonWin[4].textContent !== ""
  ) {
    return true;
  }

  if (
    buttonWin[2].textContent === buttonWin[5].textContent &&
    buttonWin[8].textContent === buttonWin[5].textContent &&
    buttonWin[5].textContent !== ""
  ) {
    return true;
  }
  // verificação vertical

  // verificação diagonal

  if (
    buttonWin[0].textContent === buttonWin[4].textContent &&
    buttonWin[8].textContent === buttonWin[4].textContent &&
    buttonWin[4].textContent !== ""
  ) {
    return true;
  }

  if (
    buttonWin[2].textContent === buttonWin[4].textContent &&
    buttonWin[6].textContent === buttonWin[4].textContent &&
    buttonWin[4].textContent !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

function checkedWin(namePlayerWin) {
  if (combinations()) {
    Swal.fire({
      title: namePlayerWin + " Win",
      text: "Do you want to continue",
      icon: "success",
      showCancelButton: true,
      cancelButtonText: "Exit",
      confirmButtonText: "Play Again",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      } else if (!result.isConfirmed) {
        document.getElementById("btnGo").style.display = "block";
        const cells = document.querySelector(".gameContainer").children;
        for (let i = 0; i < cells.length; i++) {
          cells[i].disabled = true;
        }
      }
    });
  } else if (!combinations() && jogadas === 9) {
    Swal.fire({
      title: "Empate",
      text: "Do you want to continue",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Exit",
      confirmButtonText: "Play Again",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      } else if (!result.isConfirmed) {
        document.getElementById("btnGo").style.display = "block";
        const cells = document.querySelector(".gameContainer").children;
        for (let i = 0; i < cells.length; i++) {
          cells[i].disabled = true;
        }
      }
    });
  }
}

let currentPlayer = "X";

function moves(buttonNumber) {
  const cell = document.querySelector(".gameContainer").children[buttonNumber];

  cell.innerText = currentPlayer;
  const namePlayerWin =
    currentPlayer === "X"
      ? document.getElementById("namePlayerX").value
      : document.getElementById("namePlayerO").value;
  jogadas.length++;
  jogadas++;
  checkedWin(namePlayerWin.trim());
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  cell.disabled = true;
}

function clear() {
  const cells = document.querySelector(".gameContainer").children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].disabled = false;
    cells[i].innerText = "";
    jogadas = 0;
    currentPlayer = "X";
  }
}

document.getElementById("btnGo").addEventListener("click", () => {
  const playerX = document.getElementById("namePlayerX").value.trim();
  const playerO = document.getElementById("namePlayerO").value.trim();

  if (playerX === "" || playerO === "") {
    Swal.fire({
      width: 200,
      position: "top-end",
      icon: "error",
      title: "Preencha Todos os Campos",
      showConfirmButton: false,
      timer: 900,
    });
  } else {
    document.getElementById("btnGo").style.display = "none";
    clear();
    const cells = document.querySelector(".gameContainer").children;
    for (let i = 0; i < cells.length; i++) {
      cells[i].disabled = false;

      cells[i].addEventListener("mouseover", (ev) => {
        ev.target.textContent = currentPlayer;
      });
      cells[i].addEventListener("mouseout", (ev) => {
        ev.target.textContent = "";
      });
    }
  }
});
