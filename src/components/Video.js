import React from 'react'
import "./Video.css";

const Video = ({video}) => {
  let str=video?.snippet?.title
  str=str.length <= 50?str:str.slice(0, 50) + "...";
  return (
    <div className='Video'>
      <img src={video?.snippet?.thumbnails?.high?.url} alt=""/>
      <h4>{str}</h4>
      <p>{video?.snippet?.channelTitle}</p>
      <p>{video?.snippet?.publishedAt}</p>
      <p>Views {video?.statistics?.viewCount}</p>
    </div>
  )
}

export default Video