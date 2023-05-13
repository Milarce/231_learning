import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <form action="" className={styles["login-form"]}>
        <label htmlFor="userName">Utente:</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="userPswd">Password:</label>
        <input type="password" name="userPswd" id="userPswd" />
      </form>
    </div>
  );
};

export default Login;
