import React from "react";
import styles from "./TotalTimeCard.module.css";
import Counter from "./Counter";
import useGlowPointer from "../../hooks/useGlowPointer";

const TotalTimeCard = ({ totalTime }) => {
  useGlowPointer();

  let totalTimeHours = totalTime / 60 / 60;

  return (
    <div className={styles.wrapper}>
      <article className={styles.card} data-glow>
        <div className={styles.card__content}>
          <h2>Total Time</h2>
          <div className={styles.counter}>
            <Counter value={totalTimeHours} /> hours
          </div>
        </div>
      </article>
    </div>
  );
};

export default TotalTimeCard;
