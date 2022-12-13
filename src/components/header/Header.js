import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to={"/"}>
          <img className="header_icon" src={Logo} />
        </Link>
        <div
          className={isNavExpanded ? "menu_links_expanded" : "menu_links"}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Link to={"/movies/popular"}>
            <span>Popular</span>
          </Link>
          <Link to={"/movies/top_rated"}>
            <span>Top Rated</span>
          </Link>
          <Link to={"/movies/upcoming"}>
            <span>Upcoming</span>
          </Link>
        </div>
      </div>
      <div
        className="Menu_toggle"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <i className={`fa fa-solid fa-bars`}></i>
      </div>
    </div>
  );
}
