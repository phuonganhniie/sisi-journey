import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useWakaTimeLanguages from "../../api/wakatime/useWakatimeLanguages";
import Particle from "../Particle";
import "./About.css";
import AboutCard from "./AboutCard";
import LeetCode from './LeetCode/LeetCode';
import SkillsScene from "./SkillSphere";
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
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                fontFamily: "Alegreya Sans SC",
                fontSize: "4em",
                paddingBottom: "20px",
              }}
            >
              <strong className="main-about">WELCOME TO SISI'S UNIVERSE</strong>
            </h1>
            <div
              id="about-card"
              className={`fade-in-section ${showAboutCard ? "visible" : ""}`}
            >
              <AboutCard />
            </div>
          </Col>
        </Row>
        <h1 className="stacks-heading">
          <strong className="purple">Stacks & Tools</strong>
        </h1>
        <div
          id="skill-scene"
          style={{
            width: "100%",
            height: "90vh",
            position: "relative",
            paddingTop: "30px",
            paddingBottom: "80px",
          }}
          className={`fade-in-section ${showSkillScene ? "visible" : ""}`}
        >
          <SkillsScene />
        </div>

        <h1 className="coding-stats-heading">
          <strong className="purple">My Coding Stats</strong>
        </h1>
        <div
          id="coding-stats"
          className={`fade-in-section ${showCodingStats ? "visible" : ""}`}
        >
          <Row className="coding-stats-section">
            {languages.length > 0 && (
              <Col md={6} className="coding-chart">
                <LanguagesChart languages={languages} />
              </Col>
            )}

            <Col md={6} className="coding-time">
              <Row>
                <Col md={12} className="coding-time">
                  <TotalTimeCard />
                </Col>

                <Col md={12} className="leetcode-stats">
                    <LeetCode data={{ totalSolved: 920, totalQuestions: 3032, easySolved: 440, totalEasy: 767, mediumSolved: 410, totalMedium: 1594, hardSolved: 70, totalHard: 671 }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default About;
