import React from "react";
import styles from "./MessageModal.module.css";
import FormModal from "./FormModal";

const MessageModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.overlay}>
        <FormModal
          headerText={props.title}
          btnText={"Chiudi"}
          headerType={"error-header"}
        >
          <p className={styles["body-text"]}>{props.msgText}</p>
        </FormModal>
      </div>
    </React.Fragment>
  );
};

export default MessageModal;
