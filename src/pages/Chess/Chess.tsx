import { useState, useEffect } from "react";
import BoardComp from "./components/BoardComp";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./components/LostFigure";
import Timer from "./components/Timer";
import './chess_App.scss'

const Chess = () => {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    
    restart()
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="chess_app">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComp
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures
          title="Черные фигуры"
          figures={board.lostWhiteFigures}
        />
        <LostFigures
          title="Белые фигуры"
          figures={board.lostBlackFigures}
        />
      </div>
    </div>
  );
};


export default Chess;
