import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-3">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
