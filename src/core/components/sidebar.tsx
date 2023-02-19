import styles from "src/styles/sidebar.module.css";
import { useRouter } from 'next/router'

class Link {
  title: string;
  link: string;

  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}

export default function SideBar() {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <a className={`${styles.link} ${router.pathname == '/profile' ? styles.active : ''}`} href={'/profile'}>
        My Profile
      </a>
      <a className={`${styles.link} ${router.pathname == '/search' ? styles.active : ''}`} href={'/search'}>
        Classmate Search
      </a>
      <a className={`${styles.link} ${router.pathname == '/settings' ? styles.active : ''}`} href={'/settings'}>
        Settings
      </a>
    </div>
  )
}