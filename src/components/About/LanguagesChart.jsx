import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const generateGradientBackgroundColors = (languages) =>
  languages.map((_, index) => {
    const hue = (index * 30) % 360;
    return `hsla(${hue}, 100%, 50%, 0.7)`;
  });

const LanguagesChart = React.memo(({ languages }) => {
  const gradientBackgroundColors = React.useMemo(
    () => generateGradientBackgroundColors(languages),
    [languages]
  );

  const data = React.useMemo(() => ({
    labels: languages.map((lang) => lang.name),
    datasets: [
      {
        label: "Percent",
        data: languages.map((lang) => lang.percent),
        backgroundColor: gradientBackgroundColors,
        borderWidth: 1,
        hoverOffset: 8,
      },
    ],
  }), [languages, gradientBackgroundColors]);

  const options = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
      easing: "easeOutBounce",
      duration: 2000,
    },
    plugins: {
      legend: {
        position: "left",
        labels: {
          boxWidth: 20,
          font: {
            size: 13,
          },
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) =>
            ` ${tooltipItem.label}: ${tooltipItem.formattedValue} %`,
        },
      },
    },
  }), []);

  return (
    <div style={{ width: "480px", height: "450px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
});

export default LanguagesChart;
