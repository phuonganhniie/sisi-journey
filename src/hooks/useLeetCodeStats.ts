import axios from "axios";
import { useEffect, useState } from "react";

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

interface LeetCodeStats {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate?: number;
  ranking?: number;
  contributionPoints?: number;
  reputation?: number;
}

function useLeetCodeStats(username: string) {
  const [data, setData] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cacheKey = `leetcodeStats-${username}`;
    const cachedData = localStorage.getItem(cacheKey);
    const cached = cachedData ? JSON.parse(cachedData) : null;
    const isCacheValid =
      cached && cached.timestamp + CACHE_DURATION > Date.now();

    if (isCacheValid && cached.data) {
      setData(cached.data as LeetCodeStats);
      setLoading(false);
    } else {
      axios
        .get<LeetCodeStats>(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        )
        .then((response) => {
          const dataToCache = {
            timestamp: Date.now(),
            data: response.data,
          };
          localStorage.setItem(cacheKey, JSON.stringify(dataToCache));
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "An error occurred");
          setLoading(false);
        });
    }
  }, [username]);

  return { data, loading, error };
}

export default useLeetCodeStats;
