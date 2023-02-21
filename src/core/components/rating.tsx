import styles from "src/styles/rating.module.css";

export default function Rating(props: any) {
  const rating = props.rating;
  console.log(rating);
  const ratingBreakdownSections = [
    "Technical",
    "Effort",
    "Sociability",
    "Contribution"
  ];
  let colors = {
    green: "#86EF00",
    yellow: "#EFE600",
    red: "#EF4800"
  };
  let breakdown = [];
  for (let section of ratingBreakdownSections) {
    const numberRating = parseFloat(rating[section.toLowerCase()].toFixed(1));
    let boxColor = {
      "background": numberRating < 2.0 ? colors.red :
        numberRating < 3.6 ? colors.yellow : colors.green
    }
    const indexOfSection = ratingBreakdownSections.indexOf(section);
    let ratingBlock = <div className={styles.breakdownRating} key={indexOfSection}>
      {section}:
      <div className={styles.breakdownBox}
        style={boxColor}>{numberRating}</div>
    </div>;
    breakdown.push(ratingBlock);
    if(indexOfSection < ratingBreakdownSections.length - 1) {
      breakdown.push(<div className={styles.breakdownSeparator} key={`divider-${indexOfSection}`}></div>)
    }
  }
  // TODO: Clicking on a user's name will link to their profile
  return (
    <div className={styles.rating}>
      <div className={styles.topBar}>
        <div className={styles.user}>{rating.user}</div>
        <div className={styles.ratingBreakdown}>{breakdown}</div>
      </div>
      <div className={styles.class}>Class: {rating.class}</div>
      <div className={styles.comment}>"{rating.comment}"</div>
    </div>
  )
} 