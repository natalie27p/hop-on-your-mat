import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import classes from "./GameList.module.css";

import GameItem from "./GameItem";

const GameList = (props) => {
  const url = "http://localhost:3000/games/";
  const { data: games, isPending, error } = useFetch(url);

  return (
    <Fragment>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={classes.list}>
        {games &&
          games.map((game) => (
            <GameItem id={game.id} name={game.name} text={game.description} />
          ))}
      </ul>
    </Fragment>
  );
};

// const GameList = (props) => {
//   return (
//     <Fragment>
//       <h1>Choose a game:)</h1>
//       <ul>
//         <li>
//           <Link to={`/games/${props.id}`}>Memory Game</Link>
//           {/* <Link to="/games/0">Memory Game</Link> */}
//         </li>
//       </ul>
//     </Fragment>
//   );
// };

export default GameList;
