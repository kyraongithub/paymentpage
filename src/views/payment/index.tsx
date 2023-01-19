import React from "react";
import styles from "./Payment.module.scss";
import cn from "classnames";
const Payment = () => {
  return (
    <div className={cn(styles.payment)}>
      <div className={styles.payment__container}></div>
    </div>
  );
};

export default Payment;
