import { createContext, useState, useEffect } from "react";
import conffeti from "canvas-confetti";
import { checkWinnerFrom, checkEndGame } from "../logic/board";
import { TURNS } from "../constants";
import { saveGameStorage, resetSaveGameStorage } from "../logic/save";

export const SquareContext = createContext();

export function SquareContextProvider(props) {
  const [board, setBoard] = useState(() => {
    const boardfromStorage = window.localStorage.getItem("board");
    return boardfromStorage
      ? JSON.parse(boardfromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.x;
  });
  //utilizamos null cuando no hay ganador y false es que hay un empate
  const [winner, setWinner] = useState(null);
  const [playerOne, setPlayersOne] = useState("");
  const [playertwo, setPlayersTwo] = useState("");
  const [players, setPlayers] = useState([]);

  const updateBoard = (index) => {
    //No actualizamos si ya tiene algo o hay ganador
    if (board[index] || winner || players.length === 0) return;

    //actualizar tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);
    saveGameStorage({ board: newBoard, turn: newTurn });
    // revisar si hay un ganado
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      conffeti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  function createPlayer() {
    setPlayers([...players, playerOne, playertwo]);
    setPlayersOne("");
    setPlayersTwo("");
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    setPlayers([]);
    resetSaveGameStorage();
  };

  return (
    <SquareContext.Provider
      value={{
        resetGame,
        updateBoard,
        turn,
        board,
        winner,
        createPlayer,
        playerOne,
        playertwo,
        players,
        setPlayersOne,
        setPlayersTwo,
      }}>
      {props.children}
    </SquareContext.Provider>
  );
}
