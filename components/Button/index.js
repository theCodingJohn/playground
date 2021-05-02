import { useRef } from "react";
import Link from "next/link";
import styles from "./button.module.scss";
import gsap from "gsap";

const Button = ({ link, color }) => {
  const buttonRef = useRef(null);

  const hoverOn = () => {
    const tl = gsap.timeline();
    tl.to(buttonRef.current, {
      background: color,
      boxShadow: `0 0 5px ${color}, 0 0 25px ${color}, 0 0 50px ${color},
        0 0 200px ${color}`,
      color: "#050801",
      webkitBoxReflect: `below 1px linear-gradient(transparent, #0005)`,
      duration: "300ms",
    });
  };

  const hoverOff = () => {
    const tl = gsap.timeline();
    tl.to(buttonRef.current, {
      background: "transparent",
      boxShadow: "none",
      color: color,
      webkitBoxReflect: `unset`,
      duration: "300ms",
    });
  };

  return (
    <Link href={link}>
      <a
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        ref={buttonRef}
        style={{ color: color }}
        className={styles.button}
      >
        <span
          style={{
            background: `linear-gradient(90deg, transparent, ${color})`,
          }}
          className={styles.top}
        ></span>
        <span
          style={{
            background: `linear-gradient(120deg, transparent, ${color})`,
          }}
          className={styles.right}
        ></span>
        <span
          style={{
            background: `linear-gradient(270deg, transparent, ${color})`,
          }}
          className={styles.bottom}
        ></span>
        <span
          style={{
            background: `linear-gradient(360deg, transparent, ${color})`,
          }}
          className={styles.left}
        ></span>
        Carousel
      </a>
    </Link>
  );
};

export default Button;
