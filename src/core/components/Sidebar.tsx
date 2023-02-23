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

export function SideBar() {
  const router = useRouter();
  const links: Link[] = [
    new Link("My Profile", '/profile'),
    new Link("Classmate Search", '/search'),
    new Link("Settings", '/settings')
  ];
  let htmlLinks = [];
  for (let index in links) {
    htmlLinks.push(<a key={index} className={`${styles.link} ${router.pathname == links[index].link ? styles.active : ''}`} href={links[index].link}>{links[index].title}</a>);
  }
  return (
    <div className={styles.sidebar}>
      {htmlLinks}
    </div>
  )
}