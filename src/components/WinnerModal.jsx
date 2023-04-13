import { useContext } from "react";
import { Square } from "./Square";
import { SquareContext } from "../context/SquareContex";

export function WinnerModal() {
  const { winner, resetGame, players } = useContext(SquareContext);

  if (winner === null) return null;
  const winnerText = winner === false ? "Hay un empate" : "Gano";

  return (
    <section className={winnerText === "Gano" ? "winner" : "tie"}>
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && (
            <Square>{winner === "❌" ? players[0] : players[1]}</Square>
          )}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
