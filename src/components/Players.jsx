import { useContext, useEffect } from "react";
import { SquareContext } from "../context/SquareContex";

export function Players() {
  const { setPlayersOne, setPlayersTwo, createPlayer, playerOne, playertwo } =
    useContext(SquareContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlayer(playerOne, playertwo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="players"
        value={playerOne}
        placeholder="Jugador 1"
        onChange={(e) => {
          setPlayersOne(e.target.value);
        }}
      />
      <input
        className="players"
        value={playertwo}
        placeholder="Jugador 2"
        onChange={(e) => {
          setPlayersTwo(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
}
