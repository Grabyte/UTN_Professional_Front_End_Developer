import {useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

const TURNS = {
  X : "x",
  O : "o"
}

const Square = ({children, isSelected, updateBoard, index}) =>{
  const className = `square ${isSelected ? "is-selected" : ""}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
};

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );

  const [turn, setTurn] = useState(TURNS.X);
   //El estado inicial de null es que no hay ganador y false es que hubo un empate y toca reiniciar el juego.
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    //revisamos todas las posiciones ganadoras para saber si X u O gano.
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // me va a devolver x u o
      }
    }
    //Si no hubo ganador que nos devuelva null
    return null
  };


  const updateBoard = (index) => {
    //Si la posicion donde hacemos click ya tiene algo o tenemos un ganador, no la actualizamos.
    if (board[index] || winner) return
    //Aca tenemos la logica para actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard);
    //la logica para cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);
    //revisamos si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const checkEndGame = (newBoard) => {
    // revisamos si hay un empate en el caso de que no alla mas espacios en el tablero.
    return newBoard.every((square) => square !== null);
  }
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };


  return (
    <main className='board'>
      <h1>3 en ralla</h1>
      <section className="game">
        {
          board.map((square, index) =>{
            return (
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <section>
        <button onClick={resetGame}>Reiniciar juego</button>
      </section>

        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false
                      ? "Empate" 
                      : "Ganó:"
                  }
                </h2>

                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Volver a jugar</button>
                </footer>
              </div>
            </section>
          )
        }

    </main>
  );
};

export default App;
