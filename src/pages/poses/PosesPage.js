import { Fragment } from "react";

import PoseList from "../../components/poses/PoseList";

const PosesPage = (props) => {
  return (
    <Fragment>
      <h1>Pose List</h1>
      <PoseList />
    </Fragment>
  );
};

export default PosesPage;
