import { useState, useEffect } from "react";
import axios from "axios";

const useWakaTimeData = () => {
  const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;
  const [data, setData] = useState({ languages: [], totalTime: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/users/current/stats/last_7_days`,
          {
            params: { api_key: apiKey },
          }
        );
        console.log("response from waka: ",response)

        const languages = response.data.data.languages.map((lang) => ({
          name: lang.name,
          percent: lang.percent,
        }));

        const totalTime = response.data.data.total_seconds;

        setData({ languages, totalTime });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  
  return data;
};

export default useWakaTimeData;
