import React, { useState } from "react";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import apicall from "../../utils/axios";
import UserActions from "../../redux/Actions/UserActions";
import { Spinner } from "react-bootstrap";
import { Input } from "antd";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SuccessModal from "../../components/Modal/SuccessModal";
import ErrorModal from "../../components/Modal/ErrorModal";

const Profile = () => {
  const userData = useSelector((state) => state?.UserReducer?.user);
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState(
    userData?.user?.password
  );
  const [modal, setModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [profileLoader, setProfileLoader] = useState(false);
  const [passwordLoader, setPasswordLoader] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
  });
  const [user, setUser] = useState({
    email: userData?.user?.email,
    fullname: userData?.user?.fullname,
    phone: userData?.user?.phone,
  });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateUser = async () => {
    setProfileLoader(true);
    try {
      const response = await apicall.patch(`/user`, user);
      const data = {
        ...userData,
        user: response?.data?.user,
      };
      dispatch(UserActions.setUser(data));
      setProfileLoader(false);
      setModal(true);
      setSuccessMessage(response?.data?.message);
    } catch (error) {
      setProfileLoader(false);
      setErrorModal(true);
      if (error.message === "Network Error")
        return setErrorMessage("Network Error");
      setErrorMessage(error?.response?.data?.message);
    }
  };

  const updatePassword = async () => {
    if (!currentPassword || !newPassword) {
      setErrorModal(true);
      setErrorMessage("Required fields are missing");
    } else {
      setPasswordLoader(true);
      try {
        const response = await apicall.patch(`/user`, {
          email: user?.email,
          currentPassword,
          newPassword,
        });
        setPasswordLoader(false);
        setModal(true);
        setSuccessMessage(response?.data?.message);
      } catch (error) {
        setPasswordLoader(false);
        setErrorModal(true);
        if (error.message === "Network Error")
          return setErrorMessage("Network Error");
        setErrorMessage(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <div className={styles.profile_container}>
        <h5 className={styles.heading}>My Profile</h5>

        <input
          placeholder="Fullname"
          className={styles.input}
          value={user.fullname}
          onChange={userInputHandler}
          type="text"
          name="fullname"
        />
        <input
          placeholder="Email"
          className={styles.input}
          value={user.email}
          onChange={userInputHandler}
          type="text"
          name="email"
        />
        <input
          placeholder="Phone"
          className={styles.input}
          value={user.phone}
          onChange={userInputHandler}
          type="number"
          name="phone"
        />
        <button onClick={updateUser} className={styles.submit_button}>
          {profileLoader ? <Spinner animation="border" size="sm" /> : "Update"}
        </button>
      </div>

      <div className={styles.profile_container}>
        <h5 className={styles.heading}>Password</h5>

        <Input
          type={showPassword.currentPassword ? "text" : "password"}
          suffix={
            !showPassword.currentPassword ? (
              <FaEyeSlash
                style={{ color: "rgba(0,0,0,.45)" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    currentPassword: !showPassword.currentPassword,
                  })
                }
              />
            ) : (
              <FaEye
                style={{ color: "rgba(0,0,0,.45)" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    currentPassword: !showPassword.currentPassword,
                  })
                }
              />
            )
          }
          size="large"
          placeholder="Current Password"
          className={styles.input}
          onChange={(e) => setCurrentPassword(e.target.value)}
          name="password"
        />

        <Input
          type={showPassword.newPassword ? "text" : "password"}
          suffix={
            !showPassword.newPassword ? (
              <FaEyeSlash
                style={{ color: "rgba(0,0,0,.45)" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    newPassword: !showPassword.newPassword,
                  })
                }
              />
            ) : (
              <FaEye
                style={{ color: "rgba(0,0,0,.45)" }}
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    newPassword: !showPassword.newPassword,
                  })
                }
              />
            )
          }
          size="large"
          placeholder="New Passowrd"
          className={styles.input}
          onChange={(e) => setNewPassword(e.target.value)}
          name="newPassword"
        />
        <button onClick={updatePassword} className={styles.submit_button}>
          {passwordLoader ? <Spinner animation="border" size="sm" /> : "Update"}
        </button>
      </div>

      <SuccessModal
        visible={modal}
        onOk={() => {
          setModal(false);
          setSuccessMessage("");
        }}
        title={successMessage}
      />

      <ErrorModal
        visible={errorModal}
        onOk={() => {
          setErrorModal(false);
        }}
        title={errorMessage}
      />
    </>
  );
};

export default Profile;
