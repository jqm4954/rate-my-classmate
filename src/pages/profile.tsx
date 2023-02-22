import Rating from "@/core/components/rating";
import { SideBar } from "@/core/components/Sidebar";
import { TopBar } from "@/core/components/Topbar";
import styles from "src/styles/profile.module.css";

export default function Profile() {
  // TODO: API calls
  const name: string = "Joe Brandon"
  const major: string = "Software Engineering";
  const overall: any = {
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
      comment: "ofdjvwofiwnhviwegniwengweiovewrigvewrvwe brgoviwevbewiufwn begrisvbgivuweb vw vbwovrb weo vuwbebgoiuenhbsorigvweoi vgweoviuwvewioeuvngwveoiugvwovigwmeovgwumeewruebotvhwivthtvwoeimvgmnwo emivmoivhn"
    }, {
      user: "Obamna",
      class: "SWEN-356",
      technical: 2.0,
      effort: 5.0,
      sociability: 1.5,
      contribution: 0.5,
      comment: "Let me be clear"
    }
  ];
  let htmlRatings = [];
  for (let index in ratings) {
    htmlRatings.push(<Rating key={index} rating={ratings[index]}></Rating>);
  }
  const ratingTitles: string[] = [
    "Technical",
    "Effort",
    "Sociability",
    "Contribution"
  ];
  let htmlRatingRows = [];
  for (let title of ratingTitles) {
    // console.log(title);
    let rating = overall[title.toLowerCase()];
    htmlRatingRows.push(
      <div className={styles.distributionRow}>
        <div className={styles.distributionTitle}>{title}</div>
        <div className={styles.progressBar}>
          <div style={{ width: `${(rating / 5.0) * 576}px` }} className={styles.distributionProgress}></div>
        </div>
        <div className={styles.distributionRating}><span className={styles.totalDistribution}>{rating}</span>/5</div>
      </div>
    )
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
            <div>
              <div className={styles.avgRatingDistribution}>
                <div className={styles.title}>Average Rating Distribution</div>
                {htmlRatingRows}
              </div>
              <div className={styles.ratingsOverall}>Based on {ratings.length} ratings overall</div>
            </div>
          </div>
          <div className={styles.ratingsTitle}>Ratings:</div>
          {htmlRatings}
        </div>
      </div>
    </>
  )
}