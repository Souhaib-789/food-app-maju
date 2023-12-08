import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import styles from "./UserModal.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import AuthModal from "./AuthModal";
import { googleProvider, auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import apicall from "../../utils/axios";

const UserModal = (props) => {
  const [modal, setModal] = useState(props?.visible);
  const [authModal, setAuthModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    setModal(props?.visible);
  }, [props?.visible]);

  const showSignupModal = () => {
    setAuthModal(true);
    setModal(false);
    setLogin(false);
    setSignup(true);
    props.onClose(false);
  };

  const showLoginModal = () => {
    setAuthModal(true);
    setModal(false);
    setLogin(true);
    setSignup(false);
    props.onClose(false);
  };

  const continueWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const googleAuthData = {
        fullname: user?.displayName,
        phone: user?.phoneNumber,
        email: user?.email,
        photo: user?.photo,
        uid: user?.uid,
        firebase_access_token: user?.accessToken,
      };
      try {
        // const response = await apicall.post(`/google-auth`, googleAuthData);
        // dispatch(UserActions.setUser(response?.data));
      } catch (err) {
        console.log("login error", err);
      }
    } catch (error) {
      console.error("Google Sign-In Error", error);
    }
  };

  return (
    <>
      <Modal
        title={props?.title ? props?.title : "Welcome!"}
        centered
        open={modal}
        onOk={props?.onOk}
        onCancel={props?.onOk}
        closable={true}
        okText={"Ok"}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        cancelText={false}
      >
        <div>
          <p>Sign up or log in to continue</p>
          <div className={styles.social_connect_container}>
            <div className={styles.continue_with_fb_container}>
              <FaFacebook size={25} />
              <button className={styles.continue_with_fb}>
                Continue with Facebook
              </button>
            </div>
            <div className={styles.continue_with_google_container}>
              <FaGoogle size={25} />
              <button
                className={styles.continue_with_google}
                onClick={continueWithGoogle}
              >
                Continue with Google
              </button>
            </div>
          </div>
          <p className={styles.divider}>or</p>
          <div className={styles.social_connect_container}>
            <button
              className={styles.login_signup_button}
              onClick={showLoginModal}
            >
              Login
            </button>
            <button
              className={styles.login_signup_button}
              onClick={showSignupModal}
            >
              Sign up
            </button>
          </div>
        </div>
      </Modal>
      <AuthModal
        visible={authModal}
        onOk={() => {
          setAuthModal(false);
        }}
        login={login}
        signup={signup}
      />
    </>
  );
};

export default UserModal;
