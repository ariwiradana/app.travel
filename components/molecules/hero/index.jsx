import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Image from "next/image";

const Hero = () => {
  const { data: thumbnails } = useSWR("/api/thumbnail", fetcher);

  console.log({ thumbnails });

  if (thumbnails?.length == 0) return <></>;

  return (
    <section>
      <Swiper
        slidesPerView={1}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {thumbnails?.map((thumbnail) => {
          console.log(thumbnail);
          return (
            <SwiperSlide key={`thumbnail-${thumbnail?._id}`}>
              <div className="relative lg:h-[50vh] md:h-[40vh] h-[36vh] flex items-center justify-center">
                <Image
                  src={thumbnail?.image_url}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black z-10 bg-opacity-30 hover:bg-opacity-0 transition-all ease-in-out duration-700"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
