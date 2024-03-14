import Button from "./Button";
import Reset from "./Reset";
import "./App.css";
import { useEffect, useState } from "react";

const Game = () => {
  let [grid, setGrid] = useState(Array(9).fill(null));
  let [player, setPlayer] = useState("X");
  let [gameStatus, setGameStatus] = useState("Play X");

  const resetGame = () => {
    location.reload();
  };

  const updateGameStatus = () => {
    let win = calculateWinner(grid);
    if (["X", "O"].includes(win)) {
      setGameStatus("Congo! " + win + " Winner");
      setPlayer("W");
      return;
    } else if (win === false) {
      setGameStatus("Game is Draw");
      setPlayer("W");
      return;
    }
    if (player === "X") {
      setGameStatus("Play X");
    } else if (player === "O") {
      setGameStatus("Play O");
    }
  };

  const handleButtonClick = (pos: number) => {
    if (grid[pos] !== null && player != "W") {
      return false;
    }
    let temp_grid = grid.slice();
    temp_grid[pos] = player;
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    setGrid(temp_grid);
    return true;
  };

  useEffect(() => {
    updateGameStatus();
  }, [player]);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-sm-6">
            <table className="game-grid">
              <tbody>
                {[0, 1, 2].map((row) => (
                  <tr key={row} className="matrix-row">
                    {[0, 1, 2].map((x) => (
                      <th key={3 * row + x} className="matrix-col">
                        <Button
                          onClick={() => handleButtonClick(3 * row + x)}
                          curPlayer={player}
                          value={grid[3 * row + x]}
                        />
                      </th>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-6">{gameStatus}</div>
        </div>
        <div className="row">
          <Reset onClick={resetGame} />
        </div>
      </div>
    </>
  );
};

function calculateWinner(grid: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a];
    }
  }
  return grid.includes(null);
}

export default Game;
