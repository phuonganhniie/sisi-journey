import { useState, useEffect } from "react";
import axios from "axios";

const useWakaTimeLanguages = () => {
  const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(
          `/api/v1/users/current/stats/last_7_days`,
          {
            params: { api_key: apiKey },
          }
        );

        const sortedLanguages = response.data.data.languages
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 10)
          .map((lang) => ({
            name: lang.name,
            percent: lang.percent,
          }));

        setLanguages(sortedLanguages);
      } catch (error) {
        console.error("Error fetching languages: ", error);
      }
    };

    fetchLanguages();
  }, [apiKey]);

  return languages;
};

export default useWakaTimeLanguages;
