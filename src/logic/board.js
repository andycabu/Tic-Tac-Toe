import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras para ver si x u o ganao
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] && // primer elemento comprueba x u o
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]; // ganador x u o
    }
  }
  return null; // no hay ganador
};
export const checkEndGame = (newBoard) => {
  // revisamos si todas las posiciones del tablero son null, siginifca que hay empate
  return newBoard.every((Square) => Square != null);
};
