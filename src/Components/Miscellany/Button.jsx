import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles[props.btnStyle]}
      type={props.btnType}
      onClick={props.btnAction}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
