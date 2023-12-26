import { useState } from "react";
// import user from "../../assets/user.png";
import user from "../../assets/user-removebg-preview.png";
import styles from "./AppDropDown.module.css";
import { useNavigate } from "react-router-dom";

const AppDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      action: () => {
        navigate("/profile");
        setShowMenu(false);
      },
      name: "Profile",
    },
    {
      action: () => {
        navigate("/orders");
        setShowMenu(false);
      },
      name: "Orders",
    },
    {
      action: () => {
        navigate("/profile");
        setShowMenu(false);
      },
      name: "Logout",
    },
  ];
  return (
    <div className="position-relative cursor-pointer">
      <img
        onClick={() => setShowMenu(!showMenu)}
        height={65}
        src={user}
        alt="user"
      />
      {showMenu && (
        <div className={styles.menu_content}>
          {data.map((route, i) => {
            return (
              <p key={i} onClick={route.action}>
                {route.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AppDropDown;
