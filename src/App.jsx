import { useContext, useEffect, useState } from "react";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import "./App.css";
import { WinnerModal } from "./components/WinnerModal";
import { SquareContext } from "./context/SquareContex";
import { Players } from "./components/Players";

function App() {
  const { resetGame, board, turn, players } = useContext(SquareContext);

  useEffect(() => {
    console.log("prueba useEffect");
  }, []);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <Players />
      <button onClick={resetGame}>Reset del juego</button>
      <div className="container-game">
        <div className="turn-">
          <h1>{players[0]}</h1>
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        </div>
        <section className="game">
          {board.map((board, index) => {
            return (
              <Square key={index} index={index}>
                {board}
              </Square>
            );
          })}
        </section>
        <div className="turn-">
          <h1>{players[1]}</h1>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </div>
      </div>
      <WinnerModal />
    </main>
  );
}

export default App;
