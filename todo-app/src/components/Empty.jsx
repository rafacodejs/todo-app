import React from "react";
import styles from "../styles/style";

const Empty = () => {
  return (
    <p className={`${styles.heading2} ${styles.flexCenter} relative`}>
      ¡Crea tu primer TODO!
    </p>
  );
};

export { Empty };
