import Layout from "@/components/molecules/layout";
import DetailTour from "@/components/partials/tours/detail";
import fetcher from "@/lib/fetcher";
import React from "react";
import useSWR from "swr";

const ToursSlug = ({ slug }) => {
  const { data, isLoading } = useSWR(`/api/destination/${slug}`, fetcher);
  const { data: other } = useSWR(`/api/destination`, fetcher);

  return (
    <Layout>
      <DetailTour data={data} other={other} slug={slug} />
    </Layout>
  );
};

export default ToursSlug;

export const getServerSideProps = async ({ params }) => {
  const slug = params.slug;
  return {
    props: {
      slug,
    },
  };
};
