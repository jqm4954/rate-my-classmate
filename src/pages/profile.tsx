import SideBar from "@/core/components/sidebar";
import styles from "src/styles/profile.module.css";

export default function Profile() {
  return (
    <>
      <SideBar></SideBar>
      <div className={styles.test}>This is my profile</div>
    </>
  )
}