import { useLayoutEffect, useRef } from "react";
import Image from "../../assets/colin.png";
import Header from "../header/header";
import styles from "./hero.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "100% bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      tl.to(imageRef.current, { y: 50 }, 0);
      tl.to(headerRef.current, { y: -50 }, 0);
    });
    return () => context.revert();
  }, []);

  return (
    <section ref={container} className={styles.container}>
      <div className={styles.heroContainer}>
        <Header>We are Panowie Pro. A software studio for creatives.</Header>
      </div>
      <div className={styles.imageContainer}>
        <h1 ref={headerRef} className={styles.header}>
          Panowie
        </h1>
        <div className={styles.imageWrapper}>
          <img
            ref={imageRef}
            src={Image}
            alt="Image of a desset"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
