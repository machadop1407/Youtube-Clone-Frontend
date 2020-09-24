import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./MainPage.css";

const MainPage: React.FC = () => {
  return (
    <div className="MainPage">
      <div className="center">
        <Sidebar />
        <div className="VideoView"></div>
      </div>
    </div>
  );
};

export default MainPage;
