import React from "react";

const TitleSection = ({ className, title, subtitle }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-end mb-5 lg:mb-10">
        <div>
          <h6 className="font-montserrat uppercase text-xs lg:text-sm text-app-black-500 font-semibold mb-1 lg:mb-2">
            {subtitle}
          </h6>
          <h3 className="lg:text-5xl text-3xl font-raleway font-bold text-black">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
