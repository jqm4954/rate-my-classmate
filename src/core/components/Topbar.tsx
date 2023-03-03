import styles from 'src/styles/topbar.module.css';
import {useUser} from "@/core/hooks";

export function TopBar() {
    const {logout} = useUser();

    return (
        <div className={styles.topbar}>
            <span className={styles.title}>Rate My Classmate</span>
            <span className={styles.signout} onClick={logout}>Sign Out</span>
        </div>
    )
}