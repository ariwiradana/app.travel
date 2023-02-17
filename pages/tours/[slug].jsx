import Layout from "@/components/molecules/layout";
import ToursComponent from "@/components/partials/tours";
import React from "react";

const ToursSlug = ({ slug }) => {
  console.log({ slug });
  return (
    <Layout>
      <ToursComponent />
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
