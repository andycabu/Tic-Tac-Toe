import { useContext } from "react";
import { SquareContext } from "../context/SquareContex";

export const Square = ({ children, isSelected, index }) => {
  const { updateBoard } = useContext(SquareContext);

  const className = `square ${isSelected ? "is-selected" : ""} `;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
