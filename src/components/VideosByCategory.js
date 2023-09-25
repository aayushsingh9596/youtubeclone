import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../utils/apiCallSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const VideosByCategory = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.apiCall.NormalVideodata);
  const videos=data?.items;
  console.log("videos in VideoContainer",videos);

  useEffect(() => {
    dispatch(
      fetchVideos(["VideoByCategory",params.category])
    );
  }, [params.category]);

  return <div className="VideosByCategory">      
  {videos?.map((video) => {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/WatchPage/${video.id}`}
        key={video.id}
      >
        <Video video={video} />
      </Link>
    );
  })}</div>;
};
export default VideosByCategory;