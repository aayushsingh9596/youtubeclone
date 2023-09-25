import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const RelatedVideos = ({id}) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&VideoId=${id}&type=video&part=snippet&maxResults=10`
      );
      const data = await response.json("");
      setRelatedVideos(data.items);
    };
    fetchRelatedVideos();
  }, [id]);

  

  return (
    <div className="RelatedVideos">
      {relatedVideos?.map((video) => {
        return (
          <Link
            style={{ textDecoration: "none",color:"inherit" }}
            to={`/WatchPage/${video.id.videoId}`}
             key={video.id.videoId}
          >
            <Video video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedVideos;
