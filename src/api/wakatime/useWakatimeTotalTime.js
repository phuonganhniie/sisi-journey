import { useEffect, useState } from "react";
import wkInstance from "../wakatime";

const useWakaTimeTotalTime = () => {
  const [totalTime, setTotalTime] = useState({ totalTime: 0, startDate: "" });

  useEffect(() => {
    const fetchTotalTime = async () => {
      try {
        const response = await wkInstance.get(
          `/all_time_since_today`
        );

        const { total_seconds } = response.data.data;
        const { start_date } = response.data.data.range;

        setTotalTime({ totalTime: total_seconds, startDate: start_date });
      } catch (error) {
        console.error("Error fetch total time: ", error);
      }
    };

    fetchTotalTime();
  }, []);

  return totalTime;
};

export default useWakaTimeTotalTime;
