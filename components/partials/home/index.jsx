import CardSlider from "@/components/molecules/card-slider";
import Hero from "@/components/molecules/hero";
import React from "react";
import popular from "@/json/home/popular.json";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const HomeComponent = () => {
  const { data: tours, isLoading: isLoadingTours } = useSWR(
    "/api/destination/3",
    fetcher
  );
  const { data: services, isLoading: isLoadingServices } = useSWR(
    "/api/transport/3",
    fetcher
  );

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-y-12 lg:gap-y-20 py-10 lg:py-20">
        <CardSlider
          isLoading={isLoadingTours}
          actionTitle="More Tours"
          href="/tours"
          data={tours}
          title="Tour Packages"
          subtitle="Popular Tour Packages"
          type="tours"
        />
        <CardSlider
          actionTitle="More Services"
          href="/services"
          isLoading={isLoadingServices}
          data={services}
          title="Transport Service Activities"
          subtitle="Airport Pickup / Drop Off / Tour"
          type="services"
        />
      </div>
    </>
  );
};

export default HomeComponent;
