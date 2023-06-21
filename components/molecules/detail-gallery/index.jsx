import Image from "next/image";
import React from "react";

const DetailGallery = ({ image, slug, last }) => {
  return (
    <div className="w-full h-28 md:h-40 bg-cover relative">
      <Image
        fill
        src={image}
        alt={slug}
        className="object-cover aspect-square"
      />
      {last && (
        <div className="absolute w-full h-full inset-0 bg-black z-10 p-2 cursor-pointer bg-opacity-60 flex justify-center items-center">
          <p className="font-montserrat text-white font-medium">All Images</p>
        </div>
      )}
    </div>
  );
};

export default DetailGallery;
