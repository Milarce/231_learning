import React from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";

const Content = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <ListCompany />
      </div>
    </section>
  );
};

export default Content;
