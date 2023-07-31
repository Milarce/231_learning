import React from "react";
import FormModal from "./Modals/FormModal";
import styles from "./CreateEmployee.module.css";

const CreateEmployee = (props) => {
  const submitHandler = () => {};

  return (
    <div>
      <div className={styles.backdrop} />
      <div className={styles.overlay}>
        <FormModal
          headerText={props.windowsType.headerText}
          btnText={props.windowsType.btnText}
          headerType={"create-header"}
          onClose={props.onClose}
          onSubmit={submitHandler}
        >
          <form className={styles.form} action="onsubmit">
            <label className={styles["el--header"]} htmlFor="name">
              Nome
            </label>
            <input
              className={styles["el--rows"]}
              type="text"
              placeholder="Mario"
            />
            <label className={styles["el--header"]} htmlFor="lastName">
              Cognome
            </label>
            <input
              className={styles["el--rows"]}
              type="text"
              placeholder="Rossi"
            />
            <label className={styles["el--header"]} htmlFor="email">
              Email
            </label>
            <input
              className={styles["el--rows"]}
              type="email"
              name="email"
              placeholder="mario.rossi@example.com"
            />
            <div className={styles["user-flex"]}>
              <label className={styles["user-label"]} htmlFor="active">
                Utente attivo
              </label>
              <input type="checkbox" name="active" id="active" />
            </div>
          </form>
        </FormModal>
      </div>
    </div>
  );
};

export default CreateEmployee;
