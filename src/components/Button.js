import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Button = ({ videoCategory }) => {
  const [buttonColor, setButtonColor] = useState("white");
  const navigate = useNavigate();
  let str=videoCategory.snippet.title
  str=str.length <= 15?str:str.slice(0, 15) + "...";
  return (
    <div className="Button">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          const newColor = buttonColor === "white" ? "lightgrey" : "white";
          setButtonColor(newColor);
          navigate(`/VideoCategory/${videoCategory.id}`);
        }}
      >
        {str}
      </button>
    </div>
  );
};

export default Button;
