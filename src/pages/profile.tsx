import SideBar from "@/core/components/sidebar";
import Topbar from "@/core/components/topbar";
import styles from "src/styles/profile.module.css";

export default function Profile() {
  return (
    <>
      <Topbar></Topbar>
      <SideBar></SideBar>
      <div className={styles.content}>

      </div>
    </>
  )
}