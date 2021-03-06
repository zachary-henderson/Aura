import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { CircleContext } from "../context";
import circle from "../Images/circle.svg";

const rotate = keyframes`
    0% {
        transform: rotate(0deg) skewY(0deg) skewX(0deg);
    }

    10% {
      transform: rotate(36deg) skewY(5deg) skewX(0deg);
    }

    20% {
      transform: rotate(72deg) skewY(0deg) skewX(5deg);
    }
    30% {
      transform: rotate(108deg) skewY(-5deg) skewX(0deg);
    }
    40% {
      transform: rotate(144deg) skewY(0deg) skewX(-5deg);
    }

    50% {
      transform: rotate(180deg) skewY(5deg) skewX(0deg);
    }
    60% {
      transform: rotate(216deg) skewY(0deg) skewX(5deg);
    }
    70% {
      transform: rotate(256deg) skewY(-5deg) skewX(0deg);
    }
    80% {
      transform: rotate(288deg) skewY(0deg) skewX(-5deg);
    }
    90% {
      transform: rotate(324deg) skewY(5deg) skewX(0deg);
    }
    100% {

        transform: rotate(360deg) skewY(0deg) skewX(0deg);;

    }
`;
const CircleWrapper = styled.div`
  position: fixed;
  height: 30vh;
  width: 100%;
  top: 0;
  margin: 25px auto;

  & * {
    font-size: 1rem;
  }
  img {
    width: 30%;
    border-radius: 100%;
    margin-bottom: 5px;
    background: rgba(255, 225, 255, 0.8);
    box-shadow: rgba(255, 225, 255, 1) 0px 0px 90px 70px;
    animation: ${rotate} 15s linear infinite;
    border: 3px white solid;
  }
`;

const Circle = (props) => {
  const { circleText } = useContext(CircleContext);
  return (
    <CircleWrapper>
      <img alt="Aura Logo" src={circle} />
      {circleText.map((line, i) => {
        return <p key={`circleTheme-${i}`}>{line}</p>;
      })}
    </CircleWrapper>
  );
};

export default Circle;
