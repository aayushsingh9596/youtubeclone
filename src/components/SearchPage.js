import { useEffect } from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../utils/apiCallSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SearchPage = () => {
  const data = useSelector((store) => store.apiCall.NormalVideodata);
  const videos=data?.items;
  console.log("videos in VideoContainer",videos);
  const params = useParams();
  const searchQuery = params.query;
  const dispatch=useDispatch();

 

  useEffect(() => {
    dispatch(fetchVideos(['Search',searchQuery]))
  }, [dispatch,searchQuery]);

  return (
    <div className="SearchPage">
      {videos?.map((d) => {
        return (
          <Link
            style={{ textDecoration: "none",color:"inherit" }}
            to={`/WatchPage/${d.id.videoId}`}
            key={d.id.videoId}
          >
            <div key={d.id} className="SearchElement">
              <img alt="" src={d?.snippet.thumbnails?.high?.url}></img>
              <div className="SearchElement__info">
                <h4>{d?.snippet.title}</h4>
                <p>{d?.snippet.channelTitle}</p>
                <p>{d?.snippet.description}</p>
                <p>{d?.snippet.publishedAt}</p>
                <p>{d?.snippet.liveBroadcastContent}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;