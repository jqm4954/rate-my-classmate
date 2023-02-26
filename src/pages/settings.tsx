import {Rating} from "@/core/components/rating";
import {SideBar} from "@/core/components/Sidebar";
import { TopBar } from "@/core/components/Topbar";
import styles from "src/styles/settings.module.css";

export default function Profile() {
  // TODO: API calls
  const name: string = "Joe Brandon"
  const major: string = "Software Engineering";
  const settings = {
    name: "Name",
    prof_name: name,
    prof_major: major,
    change_pass: "Change Password",
    major: "Major"
  }

  return (
    <>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className={styles.content}>
            <div className={styles.containing_rectangle}>
                <div>
                <h2>{name}</h2>
                <h2 className={styles.profile_major}>{major}</h2>
                </div>

                <div className={styles.name_outer}>
                        <div className={styles.change_name}>change</div>
                        <div className={styles.name_inner}>{settings.name}</div>
                </div>
                <div className={styles.major_outer}>
                        <div className={styles.change_major}>change</div>
                        <div className={styles.major_inner}>{settings.major}</div>
                </div>
                <div className={styles.password_outer}>
                        <div className={styles.change_password}>change</div>
                        <div className={styles.password_inner}>{settings.change_pass}</div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}