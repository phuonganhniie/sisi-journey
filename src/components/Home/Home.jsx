import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main-2.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { renderCanvas } from "../renderCanvas";

function Home() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
        <Particle />
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
      <Home2 />
    </section>
  );
}

export default Home;
