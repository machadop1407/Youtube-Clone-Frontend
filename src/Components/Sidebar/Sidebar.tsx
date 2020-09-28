import React from "react";

import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div style={{ width: 250 }}>
      <ul className="sidebarRows">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => (window.location.pathname = val.path)}
            >
              <div
                id="iconContainer"
                className={
                  val.path === window.location.pathname ? "active" : ""
                }
              >
                {val.icon}
              </div>

              <div id="titleContainer">
                <h3>{val.title}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
