import { useState } from "react";
import "./App.css"; // Para estilização

function TicTacToe() {
  const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const handleClick = (index) => {
    setBoard((prev) =>
      prev.map((value, i) => (i === index ? "X" : value))
    );
  };

  return (
    <div>
      <h2>Próximo Jogador: X</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "5px" }}>
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "24px",
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <TicTacToe />
    </div>
  );
}