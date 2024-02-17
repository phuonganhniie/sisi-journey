import { FC, useState } from "react";
import styles from "./LeetCodeCardWrapper.module.css";

interface LeetCodeCardWrapperProps {
  children: React.ReactNode;
  redirectUrl: string;
}

const LeetCodeCardWrapper: FC<LeetCodeCardWrapperProps> = ({
  children,
  redirectUrl,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  const handleClick = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.front}>{children}</div>
      <div className={styles.back}>
        {isFlipped && (
          <div className={styles.centerContent}>
            <span>LeetCode →</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCodeCardWrapper;
