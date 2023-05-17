import React from "react";
import styles from "./Carrousel.module.css";
import image from "../../img/carrousel/001-1.jpg";

const Carrousel = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="BDO" />
    </div>
  );
};

export default Carrousel;
