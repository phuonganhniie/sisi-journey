import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main-2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { renderCanvas } from "../renderCanvas";
import './Home.module.css';

function Home() {
  const [showHome2, setShowHome2] = useState(false)

  const checkScroll = () => {
    const home2Pos = document.getElementById('home2').getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (home2Pos < screenPos) {
      setShowHome2(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    renderCanvas();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">  ĐỖ  PHƯƠNG  ANH</strong>
              </h1>

              <h2 className="heading-name-sub">
                And you can call me
                <strong className="sub-name"> MINERVA DO</strong>
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, paddingTop: 30}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div id="home2" className={`fade-in-section ${showHome2 ? 'visible' : ''}`}>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
