import TitleSection from "@/components/elements/title-section";
import CardGrid from "@/components/molecules/card-grid";
import Container from "@/components/molecules/container";
import fetcher from "@/lib/fetcher";
import React from "react";
import useSWR from "swr";

const ServicesComponent = () => {
  const { data: transport } = useSWR("/api/transport", fetcher);
  return (
    <Container className="mt-32">
      <TitleSection
        title="All Tour Packages"
        subtitle="All Tour Packages"
        className="mb-8"
      />
      <CardGrid data={transport} type="services" />
    </Container>
  );
};

export default ServicesComponent;
