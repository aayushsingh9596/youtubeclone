import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/toggleslice";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [inputValue, setinputValue] = useState("");
  const [suggestions, setSugesstions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      const fetchSuggestions = async () => {
        const response = await fetch(
          `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=chrome&q=${inputValue}`
        );
  
        const data = await response.text();
  
        console.log("data is", JSON.parse(data)[1]);
  
        setSugesstions(JSON.parse(data)[1]);
      };
  
      fetchSuggestions();
    }, 1000);
  
    return () => {
      clearTimeout(t);
    };
  }, [inputValue]);
  

  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__left">
        <img
          onClick={() => {
            dispatch(toggleMenu());
          }}
          className="hamburger__logo"
          alt="hamburger__logo"
          src="https://w7.pngwing.com/pngs/47/298/png-transparent-hamburger-button-computer-icons-tea-menu-rectangles-angle-white-text-thumbnail.png"
        />
        <Link to="/">
          <img
            className="youtube__logo"
            alt="youtube__logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </Link>
      </div>
      <div className="header__centre">
        <form
          className="searchElement"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/Search/${inputValue}`);
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setinputValue(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, 500);
            }}
          />
          <button
            onClick={() => {
              navigate(`/Search/${inputValue}`);
            }}
          >
            Search
          </button>
        </form>
          {showSuggestions && (
            <ul className="suggestionsElement">
              {suggestions?.map((suggestion, index) => {
                return (
                  <li
                    onClick={(e) => {
                      setinputValue(e.target.textContent);
                      navigate(`/Search/${inputValue}`);
                    }}
                    key={index}
                    style={{ listStyle: "none" }}
                  >
                    <img alt="searchIcon" src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"/><p>{suggestion}</p>
                  </li>
                  
                );
              })}
            </ul>
          )}
      </div>
      <div className="header__right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user__logo"
        />
      </div>
    </div>
  );
};

export default Header;
