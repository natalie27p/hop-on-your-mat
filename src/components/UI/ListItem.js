import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return <div className={classes.item}>{props.children}</div>;
  //   return (
  // <li className={classes.item}>
  //   <figure>
  //     <blockquote>
  //       <p>{props.nameBig}</p>
  //     </blockquote>
  //     <figcaption>{props.nameSmall}</figcaption>
  //     <figcaption>{props.text}</figcaption>
  //   </figure>
  //   <Link className="btn" to={`/poses/${props.id}`} poses={props.poses}>
  //     View Details
  //   </Link>
  // </li>
  //   );
};

export default ListItem;
