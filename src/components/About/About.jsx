import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SkillsScene from "./SkillSphere";
import Aboutcard from "./AboutCard"

function About() {
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
            <h1 style={{ fontFamily: "Alegreya Sans SC", fontSize: "4em", paddingBottom: "20px" }}>
              <strong className="purple">WELCOME TO SISI'S JOURNEY</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillset </strong>
        </h1>
        
        <div style={{width: '100%', height: '80vh', position: 'relative'}}>
          <SkillsScene />
        </div>
        
      </Container>
    </Container>
  );
}

export default About;
