$(document).ready(function() {
  var turns = ["#", "#", "#", "#", "#", "#", "+", "#"];
  var computerTurn = "";
  var turn = "";
  var gameOn = false;
  var count = 0;

  var startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
  switch (startTurn) {
    case "X":
      computerTurn = "O";
      turn = "X";
      $("#message").html("Player " + turn + " gets to start!");
      break;
    case "O":
      computerTurn = "X";
      turn = "O";
      $("#message").html("Player " + turn + " gets to start!");
      break;
    case null:
      alert("Sorry. Please type X or O");
      window.location.reload(true);
      break;
    default:
      alert("Sorry. Please type X or O");
      window.location.reload(true);
      break;
  }

  function computersTurn() {
    var taken = false;
    while (taken === false && count !== 5) {
      var computerMove;
      if (
        $("#2").text() !== "" &&
        $("#4").text() !== "" &&
        $("#6").text() === ""
      ) {
        computerMove = 6;
      } else if (
        $("#0").text() !== "" &&
        $("#4").text() !== "" &&
        $("#8").text() === ""
      ) {
        computerMove = 8;
      } else if (
        $("#0").text() !== "" &&
        $("#1").text() !== "" &&
        $("#2").text() === ""
      ) {
        computerMove = 2;
      } else if (
        $("#2").text() !== "" &&
        $("#1").text() !== "" &&
        $("#0").text() === ""
      ) {
        computerMove = 0;
      } else if (
        $("#0").text() !== "" &&
        $("#3").text() !== "" &&
        $("#6").text() === ""
      ) {
        computerMove = 6;
      } else if (
        $("#2").text() !== "" &&
        $("#5").text() !== "" &&
        $("#8").text() === ""
      ) {
        computerMove = 8;
      } else if (
        $("#1").text() !== "" &&
        $("#4").text() !== "" &&
        $("#7").text() === ""
      ) {
        computerMove = 7;
      } else if (
        $("#7").text() !== "" &&
        $("#4").text() !== "" &&
        $("#1").text() === ""
      ) {
        computerMove = 1;
      } else if (
        $("#3").text() !== "" &&
        $("#4").text() !== "" &&
        $("#5").text() === ""
      ) {
        computerMove = 5;
      } else if (
        $("#5").text() !== "" &&
        $("#4").text() !== "" &&
        $("#3").text() === ""
      ) {
        computerMove = 3;
      } else if (
        $("#7").text() !== "" &&
        $("#1").text() !== "" &&
        $("#4").text() === ""
      ) {
        computerMove = 4;
      } else if (
        $("#1").text() !== "" &&
        $("#7").text() !== "" &&
        $("#4").text() === ""
      ) {
        computerMove = 4;
      } else if (
        $("#1").text() !== "" &&
        $("#2").text() !== "" &&
        $("#0").text() === ""
      ) {
        computerMove = 0;
      } else if (
        $("#1").text() !== "" &&
        $("#0").text() !== "" &&
        $("#2").text() === ""
      ) {
        computerMove = 2;
      } else if (
        $("#4").text() !== "" &&
        $("#5").text() !== "" &&
        $("#3").text() === ""
      ) {
        computerMove = 3;
      } else if (
        $("#4").text() !== "" &&
        $("#3").text() !== "" &&
        $("#5").text() === ""
      ) {
        computerMove = 5;
      } else if (
        $("#7").text() !== "" &&
        $("#8").text() !== "" &&
        $("#6").text() === ""
      ) {
        computerMove = 6;
      } else if (
        $("#7").text() !== "" &&
        $("#6").text() !== "" &&
        $("#8").text() === ""
      ) {
        computerMove = 8;
      } else if (
        $("#6").text() !== "" &&
        $("#4").text() !== "" &&
        $("#2").text() === ""
      ) {
        computerMove = 2;
      } else if (
        $("#4").text() !== "" &&
        $("#2").text() !== "" &&
        $("#6").text() === ""
      ) {
        computerMove = 6;
      } else if (
        $("#4").text() !== "" &&
        $("#6").text() !== "" &&
        $("#2").text() === ""
      ) {
        computerMove = 2;
      } else if (
        $("#8").text() !== "" &&
        $("#4").text() !== "" &&
        $("#0").text() === ""
      ) {
        computerMove = 0;
      } else if (
        $("#4").text() !== "" &&
        $("#8").text() !== "" &&
        $("#0").text() === ""
      ) {
        computerMove = 0;
      } else if (
        $("#4").text() !== "" &&
        $("#0").text() !== "" &&
        $("#8").text() === ""
      ) {
        computerMove = 8;
      } else {
        computerMove = (Math.random() * 9).toFixed();
      }
      var move = $("#" + computerMove).text();
      if (move === "") {
        $("#" + computerMove).text(computerTurn);
        taken = true;
        turns[computerMove] = computerTurn;
      }
    }
  }

  function playerTurn(turn, id) {
    console.log("playerTurn: turn = ", turn);
    console.log("playerTurn: id = ", id);
    //console.log("computerTurn: turn = ", turn);
    //console.log("computerTurn: id = ", id);

    var spotTaken = $("#" + id).text();
    if (spotTaken === "") {
      count++;
      turns[id] = turn;
      $("#" + id).text(turn);
      winCondition(turns, turn);
      if (gameOn === false) {
        computersTurn();
        console.log("---");
        $("#message").html("It's " + turn + "'s turn.");
        winCondition(turns, computerTurn);
      }
    }
  }

  function winCondition(trackMoves, currentMove) {
    if (
      trackMoves[0] === currentMove &&
      trackMoves[1] === currentMove &&
      trackMoves[2] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[6] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[0] === currentMove &&
      trackMoves[3] === currentMove &&
      trackMoves[6] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[0] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[1] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[7] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[5] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[2] === currentMove &&
      trackMoves[5] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[3] === currentMove &&
      trackMoves[4] === currentMove &&
      trackMoves[5] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (
      trackMoves[6] === currentMove &&
      trackMoves[7] === currentMove &&
      trackMoves[8] === currentMove
    ) {
      gameOn = true;
      reset();
      alert("Player " + currentMove + " wins!");
    } else if (!trackMoves.includes("#")) {
      gameOn = true;
      reset();
      alert("It is a Draw!");
    } else {
      gameOn = false;
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(turn, slot);
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "+", "#"];
    count = 0;
    $(".tic").text("#");
    gameOn = true;
  }

  $("#reset").click(function() {
    reset();
    window.location.reload(true);
  });
});
