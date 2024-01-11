import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebar";
import "./navigation.css";
import { IconContext } from "react-icons";

const postBtnClick = () => {
  alert("post button clicked");
};

function Navigation() {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <li className="navbar">
              <Link to="/" className="menu-bars">
                <FaXTwitter />
              </Link>
            </li>

            <div className="my-1">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="my-1 d-flex">
              <button className="post-btn btn-radius" onClick={postBtnClick}>
                <span className="post-btn-text d-flex">Post</span>
              </button>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Navigation;
