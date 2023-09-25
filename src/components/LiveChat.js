import React, { useEffect, useState } from "react";
import "./LiveChat.css";
import ChatLive from "./ChatLive";
import { generateRandomComment } from "../utils/randomComment";
import {ImageUrl} from "../utils/constants"

const LiveChat = () => {
  const [liveComments, setLiveComments] = useState([]);
  const [inputValue,setInputValue]=useState()

  useEffect(() => {
    const interval = setInterval(() => {
      const newComment = generateRandomComment();
      setLiveComments((prevComments) => {
        const updatedComments = [...prevComments, newComment];
        // Keep only the latest 15 comments
        if (updatedComments.length > 15) {
          updatedComments.shift(); // Remove the oldest comment
        }
        return updatedComments;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="LiveChat__components">
      <div className="LiveChat">
        {liveComments.map((liveComment, index) => (
          <ChatLive key={index} commentInfo={liveComment}></ChatLive>
        ))}
      </div>
      <div className="CommentLive">
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <input value={inputValue} onChange={(e)=>{
            setInputValue(e.target.value);
        }}/>
        <button onClick={(e)=>{
             liveComments.push({
                username:"Aayush",
                imageUrl:{ImageUrl},
                content:inputValue
            })
            setInputValue("");
        }}>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default LiveChat;
