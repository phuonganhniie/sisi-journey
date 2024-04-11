import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useWakaTimeLanguages from "../../api/wakatime/useWakatimeLanguages";
import Particle from "../Particle";
import "./About.css";
import AboutCard from "./AboutCard";
import LeetCode from "./LeetCode/LeetCode";
import SkillsScene from "./SkillSphere";
import TitleType from "./Title";
import LanguagesChart from "./Wakatime/LanguagesChart";
import TotalTimeCard from "./Wakatime/TotalTimeCard";

function About() {
  const location = useLocation();
  const languages = useWakaTimeLanguages();

  const [showAboutCard, setShowAboutCard] = useState(false);
  const [showSkillScene, setShowSkillScene] = useState(false);
  const [showCodingStats, setShowCodingStats] = useState(false);

  const checkScroll = useCallback(() => {
    const aboutCardPos = document
      .getElementById("about-card")
      .getBoundingClientRect().top;

    const skillScenePos = document
      .getElementById("skill-scene")
      .getBoundingClientRect().top;

    const codingStatsPos = document
      .getElementById("coding-stats")
      .getBoundingClientRect().top;

    const screenPos = window.innerHeight / 1.3;

    setShowAboutCard(aboutCardPos < screenPos);
    setShowSkillScene(skillScenePos < screenPos);
    setShowCodingStats(codingStatsPos < screenPos);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  useEffect(() => {
    setShowAboutCard(location.pathname === "/about");
  }, [location.pathname]);

  return (
    <div className="relative pt-36">
      <Particle />
      <div className="max-w-full">

        {/* About Card */}
        <div className="flex justify-centerp p-20">
          <div className="w-full md:px-6">
            <TitleType />
            <div id="about-card" className={`fade-in-section ${showAboutCard ? "visible" : ""}`}>
              <AboutCard />
            </div>
          </div>
        </div>

        {/* Stack & Tools */}
        <h1 className="text-center font-bold stacks-heading">
          My <strong className="purple">Stacks & Tools</strong> planet
        </h1>
        <div
          id="skill-scene"
          style={{ height: "90vh" }}
          className={`w-full relative pt-12 pb-10 fade-in-section ${showSkillScene ? "visible" : ""}`}
        >
          <SkillsScene />
        </div>

        {/* Coding Stats */}
        <h1 className="text-center font-bold pt-14 coding-stats-heading">
          My <strong className="purple">Coding Stats</strong> planet
        </h1>
        <div
          id="coding-stats"
          className={`fade-in-section ${showCodingStats ? "visible" : ""}`}
        >
          <div className="flex flex-wrap">
            {languages.length > 0 && (
              <div className="w-full md:w-1/2 coding-chart">
                <LanguagesChart languages={languages} />
              </div>
            )}

            <div className="w-full md:w-1/2">
              <div className="w-full coding-time">
                <TotalTimeCard />
              </div>

              <div className="w-full md:w-4/5 leetcode-stats">
                <LeetCode username="phuonganhniie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
