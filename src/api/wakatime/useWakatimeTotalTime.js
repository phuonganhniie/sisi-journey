import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const wakatimeBaseUrl = import.meta.env.WAKATIME_API_URL;

const useWakaTimeTotalTime = () => {
  const [totalTime, setTotalTime] = useState({ totalTime: 0, startDate: "" });

  useEffect(() => {
    const fetchTotalTime = async () => {
      try {
        const response = await axiosInstance.get(
          `${wakatimeBaseUrl}/api/v1/users/current/all_time_since_today`
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
