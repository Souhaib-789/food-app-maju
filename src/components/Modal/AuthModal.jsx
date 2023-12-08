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
import apicall from "../../utils/axios";
import { useDispatch } from "react-redux";
import UserActions from "../../redux/Actions/UserActions";

const AuthModal = (props) => {
  const dispatch = useDispatch();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      await apicall.post(`/signup`, signupData);
    } catch (err) {
      console.log("signup error", err);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await apicall.post(`/login`, loginData);
      dispatch(UserActions.setUser(response?.data));
    } catch (err) {
      console.log("login error", err);
    }
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
          <form className={styles.input_container} onSubmit={login}>
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Email"
              prefix={<FaEnvelope color="#fe043c" />}
              name="email"
              onChange={loginHandler}
              value={loginData.email}
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
              name="password"
              onChange={loginHandler}
              value={loginData.password}
            />
            <button className={styles.user_button}>Login</button>
          </form>
        ) : (
          <form className={styles.input_container} onSubmit={signup}>
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Fullname"
              prefix={<FaUser color="#fe043c" />}
              name="fullname"
              onChange={signupHandler}
              value={signupData.fullname}
            />

            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Phone"
              type="number"
              prefix={<FaPhoneAlt color="#fe043c" />}
              name="phone"
              onChange={signupHandler}
              value={signupData.phone}
            />
            <Input
              className={styles.auth_input}
              size="large"
              placeholder="Enter Email"
              prefix={<FaEnvelope color="#fe043c" />}
              name="email"
              onChange={signupHandler}
              value={signupData.email}
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
              name="password"
              onChange={signupHandler}
              value={signupData.password}
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
              name="confirmPassword"
              onChange={signupHandler}
              value={signupData.confirmPassword}
            />

            <button className={styles.user_button}>Sign up</button>
          </form>
        )}
      </>
    </Modal>
  );
};

export default AuthModal;
