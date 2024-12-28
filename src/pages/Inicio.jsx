import MainImage from "../assets/main-image.png";
import MainSwiper from "../components/MainSwiper";
import SwiperDestacados from "../components/SwiperDestacados";
import useAnimationContent from "../hooks/useAnimationContent";

import Logo from "../assets/misc/logo.png";

export default function Inicio() {
  useAnimationContent();

  return (
    <div className="main-content subContainer">
      <div className="first-content">
        <h1>Bienvenido a Central de Reserva de Espacios</h1>
        <img src={MainImage} alt="" className="main-image" />

        <span className="second-title">
          Porque el espacio correcto hace la diferencia
        </span>
      </div>

      <div className="info-container">
        <div className="info-container-text">
          <h2>Espacios ideales para tus necesidades</h2>
          <p>
            Nuestros espacios están diseñados para potenciar tu productividad y
            ofrecer el ambiente ideal para cualquier ocasión. Desde oficinas
            privadas hasta centros de conferencias totalmente equipados,
            brindamos flexibilidad, comodidad y tecnología avanzada para
            facilitar tus reuniones y eventos. Disfruta de ubicaciones
            estratégicas, servicios personalizados y espacios que se adaptan a
            las necesidades de tu equipo, fomentando la colaboración y el éxito
            en cada proyecto.
          </p>
        </div>
        <div id="swiperContainer">
          <MainSwiper classNameSwiper={"slider-principal"} slidesNumber={1} />
        </div>
      </div>

      <div id="espacios-destacados">
        <h2>Nuestros espacios destacados</h2>
        <SwiperDestacados classNameSwiper={"swiper-destacados"} />
      </div>

      <div className="info-sitio">
        <img
          src={Logo}
          alt="Central de reservas"
          className="info-sitio-imagen"
        />
        <div className="info-sitio-text">
          <h2>Misión</h2>
          <p>
            Brindamos soluciones de reservas rápidas y confiables, ofreciendo la
            mejor experiencia a nuestros clientes mediante tecnología
            innovadora.
          </p>

          <h2>Visión</h2>
          <p>
            Ser líderes en el mercado de reservas, ampliando nuestro alcance y
            mejorando continuamente nuestros servicios para satisfacer las
            necesidades de los usuarios.
          </p>

          <h2>Valores</h2>
          <p>Compromiso, confianza, innovación y excelencia en el servicio.</p>
        </div>
      </div>
    </div>
  );
}
