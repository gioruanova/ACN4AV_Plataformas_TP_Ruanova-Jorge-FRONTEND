/* eslint-disable react/prop-types */
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import axios from "axios";
import { apiKey } from "../data/Database";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const MainSwiper = ({ classNameSwiper, slidesNumber }) => {
  const [salasDisponibles, setSalasDisponibles] = useState([]);
  let urlFetch = `${apiKey}listadosalas`;

  useEffect(() => {
    getEspacios();
  });

  const getEspacios = async () => {
    try {
      const response = await axios.get(urlFetch);
      setSalasDisponibles(response.data.results);
    } catch (error) {
      return error;
    }
  };
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
      {salasDisponibles.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={`../images/spaces/${item.image_space}.jpg`}
            alt={`${item.name} con capacidad para ${item.capacidad} personas`}
            title={`${item.name} con capacidad para ${item.capacidad} personas`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
