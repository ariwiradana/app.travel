import React from "react";

const ButtonFillDark = ({ title, icon, ...props }) => {
  return (
    <button
      {...props}
      className="bg-black hover:bg-opacity-90 duration-300 text-white hover:text-white rounded-full group text-sm font-bold font-montserrat px-4 py-2 transition-colors ease-in-out"
    >
      {icon ? (
        <div className="flex items-center gap-x-2 group-hover:gap-x-4 transition-all ease-in-out duration-500">
          <span>{title}</span>
          <div>{icon}</div>
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default ButtonFillDark;
