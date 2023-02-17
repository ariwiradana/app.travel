import React from "react";

const Logo = ({ className }) => {
  return (
    <>
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold leading-5 md:leading-6 ${className}`}
      >
        karens.
      </h2>
      <h5
        className={`font-raleway uppercase leading-4 text-[8px] lg:text-[9px] font-semibold tracking-[0.3rem] lg:tracking-[0.5rem] ml-[2px] ${className}`}
      >
        Bali Tours
      </h5>
    </>
  );
};

export default Logo;
