import React from "react";
import Card from "react-bootstrap/Card";
import AboutContent from "./AboutContent";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <AboutContent />
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
