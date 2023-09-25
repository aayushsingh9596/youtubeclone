import React from "react";
import Sidebar from "./Sidebar";
import "./Body.css";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="Body">
      <Sidebar />
      <div className="MainContainer">
        <ButtonList></ButtonList>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
