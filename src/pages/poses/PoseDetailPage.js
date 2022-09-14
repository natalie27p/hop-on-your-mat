import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import HighlightedPose from "../../components/poses/HighlightedPose";

const PoseDetailPage = (props) => {
  const { poseId } = useParams();
  const url = "http://localhost:3000/poses/" + poseId;
  const { data: pose, isPending, error } = useFetch(url);

  return (
    <Fragment>
      <h1>Pose List</h1>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {pose && (
        <HighlightedPose
          key={pose.id}
          nameSan={pose.nameSanskrit}
          nameEng={pose.nameEnglish}
          description={pose.description}
          instructions={pose.instructions}
          benefits={pose.benefits}
          imgSrc={pose.imgSource}
        />
      )}
    </Fragment>
  );
};

export default PoseDetailPage;
