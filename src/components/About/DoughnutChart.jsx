import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguagesChart = ({ languages }) => {
  const gradientBackgroundColors = languages.map((lang, index) => {
    const hue = (index * 30) % 360;
    return `hsla(${hue}, 100%, 50%, 0.7)`;
  });

  const data = {
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
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,
      animateRotate: true,
      easing: 'easeOutBounce',
      duration: 2000,
    },
    plugins: {
      legend: {
        position: "left",
        labels: {
          boxWidth: 20,
          font: {
            size: 12,
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
  };

  return (
    <div style={{ width: "450px", height: "400px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default LanguagesChart;
