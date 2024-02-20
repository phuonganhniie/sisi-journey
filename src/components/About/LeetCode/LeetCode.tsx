import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import styles from "./LeetCode.module.css";
import { useState } from "react";
import useLeetCodeStats from "../../../hooks/useLeetCodeStats";

const LeetCode: React.FC<{ username: string }> = ({ username }) => {
  const { data, loading, error } = useLeetCodeStats(username);
  const [hovered, setHovered] = useState(false);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found.</div>;

  console.log(data);

  const {
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
  } = data;

  const getPercentage = (solved: number, total: number) =>
    Math.round((solved / total) * 100);

  const radialOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "82%",
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#da22ff",
            fontSize: "22px",
          },
          value: {
            color: "#00c9ff",
            fontSize: "18px",
            formatter: function () {
              return `${totalSolved}/${totalQuestions}`;
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#da22ff", "#f7971e", "#00c9ff", "#2afadf"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    series: [getPercentage(totalSolved, totalQuestions)],
    labels: ["Solved"],
  };

  const handleRedirectLeetCode = () => {
    window.open("https://leetcode.com/phuonganhniie", "_blank");
  };

  return (
    <div
      className={styles["leetcode-overlay-container"]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleRedirectLeetCode}
    >
      <div className={styles["leetcode-component"]}>
        {/* LeetCode Total Questions */}
        <div className={styles["total-problems-chart"]}>
          <Chart
            options={radialOptions}
            series={radialOptions.series}
            type="radialBar"
          />
        </div>

        {/* LeetCode Difficulty */}
        <div className={styles["problem-difficulties"]}>
          {[
            {
              label: "Easy Problems",
              solved: easySolved,
              total: totalEasy,
              labelClass: "easyLabel",
              numberClass: "easyNumber",
            },
            {
              label: "Medium Problems",
              solved: mediumSolved,
              total: totalMedium,
              labelClass: "mediumLabel",
              numberClass: "mediumNumber",
            },
            {
              label: "Hard Problems",
              solved: hardSolved,
              total: totalHard,
              labelClass: "hardLabel",
              numberClass: "hardNumber",
            },
          ].map((difficulty) => (
            <div
              key={difficulty.label}
              className={styles["problem-difficulty"]}
            >
              <span className={styles[difficulty.labelClass]}>
                {difficulty.label}
                <strong className={styles[difficulty.numberClass]}>
                  {difficulty.solved}/{difficulty.total}
                </strong>
              </span>
              <div className={styles["progress-bar"]}>
                <div
                  className={styles["progress"]}
                  style={{
                    width: `${(difficulty.solved / difficulty.total) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className={styles["leetcode-overlay"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: hovered ? "auto" : "none" }}
      >
        <motion.div
          className={styles["leetcode-overlay-text"]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: hovered ? 1 : 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          My Leetcode Dashboard →
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeetCode;
