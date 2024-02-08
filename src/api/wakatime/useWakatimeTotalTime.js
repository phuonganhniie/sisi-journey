import { useEffect, useState } from "react";
import axios from "axios";

const useWakaTimeTotalTime = () => {
  const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;
  const [totalTime, setTotalTime] = useState({ totalTime: 0, startDate: "" });

  useEffect(() => {
    const fetchTotalTime = async () => {
      try {
        const response = await axios.get(
          `/api/v1/users/current/all_time_since_today`,
          {
            params: { api_key: apiKey },
          }
        );

        const { total_seconds } = response.data.data;
        const { start_date } = response.data.data.range;

        setTotalTime({ totalTime: total_seconds, startDate: start_date });
      } catch (error) {
        console.error("Error fetch total time: ", error);
      }
    };

    fetchTotalTime();
  }, [apiKey]);

  return totalTime;
};

export default useWakaTimeTotalTime;
