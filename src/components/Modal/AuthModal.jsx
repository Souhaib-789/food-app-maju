import { Modal } from "antd";
import React, { useState } from "react";
import { Input } from "antd";
import { FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./AuthModal.module.css";

const AuthModal = (props) => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    alert("Logged In");
  };

  const signupHandler = (e) => {
    e.preventDefault();
    alert("Signed up");
  };

  return (
    <Modal
      title={props?.title ? props?.title : "What's your email?"}
      centered
      open={props?.visible}
      onOk={props?.onOk}
      onCancel={props?.onOk}
      closable={true}
      okText={"Ok"}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      cancelText={false}
    >
      <>
        <p>We'll check if you have an account</p>
        {props.login ? (
          <form className={styles.input_container} onSubmit={loginHandler}>
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Email"
              prefix={<FaEnvelope color="#fe043c" />}
            />
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Password"
              type={showLoginPassword ? "text" : "password"}
              prefix={<RiLockPasswordFill color="#fe043c" />}
              suffix={
                !showLoginPassword ? (
                  <FaEyeSlash
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  />
                ) : (
                  <FaEye
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  />
                )
              }
            />
            <button className={styles.user_button}>Login</button>
          </form>
        ) : (
          <form className={styles.input_container} onSubmit={signupHandler}>
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Fullname"
              prefix={<FaUser color="#fe043c" />}
            />

            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Phone"
              type="number"
              prefix={<FaPhoneAlt color="#fe043c" />}
            />
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Email"
              prefix={<FaEnvelope color="#fe043c" />}
            />
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Password"
              type={showSignupPassword ? "text" : "password"}
              prefix={<RiLockPasswordFill color="#fe043c" />}
              suffix={
                !showSignupPassword ? (
                  <FaEyeSlash
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  />
                ) : (
                  <FaEye
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  />
                )
              }
            />

            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Confirm Password"
              prefix={<FaUnlockAlt color="#fe043c" />}
              type={showSignupPassword ? "text" : "password"}
              suffix={
                !showSignupPassword ? (
                  <FaEyeSlash
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  />
                ) : (
                  <FaEye
                    style={{ color: "rgba(0,0,0,.45)" }}
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  />
                )
              }
            />

            <button className={styles.user_button}>Sign up</button>
          </form>
        )}
      </>
    </Modal>
  );
};

export default AuthModal;
