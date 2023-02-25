import React from "react";
import AnimateTitle from "./AnimateTitle";
import AnimateLogo from "./AnimateLogo";

const RevealAnimations = () => {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <AnimateTitle />
      <AnimateLogo />
    </div>
  );
};

export default RevealAnimations;
