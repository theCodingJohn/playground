import { useRef } from "react";
import projects from "../utils/carouselData";
import { RightArrow, LeftArrow } from "../utils/icons";
import Slider from "react-slick";
import style from "../styles/Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className={style.carousel}>
      <span onClick={prev} className={`${style.arrow_button} ${style.prev}`}>
        <LeftArrow />
      </span>
      <span onClick={next} className={`${style.arrow_button} ${style.next}`}>
        <RightArrow />
      </span>

      <Slider ref={sliderRef} {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <div className={style.cover}></div>
            <a
              style={{
                backgroundImage: `url(${project.image})`,
              }}
              className={style.slide}
            >
              <div className={style.cover}>
                <div className={style.text}>
                  <h2 className={style.h2}>{project.name}</h2>
                  <div className={style.red_line}></div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur.
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default carousel;
