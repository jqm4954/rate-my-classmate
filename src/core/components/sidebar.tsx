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
  let links: Link[] = [
    new Link("My Profile", '/profile'),
    new Link("Classmate Search", '/search'),
    new Link("Settings", '/settings')
  ]
  let htmlLinks = [];
  for(let link of links) {
    htmlLinks.push(<a className={`${styles.link} ${router.pathname == link.link ? styles.active : ''}`} href={link.link}>
      {link.title}
    </a>)
  }
  return (
    <div className={styles.sidebar}>
      <tbody>{htmlLinks}</tbody>
    </div>
  )
}