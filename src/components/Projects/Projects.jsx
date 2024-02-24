import { Col, Container, Row } from "react-bootstrap";
import chronus from "../../Assets/Projects/chronus.png";
import sisiJourney from "../../Assets/Projects/sisiJourney.png";
import sptTerminal from "../../Assets/Projects/sptTerminal.png";
import foodOrder from "../../Assets/Projects/foodOrder.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Exploration </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sisiJourney}
              isBlog={false}
              title="Sisi Journey"
              description="❤️ Welcome to my journey and let's join with me ❤️"
              ghLink="https://github.com/phuonganhniie/sisi-journey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chronus}
              isBlog={false}
              title="Cronus Appointment"
              description="A web application for manage your tasks, your events and appointments on your calendar."
              ghLink="https://github.com/phuonganhniie/chronus-appoinment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sptTerminal}
              isBlog={false}
              title="Spotify Terminal"
              description="Spotify for terminal written in Go with builtin cover-art view and much more."
              ghLink="https://github.com/phuonganhniie/spt-terminal"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodOrder}
              isBlog={false}
              title="Food Order Template"
              description="This repository for the second homework of WeCamp 2023: ReactJS"
              ghLink="https://github.com/phuonganhniie/wecamp2023-food-order-app"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
