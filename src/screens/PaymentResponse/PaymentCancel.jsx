import React from "react";
import styles from "./payment.module.css";
import { Link } from "react-router-dom";

const PaymentCancel = () => {
  return (
    <>
      <div className={styles.payment_success_error_container}>
        <h1>Payment Error</h1>
        <Link to={"/"}>Go Back</Link>
      </div>
    </>
  );
};

export default PaymentCancel;
