import ButtonFillDark from "@/components/elements/button/button-fill-dark";
import Container from "@/components/molecules/container";
import { priceFormatterUSD } from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiCheck } from "react-icons/fi";

const DetailTour = ({ data, other, slug }) => {
  return (
    <>
      <div className="w-full h-[16rem] md:h-[24rem] relative">
        <div className="w-full absolute top-0 left-0 h-full bg-black z-[1] bg-opacity-30 transition-all ease-in-out duration-500 hover:bg-opacity-0"></div>
        <Image
          src={data?.image_url}
          alt={data?.slug}
          fill
          className="object-cover"
        />
      </div>
      <Container className="relative z-[2] ">
        <div className="grid lg:grid-cols-2">
          <div className="md:-mt-[8rem] bg-white py-6 md:p-10 rounded-2xl">
            <h5 className="text-xs font-medium text-gray-500 uppercase mb-3">
              Tour Package
            </h5>
            <h3 className="lg:text-4xl text-2xl font-raleway font-bold text-black mb-6 max-w-[90%]">
              {data?.title}
            </h3>
            <p className="text-sm font-raleway font-medium text-app-black-500 mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eligendi inventore quibusdam similique eum porro. Hic, aut
              praesentium? Nostrum, ipsum!
            </p>
            <div className="flex flex-col flex-wrap gap-x-12 gap-y-6 lg:gap-y-8 divide-y divide-gray-200">
              <Offer title="Where to go?" data={data?.destination} />
              <Offer title="What's included?" data={data?.inclution} />
              <Offer title="Pax" data={[`Minimum ${data?.minimum_pax} pax`]} />
            </div>
            <div className="flex md:flex-row gap-y-4 flex-col items-start justify-between mt-8 border-t border-t-gray-200 pt-6">
              <div className="flex gap-x-2 items-end">
                <h2 className="text-4xl font-bold font-raleway">
                  {priceFormatterUSD(data?.price)}
                </h2>
                <p className="text-sm font-montserrat text-app-black-500">
                  / pax{" "}
                </p>
              </div>
              <Link
                target="_blank"
                href={"https://wa.me/15551234567"}
                className="w-full md:w-auto"
              >
                <ButtonFillDark size="lg" title="Book Now" full />
              </Link>
            </div>
          </div>
          <OtherTours data={other} slug={slug} />
        </div>
      </Container>
    </>
  );
};

export default DetailTour;

const Offer = ({ title, data }) => {
  return (
    <div className="pt-8">
      <h4 className="font-raleway font-semibold text-2xl mb-3 lg:mb-4">
        {title}
      </h4>
      <ul>
        {data?.map((label) => (
          <li className="text-base font-raleway font-medium text-app-black-500 leading-9 flex items-center gap-x-4">
            <FiCheck />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

const OtherTours = ({ data, slug }) => {
  const newData = data?.filter((el) => el?.slug != slug);
  return (
    <div className="lg:p-10 mt-4 pt-8 lg:pt-0 lg:mt-8 border-t border-t-gray-200 lg:border-t-transparent">
      <h4 className="uppercase font-montserrat font-bold text-lg mb-4 lg:hidden">
        Other Tours
      </h4>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        spaceBetween={20}
        slidesPerView="auto"
        className="w-full"
        modules={[Autoplay]}
      >
        {newData?.map((destination) => (
          <SwiperSlide className="group md:max-w-[70%] max-w-[80%] group transition-all ease-in-out duration-500">
            <Link href={`/tours/${destination?.slug}`}>
              <div className="md:h-[16rem] h-[12rem] w-full relative rounded-xl bg-cover overflow-hidden">
                <Image
                  src={destination?.image_url}
                  alt={destination?.slug}
                  fill
                  className="object-cover"
                />
                <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-b from-transparent p-5 md:p-6 to-gray-900 z-[2] flex flex-col justify-end">
                  <h4 className="text-white font-monserrat mb-1 text-[10px] transform transition-all uppercase ease-in-out duration-500 lg:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:translate-y-6">
                    Tours
                  </h4>
                  <h4 className="text-white font-semibold font-raleway text-lg transform transition-all line-clamp-2 ease-in-out duration-500 delay-100 lg:opacity-0 group-hover:opacity-100 leading-6 group-hover:translate-y-0 lg:translate-y-6">
                    {destination?.title}
                  </h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
