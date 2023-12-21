import user from "../../assets/user.png"
import styles from "./AppDropDown.module.css"

const AppDropDown = () => {
  return (
    <div>
      <img height={50} src={user} alt="user" />
      <div className={styles.menu_content}>
        <p>Profile</p>
        <p>Settings</p>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default AppDropDown
