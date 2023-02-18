import useNavbar from "@/hooks/navbar/useNavbar";
import React from "react";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  const { isTop } = useNavbar();
  return (
    <>
      <Navbar />
      <div
        style={{ top: isTop ? -400 : 0, opacity: isTop ? 0 : 1 }}
        className="fixed w-full z-20 bg-white transition-all ease-in-out duration-500"
      >
        <Navbar />
      </div>
      <div className="pb-20">{children}</div>
    </>
  );
};

export default Layout;
