import SideBar from "@/core/components/sidebar";
import Topbar from "@/core/components/topbar";
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
  const ratings = [
    {
      user: "Kamala Harris",
      class: "SWEN-356",
      technical: 2.5,
      effort: 4.0,
      sociability: 1.0,
      contribution: 1.0,
      comment: "There was this one time that uuuuuh"
    }, {
      user: "Obamna",
      class: "SWEN-356",
      technical: 2.0,
      effort: 5.0,
      sociability: 1.5,
      contribution: 0.5,
      comment: "Let me be clear"
    }
  ]
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
            <div>
              <div className={styles.avgRatingDistribution}>
                <div className={styles.title}>Average Rating Distribution</div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Technical</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.technical / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.technical}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Effort</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.effort / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.effort}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Sociability</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.sociability / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.sociability}</span>/5</div>
                </div>
                <div className={styles.distributionRow}>
                  <div className={styles.distributionTitle}>Contribution</div>
                  <div className={styles.progressBar}>
                    <div style={{ width: `${(overall.contribution / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
                  </div>
                  <div className={styles.distributionRating}><span className={styles.totalDistribution}>{overall.contribution}</span>/5</div>
                </div>
              </div>
              <div className={styles.ratingsOverall}>Based on {ratings.length} ratings overall</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}