import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import MemoryGame from "../../components/games/memoryGame/MemoryGame";

// const cardImages = [
//   { src: "/img/adhoMukhaSvanasana.png", matched: false },
//   { src: "/img/sukhasana.png", matched: false },
//   { src: "/img/vrksasana.png", matched: false },
//   { src: "/img/chakravakasana.png", matched: false },
//   { src: "/img/tadasana.png", matched: false },
//   { src: "/img/uttanasana.png", matched: false },
// ];

const MemoryGamePage = (props) => {
  const { gameId } = useParams();
  const url = "http://localhost:3000/games/" + gameId;
  const { data: game, isPending, error } = useFetch(url);

  return (
    <Fragment>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {game && (
        <MemoryGame key={game.id} name={game.name} cards={game.images} />
      )}
    </Fragment>

    // <div className="MemoryGame">
    //   <h1>Memory Game:)</h1>
    //   <button onClick={shuffleCards}>New Game</button>

    //   <div className="card-grid">
    //     {cards.map((card) => (
    //       <SingleCard
    //         key={card.id}
    //         card={card}
    //         handleChoice={handleChoice}
    //         flipped={card === choiceOne || card === choiceTwo || card.matched}
    //         disabled={disabled}
    //       />
    //     ))}
    //   </div>

    //   <p>Turns: {turns}</p>
    // </div>
  );
};

export default MemoryGamePage;
