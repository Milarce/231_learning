import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import FormModal from "../Components/Modals/FormModal";

const Login = () => {
  const navigate = useNavigate();

  const userNameRef = useRef();
  const userPassRef = useRef();

  const validation = () => {
    return userNameRef.current.value && userPassRef.current.value && true;
  };

  const loginHandler = () => {
    console.log(validation());
    userNameRef.current.value = "";
    userPassRef.current.value = "";
  };

  const onClose = () => {
    navigate("/");
  };

  return (
    <div className={styles.loginContainer}>
      <FormModal
        headerText={"Inserisci i tuoi dati"}
        btnText={"Accedi"}
        headerType={"create-header"}
        onClose={onClose}
        onSubmit={loginHandler}
      >
        <form action="" className={styles["login-form"]}>
          <label htmlFor="userName">Utente:</label>
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Enter email"
            ref={userNameRef}
          />
          <label htmlFor="userPswd">Password:</label>
          <input
            type="password"
            name="userPswd"
            id="userPswd"
            placeholder="Enter password"
            ref={userPassRef}
          />
        </form>
      </FormModal>
    </div>
  );
};

export default Login;
