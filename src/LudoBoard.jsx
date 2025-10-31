import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let updateBlue = () => {
    setMoves((previousMoves) => {
      return { ...previousMoves, blue: (previousMoves.blue += 1) };
    });
  };
  let updateYellow = () => {
    setMoves((previousMoves) => {
      return { ...previousMoves, yellow: (previousMoves.yellow += 1) };
    });
  };
  let updateGreen = () => {
    setMoves((previousMoves) => {
      return { ...previousMoves, green: (previousMoves.green += 1) };
    });
  };
  let updateRed = () => {
    setMoves((previousMoves) => {
      return { ...previousMoves, red: (previousMoves.red += 1) };
    });
  };

  return (
    <div>
      <p>Game Started!</p>
      <div className="board">
        <p>Blue moves:{moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves:{moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green moves:{moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves:{moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
