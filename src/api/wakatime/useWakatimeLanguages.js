import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const useWakaTimeLanguages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axiosInstance.get(
          `/v1/users/current/stats/last_7_days`
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
  }, []);

  return languages;
};

export default useWakaTimeLanguages;
