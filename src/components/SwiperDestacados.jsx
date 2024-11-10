/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function SwiperDestacados({ spaceList, classNameSwiper }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loopedSlides={spaceList.length > 3 ? 3 : spaceList.length}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      autoHeight={true}
      className={classNameSwiper}
    >
      {spaceList.map(
        (image, index) =>
          image.destacado && (
            <SwiperSlide key={index}>
              <img
                src={image.imagen_space}
                alt={`${image.name} con capacidad para ${image.capacidad} personas`}
                title={`${image.name} con capacidad para ${image.capacidad} personas`}
              />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
}
