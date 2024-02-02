import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SkillsScene from "./SkillSphere";
import AboutCard from "./AboutCard";
import "./About.module.css";
import LanguagesChart from "./DoughnutChart";
import TotalTimeCard from "./TotalTimeCard";

function About() {
  const location = useLocation();
  const [showAboutCard, setShowAboutCard] = useState(false);
  const [showSkillScene, setShowSkillScene] = useState(false);
  const [showCodingStats, setShowCodingStats] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [totalTime, setTotalTime] = useState("0h");

  const checkScroll = () => {
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

    if (aboutCardPos < screenPos) {
      setShowAboutCard(true);
    }
    if (skillScenePos < screenPos) {
      setShowSkillScene(true);
    }
    if (codingStatsPos < screenPos) {
      setShowCodingStats(true);
    }
  };

  useEffect(() => {
    fetch("./src/data/wakatime.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLanguages(data.data.languages);
        setTotalTime(`${(data.data.total_seconds / 3600).toFixed(2)}h`);
      })
      .catch((error) => {
        console.error("There was a problem fetching the data:", error);
      });
  }, []);

  useEffect(() => {
    if (location.pathname === "/about") {
      setShowAboutCard(true);
    }

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
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
              <strong className="main-about">WELCOME TO SISI'S JOURNEY</strong>
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
            height: "80vh",
            position: "relative",
            paddingBottom: "100px",
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
                {/* Top half for TotalTimeCard */}
                <Col md={12} className="coding-time">
                  <TotalTimeCard totalTime={totalTime} />
                </Col>

                {/* Bottom half for LeetCodeStat */}
                <Col md={12} className="leetcode-stat">
                  {/* <LeetCodeStat /> */}abc
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
