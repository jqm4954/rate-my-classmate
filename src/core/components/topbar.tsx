import { MouseEventHandler } from 'react';
import styles from 'src/styles/topbar.module.css';

export default function TopBar() {
  const signOut = () => {

  }

  return (
    <div className={styles.topbar}>
      <span className={styles.title}>Rate My Classmate</span>
      <span className={styles.signout} onClick={signOut}>Sign Out</span>
    </div>
  )
}