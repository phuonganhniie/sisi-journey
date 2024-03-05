import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pa-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "35px" }}>
              THANK YOU FOR <span className="purple"> APPEARING </span> HERE
            </h1>
            <p className="home-about-body">
              My name is <b className="purple">Phương Anh</b>, but if you're not sure how to pronounce it, you can call me <b className="purple"> Minerva </b> - which is my English name. I'm a developer who <b className="purple">loves</b> to code and works on both Back-End and Front-End, but I definitely lean more towards Back-End. Sometimes, I also dabble in systems because, at the end of the day, I just the normal person who loves <b className="purple">technology, researching, exploring, and learning.</b>
              <br />
              <br />I work regularly with
              <i>
                <b className="purple"> Golang, NodeJS </b> and more recently, <b className="purple"> ReactJS. </b>
              </i>
              <br />
              <br />
              I also really enjoy exploring about &nbsp;
              <i>
                <b className="purple">infrastructure, networks, and security, </b> (but still a fresher) so I actively seek out opportunities to collaborate with DevSecOps teams
                both within my work environment and in the community.
              </i>
              <br />
              <br />
              Because after all, my greatest aspiration is together with technology to develop the world in
              &nbsp; 
              <b className="purple"> a civilized and beautiful way.</b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/phuonganhniie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub className="mt-2.5 ml-2.5" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/minerva-do/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn className="mt-2.5 ml-2.5" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
