import { css } from "@emotion/react";

export const Outer = css`
  color: white;
  width: 80%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 140px;

  @media (max-width: 800px) {
    margin-bottom: 80px;
  }
  @media (max-width: 480px) {
    width: 88%;
    margin-bottom: 30px;
  }
`;
export const Upper = css`
  margin-bottom: 13.6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 480px) {
    margin-bottom: 10.6px;
  }
`;
export const UpperLeft = css`
  margin-bottom: 0;
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-top: 5px;
    width: 250px;
  }
`;
export const UpperText = css`
  margin-bottom: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 17.1742px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
export const ContLogo = css`
  margin-bottom: 0;
  width: 265px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 180px;
  }
  @media (max-width: 480px) {
  }
`;
export const Logos = css`
  margin-bottom: 0;
  cursor: pointer;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const Divider = css`
  margin-bottom: 0;
  width: 100%;
  background: #ffffff;
  border: 0.858712px solid #00ff0a;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
  }
`;
export const LowerCont = css`
  margin-bottom: 0;
  margin-top: -5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;
export const LowerLeft = css`
  margin-bottom: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  font-size: 18.8917px;
  line-height: 23px;
  letter-spacing: 0.005em;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
export const LowerRight = css`
  margin-bottom: 0;
  cursor: pointer;
  margin-right: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18.8917px;
  line-height: 23px;
  letter-spacing: 0.005em;
  color: #ffffff;

  @media (max-width: 800px) {
    font-size: 13px;
    margin-right: 0px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
