import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SkillsScene from "./SkillSphere";
import AboutCard from "./AboutCard";
import "./About.css";

function About() {
  const location = useLocation();
  const [showAboutCard, setShowAboutCard] = useState(false);
  const [showSkillScene, setShowSkillScene] = useState(false);

  const checkScroll = () => {
    const aboutCardPos = document
      .getElementById("about-card")
      .getBoundingClientRect().top;
    const skillScenePos = document
      .getElementById("skill-scene")
      .getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (aboutCardPos < screenPos) {
      setShowAboutCard(true);
    }
    if (skillScenePos < screenPos) {
      setShowSkillScene(true);
    }
  };

  useEffect(() => {
    if (location.pathname === '/about') {
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
        <h1 className="project-heading">
          <strong className="purple">Stacks</strong>
        </h1>

        <div
          id="skill-scene"
          style={{ width: "100%", height: "80vh", position: "relative" }}
          className={`fade-in-section ${showSkillScene ? "visible" : ""}`}
        >
          <SkillsScene />
        </div>
      </Container>
    </Container>
  );
}

export default About;
