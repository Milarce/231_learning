import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Store/update-context";
import styles from "./Login.module.css";
import FormModal from "../Components/Modals/FormModal";
import axios from "axios";

const Login = () => {
  axios.defaults.withCredentials = true; //Permite enviar cookies requests a Express en el backend
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const [LoginStatus, setLoginStatus] = useState(false);
  const userNameRef = useRef();
  const userPassRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/utenti/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user.Login);
      }
    });
  }, []);

  const validation = () => {
    return userNameRef.current.value && userPassRef.current.value && true;
  };

  const loginHandler = () => {
    if (!validation()) return alert("Entra le credenziali");
    const credenObj = {
      Login: userNameRef.current.value,
      Password: userPassRef.current.value,
    };
    onLogin(credenObj);
    userNameRef.current.value = "";
    userPassRef.current.value = "";
  };

  const onLogin = async (credObj) => {
    try {
      const resp = await axios.post(
        "http://localhost:3001/utenti/login",
        credObj
      );
      if (resp.data.error) return alert(resp.data.error);
      localStorage.setItem("token", resp.data.token);
      ctx.setAuthObj((authObj) => {
        return {
          ...authObj,
          loggedIn: resp.data.auth,
          user: resp.data.user,
          fullName: resp.data.fullName,
        };
      });
      navigate("/list-company");
    } catch (err) {
      console.error(new Error(err));
    }
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
        <form onSubmit={loginHandler} className={styles["login-form"]}>
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
