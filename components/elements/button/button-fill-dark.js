import React from "react";

const ButtonFillDark = ({ title, icon, size, full, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-black hover:bg-opacity-90 duration-300 text-white hover:text-white rounded-full group text-sm font-semibold font-montserrat transition-colors ease-in-out ${
        size == "lg" ? "px-6 py-3" : "px-4 py-2"
      } ${full ? "w-full" : "w-auto"}`}
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
