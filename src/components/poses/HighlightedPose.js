import classes from "./HighlightedPose.module.css";

const HighlightedPose = (props) => {
  return (
    <figure className={classes.pose}>
      <h1>{props.nameSan}</h1>
      <h2>Instructions:</h2>
      <p>{props.instructions}</p>
      <h2>Benefits:</h2>
      <p>{props.benefits}</p>
      <img src={props.imgSrc} alt="missing" />
      <figcaption>{props.nameEng}</figcaption>
    </figure>
  );
};

export default HighlightedPose;
