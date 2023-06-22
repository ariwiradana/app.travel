import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex justify-center">
      <CircularProgress sx={{color: "black"}} size={24}/>
    </div>
  );
};

export default Loader;
