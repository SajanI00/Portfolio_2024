import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sajani</h1>
        <p className={styles.description}>
        I am a motivated and ambitious undergraduate student pursuing engineering
interested in front-end development and UI/UX designing. I am a fast learner
with great adaptability, actively seeking an internship opportunity to apply my
technical and soft skills while enhancing my experiences and make valuable
contributions.
        </p>
        <a href="mailto:sajabey00@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/HeroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
