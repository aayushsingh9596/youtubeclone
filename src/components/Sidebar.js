import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);
  if (isMenuOpen)
    return (
      <div className="Sidebar">
        <ul>
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}><li style={{marginLeft:"5px",fontSize:"20px"}}>Home</li></Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>YouTube Music</li>
        </ul>
        <ul>
          <li>Library</li>
          <li>History</li>
          <li>Your videos</li>
          <li>Downloads</li>
          <li>Liked Videos</li>
          <li>Show more</li>
        </ul>
      </div>
    );
};

export default Sidebar;
