import React, { useState } from "react";
import "./Navbar.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div className="navbarContainer">
      <div className="left">
        <button id="sidebarToggle">
          <MenuIcon id="icon" />
        </button>

        <YouTubeIcon id="icon" style={{ color: "red" }} />
        <h1>YouTube</h1>
      </div>
      <div className="center">
        <input id="searchBar" placeholder="Search" />
        <button id="searchButton">
          <SearchIcon style={{ color: "grey" }} />
        </button>
      </div>
      <div className="right">
        <button id="createVideo">
          <VideoCallIcon id="icon" />
        </button>
        {loggedIn ? (
          <button id="profilePic"></button>
        ) : (
          <button
            id="signInButton"
            onClick={() => {
              window.location.pathname = "signin";
            }}
          >
            {" "}
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
