import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {

  const pdfUrl = "https://drive.google.com/file/d/10dGC4riZ4nkAPVUf7qgFWij7GStj-lGQ/view?usp=sharing";

  const handleDownloadClick = () => {
    window.open(pdfUrl, "_blank"); 
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p style={{ marginBottom: "25px" }}>Feel free to reach out!</p>
        <button onClick={handleDownloadClick} className={styles.contactBtn}>
          Download Resume
        </button>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sajabey00@gmail.com">sajabey00@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sajani-abeysiriwardhana">linkedin.com/in/sajani-abeysiriwardhana</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Sajani00">https://github.com/SajanI00</a>
        </li>
      </ul>
    </footer>
  );
};
