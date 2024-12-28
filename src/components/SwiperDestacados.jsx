/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import axios from "axios";
import { apiKey } from "../data/Database";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function SwiperDestacados({classNameSwiper }) {
  const [salasDisponibles, setSalasDisponibles] = useState([]);
  let urlFetch = `${apiKey}listadosalas`;


  useEffect(() => {
    getEspacios();
  }, );
  

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
      modules={[Pagination, Autoplay]}
      slidesPerView={2}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loopedSlides={salasDisponibles.length > 3 ? 3 : salasDisponibles.length}
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
      {salasDisponibles.map(
        (item, index) =>
          item.destacado ? (
            <SwiperSlide key={index}>
              <img
                src={`../images/spaces/${item.image_space}.jpg`}
                alt={`${item.name} con capacidad para ${item.capacidad} personas`}
                title={`${item.name} con capacidad para ${item.capacidad} personas`}
              />
            </SwiperSlide>
          ) :
          null
      )}
    </Swiper>
  );
}
