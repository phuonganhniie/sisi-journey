import React from "react";
import styles from "./TotalTimeCard.module.css";
import Counter from "./Counter";
import useGlowPointer from "../../hooks/useGlowPointer";

const TotalTimeCard = ({ totalTime }) => {
  useGlowPointer();

  return (
    <div className={styles.wrapper}>
      <article className={`${styles.card}`} data-glow>
        <div className={styles.card__content}>
          <h2>Total Time</h2>
          <Counter value={totalTime} />
        </div>
      </article>
    </div>
  );
};

export default TotalTimeCard;
