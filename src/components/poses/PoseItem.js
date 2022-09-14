import { Link } from "react-router-dom";

import ListItem from "../UI/ListItem";
import classes from "./PoseItem.module.css";

const PoseItem = (props) => {
  return (
    <li className={classes.item}>
      {/* <ListItem> */}
      <figure>
        <h1>{props.nameBig}</h1>
        <p>{props.nameSmall}</p>
        <figcaption>{props.text}</figcaption>
      </figure>
      <Link className="btn" to={`/poses/${props.id}`}>
        View Details
      </Link>
      {/* </ListItem> */}
    </li>
  );
};

export default PoseItem;
