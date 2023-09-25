import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  const [videoCategories, setVideoCategories] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("videoCategories");
    const cachedTimestamp = localStorage.getItem("videoCategoriesTimestamp");

    if (cachedData && cachedTimestamp) {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - parseInt(cachedTimestamp, 10);

      // Set cache expiration to 1 hour (adjust as needed)
      const cacheExpiration = 60 * 60 * 1;

      if (timeElapsed < cacheExpiration) {
        setVideoCategories(JSON.parse(cachedData));
      } else {
        fetchVideoCategories();
      }
    } else {
      fetchVideoCategories();
    }
  }, []);

  const fetchVideoCategories = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${YOUTUBE_API_KEY}&regionId=IN`
      );
      const data = await response.json();
      console.log(data?.items);
      setVideoCategories(data?.items);
      // Cache the API response and current timestamp in local storage
      localStorage.setItem("videoCategories", JSON.stringify(data.items));
      localStorage.setItem("videoCategoriesTimestamp", new Date().getTime());
    } catch (error) {
      console.error("Error fetching video categories:", error);
    }
  };

  return (
 
      <div className="ButtonList">
        {videoCategories?.map((videoCategory) => {
          return(<Button key={videoCategory.id} videoCategory={videoCategory}/>)
        })}
      </div>
  );
};

export default ButtonList;
