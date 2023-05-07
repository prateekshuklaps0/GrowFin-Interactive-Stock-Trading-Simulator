import { css } from "@emotion/react";

export const OuterCont = css`
  position: relative;
  height: 519px;
  margin-top: 80px;
  width: 100%;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0;
    background: linear-gradient(180deg, #050505 0%, #002b02 100%);
    filter: blur(50px);
  }
  z-index: 1;
  @media (max-width: 800px) {
    height: auto;
  }
`;
export const Head = css`
  position: absolute;
  color: white;
  margin-top: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  font-family: "K2D";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

export const ChildCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 125px;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
  }
`;

export const ActiveCardCont = css`
  text-align: center;
  transform: scale(0.9);
  width: 404.79px;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 380px;
  }
`;
export const ActiveBox = css`
  box-sizing: border-box;
  width: 165.22px;
  height: 165.22px;
  margin: auto;
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #02ae09 0%, #000000 100%);
  border: 0.516317px solid rgba(0, 255, 10, 0.75);

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ActiveImg = css`
  width: 61.96px;
  height: 61.96px;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ActiveHead = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 37.1749px;
  line-height: 45px;
  color: #00ff0a;
  opacity: 0.8;
  margin-top: 12px;
  margin-bottom: 0;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const ActiveText = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20.6527px;
  line-height: 25px;
  color: #00ff0a;
  opacity: 0.8;
  margin-top: 23.71px;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;

export const InActiveCardCont = css`
  text-align: center;
  transform: scale(0.8);
  cursor: pointer;
  width: 380px;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    width: 280px;
  }
`;
export const InActiveBox = css`
  background: #ffffff;

  width: 123.92px;
  height: 123.92px;
  margin: auto;
  border-radius: 50%;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InActiveImg = css`
  width: 41.31px;
  height: 41.31px;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InActiveHead = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24.7832px;
  line-height: 30px;
  color: #ffffff;
  margin-top: 23.75px;
  margin-bottom: 0;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const InActiveText = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  width: 258px;
  margin: auto;
  font-size: 18.4569px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin-top: 17.5px;

  @media (max-width: 900px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
