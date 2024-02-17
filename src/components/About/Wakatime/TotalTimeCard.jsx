import { motion } from "framer-motion";
import React from "react";
import useWakaTimeTotalTime from "../../../api/wakatime/useWakatimeTotalTime";
import Counter from "./Counter";
import styles from "./TotalTimeCard.module.css";

const TotalTimeCard = React.memo(() => {
  const { totalTime, startDate } = useWakaTimeTotalTime();

  let totalTimeHours = React.useMemo(() => totalTime / 60 / 60, [totalTime]);

  return (
    <div
      className={`${styles["counter-border"]} ${styles["total-time-card"]}`}>
      <motion.i
        animate="active"
        initial="hidden"
      />
      <article>
        <div>
          <h2 className={`${styles['total-time-card-h2']} ${styles['gradient-text']}`}>My Coding Times</h2>
          <div className={styles["counter-value"]}>
            <Counter value={totalTimeHours} /> hours
          </div>
          <p className={styles["date-info"]}>Since: {startDate} (**since starting to join Wakatime)</p>
        </div>
      </article>
    </div>
  );
});

export default TotalTimeCard;
