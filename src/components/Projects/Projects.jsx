"use client";
import { Col, Container, Row } from "react-bootstrap";
import chronus from "../../Assets/Projects/chronus.png";
import foodOrder from "../../Assets/Projects/foodOrder.png";
import sisiJourney from "../../Assets/Projects/sisiJourney.png";
import sptTerminal from "../../Assets/Projects/sptTerminal.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Sisi Journey",
    description: "❤️ Welcome to my journey and let's join with me ❤️",
    imgSrc: sisiJourney,
    githubUrl: "https://github.com/phuonganhniie/sisi-journey",
  },
  {
    title: "Cronus Appointment",
    description: "A web application for manage your tasks, your events and appointments on your calendar 🗓️",
    imgSrc: chronus,
    githubUrl: "https://github.com/phuonganhniie/chronus-appoinment",
  },
  {
    title: "Spotify Terminal",
    description: "Spotify for terminal written in Go with builtin cover-art view 🎧. 🟢. 🎶. 🎵. ▷",
    imgSrc: sptTerminal,
    githubUrl: "https://github.com/phuonganhniie/spt-terminal",
  },
  {
    title: "Food Order Template",
    description: "This repository for the ReactJS homework at WeCamp 2023 ❤️",
    imgSrc: foodOrder,
    githubUrl: "https://github.com/phuonganhniie/wecamp2023-food-order-app",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">D.I.Y </strong> planet
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, idx) => (
            <Col md={4} key={idx}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
