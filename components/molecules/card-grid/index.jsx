import Card from "@/components/elements/card";
import React from "react";

const CardGrid = ({ data, type }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-12">
      {data?.map((destination) => (
        <Card
          type={type}
          title={destination?.title}
          id={destination?._id}
          image_url={destination?.image_url}
          slug={destination?.slug}
          minimum_pax={destination?.minimum_pax}
          price={destination?.price}
        />
      ))}
    </div>
  );
};

export default CardGrid;
