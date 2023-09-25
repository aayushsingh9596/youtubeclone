import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../utils/apiCallSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const data = useSelector((store) => store.apiCall.NormalVideodata);
  //const pageToken=data?.nextPageToken;
  const isLoading = useSelector((store) => store.apiCall.isLoading); 
  
  const pageTokenRef = useRef();
  pageTokenRef.current = data?.nextPageToken;

  const throttleInterval = 1000; 
  let throttledScroll = false;

  const handleScroll = () => {
    if (!throttledScroll && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      throttledScroll = true;
      setTimeout(() => {
        throttledScroll = false;
        fetchVideosFromApi();
      }, throttleInterval);
    }
  };

  useEffect(() => {
    if (data?.items) {
      setVideos((prevVideos) => [...prevVideos, ...data?.items]);
    }
  }, [data,data?.items]);

  useEffect(() => {
    fetchVideosFromApi();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const fetchVideosFromApi = () => {
    dispatch(fetchVideos(["Normal", pageTokenRef.current]));
  };

  return (
    <div className="VideoContainer">
      {videos?.map((video,index) => (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`/WatchPage/${video.id}`}
          key={video.id+index}
        >
          <Video video={video} />
        </Link>
      ))}
      {isLoading && (
        <div className="shimmer-container">
          <div className="shimmer"></div>
          <div className="shimmer"></div>
          <div className="shimmer"></div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;