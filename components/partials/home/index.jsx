import CardSlider from "@/components/molecules/card-slider";
import Hero from "@/components/molecules/hero";
import React from "react";
import popular from "@/json/home/popular.json";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const HomeComponent = () => {
  const { data: destinations } = useSWR("/api/destination/3", fetcher);
  const { data: transports } = useSWR("/api/transport/3", fetcher);

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-y-12 lg:gap-y-20 py-10 lg:py-20">
        <CardSlider
          actionTitle="More Tours"
          href="/tours"
          data={destinations}
          title="Tour Packages"
          subtitle="Popular Tour Packages"
          type="tours"
        />
        <CardSlider
          actionTitle="More Services"
          href="/services"
          data={transports}
          title="Transport Service Activities"
          subtitle="Airport Pickup / Drop Off / Tour"
          type="services"
        />
      </div>
    </>
  );
};

export default HomeComponent;
