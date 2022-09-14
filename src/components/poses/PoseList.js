import { Fragment } from "react";
import { useFetch } from "../../hooks/useFetch";

import PoseItem from "./PoseItem";
import classes from "./PoseList.module.css";

const PoseList = (props) => {
  const url = "http://localhost:3000/poses/";
  const { data: poses, isPending, error } = useFetch(url);

  return (
    <Fragment>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={classes.list}>
        {poses &&
          poses.map((pose) => (
            <PoseItem
              id={pose.id}
              nameBig={pose.nameSanskrit}
              nameSmall={pose.nameEnglish}
              text={pose.description}
            />
          ))}
      </ul>
    </Fragment>
  );
};

export default PoseList;
