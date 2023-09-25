import React, { useEffect, useState } from "react";
import "./WatchPage.css";
import { useParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import Comment from "./Comment.js";
import { constComments } from "../utils/constComments";
import { YOUTUBE_API_KEY } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [isLive, setIsLive] = useState("nlive");
  const params = useParams();

  useEffect(() => {}, [isLive]);

  useEffect(()=>{
    const fetchLive=async()=>{

      const response= await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${params.id}&part=snippet`);
      const data=await response.json();
      console.log("isLive",data.items[0].snippet.liveBroadcastContent);
      setIsLive(data.items[0].snippet.liveBroadcastContent);
    }
    fetchLive();
  },[params.id])

  return (
    <div className="WatchPage">
      <div className="WatchPage__contents">
        <iframe
          src={`https://www.youtube.com/embed/${params.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {isLive !== "live" && (
          <div className="comments">
            {constComments.map((c, index) => {
              return <Comment key={index} {...c} />;
            })}
          </div>
        )}
      </div>
      {isLive === "none" && <RelatedVideos id={params.id} />}
      {isLive === "live" && <LiveChat />}
    </div>
  );
};

export default WatchPage;
