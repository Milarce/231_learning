import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.general} type={props.btnType}>
      {props.text}
    </button>
  );
};

export default Button;
