import {Rating} from "@/core/components/rating";
import {SideBar} from "@/core/components/Sidebar";
import { TopBar } from "@/core/components/Topbar";
import { FormEventHandler } from "react";
import { Input } from "reactstrap";
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
  const updateName = (name : string) => {
    //handle name udpate 
  }
  const updateMajor = (major : string) => {
    //handle name udpate 
  }
  const updatePass = (pass : string) => {
    //handle name udpate 
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
                        <div className={styles.name_pre}>{name}</div>
                        <div className={styles.changeName} onClick={() => {updateName}}></div>
                        <div className={styles.name_inner}>
                         <Input placeholder={settings.name} id="nameChange" name="Name"></Input>
                        </div>

                </div>
                <div className={styles.major_outer}>
                        <div className={styles.name_pre}>{major}</div>
                        <div className={styles.changeMajor} onClick={() => {updateMajor}}></div>
                        <div className={styles.major_inner}> 
                          <Input placeholder={settings.major} id="majorChange" name="Major"></Input>
                        </div>
                </div>
                <div className={styles.password_outer}>
                        <div className={styles.changeName} onClick={() => {updatePass}}></div>
                        <div className={styles.password_inner}>
                            <Input placeholder={settings.change_pass} id="passChange" name="Password"></Input>
                        </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}