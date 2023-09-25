import React from "react";

const ChatLive = ({commentInfo}) => {
  console.log(commentInfo)
  const {username,imageUrl,content}=commentInfo
  return (
    <div className="ChatLive">
      <div className="User__info">
        <img
          alt={username}
          src={imageUrl}
        />
        <h5>{username}</h5>
      </div>
      <div className="User__comment">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ChatLive;
