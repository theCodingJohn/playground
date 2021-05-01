import { useState, useEffect } from "react";
import projects from "../utils/carouselData";
import style from "../styles/Carousel.module.scss";
import gsap from "gsap";

function carousel() {
  const [translate, setTranslate] = useState(-75);
  const width = (projects.length + 6) * 25;

  useEffect(() => {
    if (translate === 0) {
      setTranslate(projects.length * -25);
    }

    if (translate === (projects.length - 1) * -25 + -75) {
      gsap.set(".carousel_inner", { x: `${translate - -125}vw`, duration: 0 });
      console.log("gsap", translate - -125);
      setTranslate(-50);
    }
    console.log(translate);
  }, [translate]);

  const prev = () => {
    gsap.to(".carousel_inner", { x: `${translate + 25}vw` });
    setTranslate(translate + 25);
  };

  const next = () => {
    gsap.to(".carousel_inner", { x: `${translate + -25}vw` });
    setTranslate(translate + -25);
  };

  return (
    <section className={style.carousel}>
      <button onClick={prev} className={style.prev}>
        prev
      </button>
      <button onClick={next} className={style.next}>
        next
      </button>
      <div
        className={`${style.carousel_inner} carousel_inner`}
        style={{
          width: `${width}vw`,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${projects[projects.length - 3].image})`,
          }}
          className={`${style.item}`}
        ></div>
        <div
          style={{
            backgroundImage: `url(${projects[projects.length - 2].image})`,
          }}
          className={`${style.item}`}
        ></div>
        <div
          style={{
            backgroundImage: `url(${projects[projects.length - 1].image})`,
          }}
          className={`${style.item}`}
        ></div>
        {projects.map((project, i) => (
          <div
            style={{ backgroundImage: `url(${project.image})` }}
            key={project.id}
            className={`${style.item}`}
          ></div>
        ))}
        <div
          style={{
            backgroundImage: `url(${projects[0].image})`,
          }}
          className={`${style.item}`}
        ></div>
        <div
          style={{
            backgroundImage: `url(${projects[1].image})`,
          }}
          className={`${style.item}`}
        ></div>
        <div
          style={{
            backgroundImage: `url(${projects[2].image})`,
          }}
          className={`${style.item}`}
        ></div>
      </div>
    </section>
  );
}

export default carousel;
