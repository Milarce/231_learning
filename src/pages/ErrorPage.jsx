import React from "react";
import styles from "./ErrorPage.module.css";
import errorImg from "../img/error-001.png";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img src={errorImg} alt="" />
      <p>Upssss! Something went wrong</p>
    </div>
  );
};

export default ErrorPage;
