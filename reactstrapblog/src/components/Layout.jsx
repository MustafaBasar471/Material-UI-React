import React from "react";
import { NavbarItem } from "./";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarItem />
      {children}
    </div>
  );
};

export default Layout;
