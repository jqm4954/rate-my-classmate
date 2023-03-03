import { RateModal } from "@/core/components/rateModal";
import {Rating} from "@/core/components/rating";
import {SideBar} from "@/core/components/Sidebar";
import { TopBar } from "@/core/components/Topbar";
import { useModal } from "@/core/hooks/useModal";
import { Button } from "reactstrap";
import styles from "src/styles/profile.module.css";

export default function classmateProfile() {
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
  
  const {isOpen, toggle} = useModal();

  const submitRate = (tech: number, effort: number, sociability : number, contributions: number, comments: string, overall: number) => {
      alert(comments)
      //request to api
      //then backend work
  }
  return (
    <>
      <RateModal isOpen={isOpen} toggle={toggle} submitRate={submitRate} rateName={name}/>
      <TopBar></TopBar>
      <div className="flex">
        <SideBar></SideBar>
        <div className={styles.content}>
          <h2>{name}</h2>
          <h3 className={styles.major}>{major}</h3>
          <div className={styles.avgRatingArea}>
            <div className={styles.overallRatingArea}>
              <span className={styles.overallRating}>{overall.rating}</span>/5
              <div className={styles.rateButton} onClick={toggle}>Rate</div>
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
          <div className={styles.ratingsTitle}>Ratings:</div>
          {htmlRatings}
        </div>
      </div>
    </>
  )
}
