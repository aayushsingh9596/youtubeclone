import "./Comment.css";

const Comment = ({ username, comment, replies }) => (
  <div className="comment">
    <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt=""/>
    <h4 className="username">{username}</h4>
    <p className="text">{comment}</p>
    {replies && (
      <div className="replies">
        {replies.map((reply, index) => (
          <Comment key={index} {...reply} />
        ))}
      </div>
    )}
  </div>
);

export default Comment;