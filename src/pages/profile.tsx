import SideBar from "@/core/components/sidebar";
import TopBar from "@/core/components/topbar";
import styles from "src/styles/profile.module.css";

export default function Profile() {
  // TODO: API calls
  const name: string = "Joe Brandon"
  const major: string = "Software Engineering";
  const overall = {
    rating: 3.8,
    technical: 3.4,
    effort: 4.2,
    sociability: 3.1,
    contribution: 4.5
  }
  return (
    <>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className={styles.content}>
          <h2>{name}</h2>
          <h3 className={styles.major}>{major}</h3>
          <div className={styles.avgRatingArea}>
            <div className={styles.overallRatingArea}>
              <span className={styles.overallRating}>{overall.rating}</span>/5
            </div>
            <div className={styles.avgRatingDistribution}>
              <div className={styles.distributionTitle}>Average Rating Distribution</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}