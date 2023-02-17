import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const IDs = ["BE2T__AyThs", "SsqqO1COB18", "KC9UR6JYVQA"];

const Hero = () => {
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
        {IDs?.map((id) => (
          <SwiperSlide key={id}>
            <div
              style={{
                backgroundImage: `url('https://source.unsplash.com/${id}/1920x1080')`,
              }}
              className="w-full bg-bottom bg-no-repeat bg-cover relative flex items-center justify-center lg:h-[50vh] md:h-[40vh] h-[36vh]"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black z-10 bg-opacity-30 hover:bg-opacity-0 transition-all ease-in-out duration-700"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
