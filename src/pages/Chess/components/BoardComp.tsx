import { FC, useEffect, useState } from "react";
import { Board } from "../models/Board";
import CellComp from "./CellComp";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import React from "react";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}
const BoardComp: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    board.highlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h3 className="player">Текущий игрок <span>{currentPlayer?.color}</span></h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {index == 0 && (
              <div className="cell_index">
                {row.map((cell) => (
                  <div className="cell">{cell.x + 1}</div>
                ))}
              </div>
            )}
            <div className="cell_index_y">
              {row.map((cell) =>
                cell.y == 0 ? <div className="cell">{cell.x + 1}</div> : ""
              )}
            </div>

            {row.map((cell) => (
              <CellComp
                click={click}
                cell={cell}
                key={cell.id}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComp;
