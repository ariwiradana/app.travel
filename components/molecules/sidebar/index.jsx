import React from "react";

const Sidebar = ({ active }) => {
  return (
    <div
      className={`h-screen bg-white fixed w-full z-10 top-20 transition-all ease-in-out duration-500 opacity-0 ${
        active ? "left-0 opacity-100" : "left-[100%]"
      }`}
    ></div>
  );
};

export default Sidebar;
