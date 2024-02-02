import React from "react";
import "./TotalTimeCard.css";
import Counter from "./Counter";
import useGlowPointer from "../../hooks/useGlowPointer";
import GlowCard from "./GlowCard";

const TotalTimeCard = ({ totalTime }) => {
  useGlowPointer();

  return (
    <GlowCard asChild>
      <div className="total-time-card">
        <h3>Coding Time</h3>
        <Counter value={totalTime} /> hours
      </div>
    </GlowCard>
  );
};

export default TotalTimeCard;
