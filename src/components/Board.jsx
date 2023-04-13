import { Square } from "./Square";
export function Board({ board, updateBoard }) {
  <section className="game">
    {board.map((board, index) => {
      return (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {board}
        </Square>
      );
    })}
  </section>;
}
