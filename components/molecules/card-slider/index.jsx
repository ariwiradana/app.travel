import TitleSection from "@/components/elements/title-section";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../container";

const CardSlider = ({ data, title, subtitle }) => {
  if (data?.length == 0) return <></>;

  return (
    <Container className="py-20">
      <TitleSection title={title} subtitle={subtitle} />
      <Swiper
        className="rounded-2xl overflow-hidden"
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data?.map(({ id, title, category, image, path }) => (
          <SwiperSlide
            key={`${title.toLowerCase()}.${id}.${category}`}
            className="group"
          >
            <Link href={path}>
              <div className="w-full h-[14rem] md:h-[16rem] lg:h-[20rem] rounded-2xl overflow-hidden relative">
                <Image
                  className="transform group-hover:scale-105 transition-transform ease-in-out duration-500"
                  alt={`${title.toLowerCase()}.${id}.${category}`}
                  fill
                  src={image}
                />
              </div>
              <h4 className="text-black font-bold font-montserrat text-xl lg:text-2xl mt-3">
                {title}
              </h4>
              <p className="text-sm font-raleway font-medium text-gray-400">
                {category}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardSlider;
