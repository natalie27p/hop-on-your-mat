import { Link } from "react-router-dom";

import ListItem from "../UI/ListItem";
import classes from "./GameItem.module.css";

const GameItem = (props) => {
  return (
    <li className={classes.item}>
      {/* <ListItem> */}
      <figure>
        <h1>{props.name}</h1>
        <figcaption>{props.text}</figcaption>
      </figure>
      <Link className="btn" to={`/games/${props.id}`}>
        Start game!
      </Link>
      {/* </ListItem> */}
    </li>
  );
};

export default GameItem;
