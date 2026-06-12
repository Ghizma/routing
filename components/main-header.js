import React from "react";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavLink href={"/"} children={"NextNews"} />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink href={"/news"} children={"News"} />
          </li>
          <li>
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
