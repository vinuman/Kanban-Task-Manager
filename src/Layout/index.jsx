import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />

      {children}
    </>
  );
};

export default Layout;