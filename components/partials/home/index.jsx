import CardSlider from "@/components/molecules/card-slider";
import Hero from "@/components/molecules/hero";
import React from "react";
import popular from "@/json/home/popular.json";

const HomeComponent = () => {
  return (
    <>
      <Hero />
      <CardSlider
        title="Where to next?"
        subtitle="Plan Your Trip"
        data={popular}
      />
    </>
  );
};

export default HomeComponent;
