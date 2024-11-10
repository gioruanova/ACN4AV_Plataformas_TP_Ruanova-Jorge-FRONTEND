/* eslint-disable react/prop-types */
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Componente que recibe 'spaceList' como prop
const MainSwiper = ({ spaceList, classNameSwiper, slidesNumber }) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      slidesPerView={slidesNumber}
      className={classNameSwiper}
      spaceBetween={30}
      pagination={false}
      effect="fade"
      loop={true}
    >
      {spaceList.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.imagen_space}
            alt={`${image.name} con capacidad para ${image.capacidad} personas`}
            title={`${image.name} con capacidad para ${image.capacidad} personas`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
