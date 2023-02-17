import React from "react";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pb-20">{children}</div>
    </>
  );
};

export default Layout;
