import React from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";

const Content = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <CreateCompany />
        <EditCompany />
        <ListCompany />
      </div>
    </section>
  );
};

export default Content;
